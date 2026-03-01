import { ArrowRight } from 'lucide-react'
import { FEATURED_JOBS } from '../../shared/api/mock/jobs'
import { Button } from '../../shared/ui/Button'
import { JobCard } from '../../shared/ui/JobCard'

export function FeaturedJobs() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Vagas em Destaque</h2>
            <p className="text-neutral-400 max-w-lg">
              Oportunidades recentes de empresas locais buscando talentos como você.
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-primary-400 hover:text-primary-300 group shrink-0"
          >
            Ver todas
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_JOBS.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}
