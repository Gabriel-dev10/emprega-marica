import { Building2, Clock, DollarSign, MapPin } from 'lucide-react'

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
    <Card hoverEffect className="h-full flex flex-col p-6 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            ) : (
              <Building2 className="text-primary-400" size={24} />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg text-white line-clamp-1 group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 font-medium">{company}</p>
          </div>
        </div>
        {isNew && (
          <span className="px-2.5 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold uppercase rounded-full border border-primary-500/20">
            Novo
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center text-sm text-neutral-300">
          <MapPin size={16} className="mr-2 text-primary-500/60" />
          {location}
        </div>
        <div className="flex items-center text-sm text-neutral-300">
          <Clock size={16} className="mr-2 text-primary-500/60" />
          {type}
        </div>
        <div className="flex items-center text-sm text-neutral-300">
          <DollarSign size={16} className="mr-2 text-primary-500/60" />
          {salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-white/5 text-neutral-300 text-xs rounded-lg border border-white/10"
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
