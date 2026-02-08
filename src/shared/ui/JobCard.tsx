import { Building2, Clock, DollarSign, MapPin } from 'lucide-react'
import type React from 'react'
import { Button } from '../../shared/ui/Button'
import { Card } from '../../shared/ui/Card'

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  tags?: string[]
  logo?: string
  isNew?: boolean
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  type,
  salary,
  tags = [],
  logo,
  isNew = false,
}) => {
  return (
    <Card hoverEffect className="h-full flex flex-col p-6 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-700">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            ) : (
              <Building2 className="text-neutral-400" size={24} />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{company}</p>
          </div>
        </div>
        {isNew && (
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase rounded-full">
            Novo
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <MapPin size={16} className="mr-2 text-neutral-400" />
          {location}
        </div>
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <Clock size={16} className="mr-2 text-neutral-400" />
          {type}
        </div>
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <DollarSign size={16} className="mr-2 text-neutral-400" />
          {salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button variant="outline" fullWidth className="mt-auto">
        Ver Detalhes
      </Button>
    </Card>
  )
}
