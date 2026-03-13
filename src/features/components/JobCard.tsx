import { Building2, Clock, DollarSign, MapPin } from 'lucide-react'

import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

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

export function JobCard({
  title,
  company,
  location,
  type,
  salary,
  tags = [],
  logo,
  isNew = false,
}: JobCardProps) {
  return (
    <Card
      hoverEffect
      className="h-full flex flex-col p-6 transition-all duration-300 bg-neutral-950 border-neutral-700"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            ) : (
              <Building2 className="text-primary-600" size={24} />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-50 line-clamp-1 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 font-medium">{company}</p>
          </div>
        </div>
        {isNew && (
          <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-[10px] font-bold uppercase rounded-full border border-primary-200">
            Novo
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6 grow">
        <div className="flex items-center text-sm text-neutral-300">
          <MapPin size={16} className="mr-2 text-primary-600" />
          {location}
        </div>
        <div className="flex items-center text-sm text-neutral-300">
          <Clock size={16} className="mr-2 text-primary-600" />
          {type}
        </div>
        <div className="flex items-center text-sm text-neutral-300">
          <DollarSign size={16} className="mr-2 text-primary-600" />
          {salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md border border-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        fullWidth
        className="mt-auto border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
      >
        Ver Detalhes
      </Button>
    </Card>
  )
}
