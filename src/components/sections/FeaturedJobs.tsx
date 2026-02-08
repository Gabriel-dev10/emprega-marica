import { ArrowRight } from 'lucide-react'
import type React from 'react'
import { FEATURED_JOBS } from '../../shared/api/mock/jobs'
import { Button } from '../../shared/ui/Button'
import { JobCard } from '../../shared/ui/JobCard'

export const FeaturedJobs: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase tracking-wide mb-4">
              Vagas em Destaque
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Oportunidades Recentes em Maricá
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Confira as vagas que acabaram de chegar. Empresas locais buscando talentos como você.
            </p>
          </div>
          <Button variant="secondary" className="hidden md:flex group">
            Ver Todas as Vagas
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_JOBS.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="secondary" fullWidth className="group">
            Ver Todas as Vagas
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
