import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { FEATURED_JOBS } from '../../../shared/api/mock/jobs'
import { JobCard } from './ui/JobCard'

export function FeaturedJobs() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-950 relative border-t border-neutral-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-default mb-3 tracking-tight">
              Vagas em Destaque
            </h2>
            <p className="text-lg text-text-subtle">
              Oportunidades recentes de empresas de Maricá buscando talentos como você.
            </p>
          </div>

          <Link to="/vagas" className="w-full md:w-auto shrink-0">
            <Button
              variant="outline"
              className="w-full md:w-auto flex items-center justify-center gap-2 border-neutral-800 hover:bg-neutral-900 text-text-muted hover:text-text-default transition-all group py-2.5 px-5"
            >
              Ver todas as vagas
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform text-text-subtle group-hover:text-text-link"
              />
            </Button>
          </Link>
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
