import { Briefcase, MapPin, TrendingUp } from 'lucide-react'
import { JobSearchForm } from '../../shared/ui/JobSearchForm'

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-subtle-grid" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="absolute inset-0 bg-flow-lines opacity-70" />

      <div className="absolute left-[15%] top-0 bottom-0 hidden lg:block">
        <div className="glow-line-v h-full" />
        <div className="glow-node absolute top-[20%] -left-[2px]" />
        <div className="glow-node absolute top-[80%] -left-[2px]" />
      </div>

      <div className="absolute right-[15%] top-0 bottom-0 hidden lg:block">
        <div className="glow-line-v h-full" />
        <div className="glow-node absolute top-[30%] -left-[2px]" />
        <div className="glow-node absolute top-[70%] -left-[2px]" />
      </div>

      <div className="absolute left-0 right-0 top-[40%] hidden lg:block">
        <div className="glow-line-h w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          O emprego que você busca, <span className="text-primary-400">perto de casa.</span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Conectamos talentos locais às melhores empresas de Maricá.
        </p>

        <div className="flex justify-center mb-16">
          <JobSearchForm />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="flex items-center gap-3 text-neutral-300">
            <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/10">
              <Briefcase size={20} className="text-primary-400" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">Empresas</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-neutral-700/50" />

          <div className="flex items-center gap-3 text-neutral-300">
            <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/10">
              <TrendingUp size={20} className="text-primary-400" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">3 Dias</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Média de Contratação
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-neutral-700/50" />

          <div className="flex items-center gap-3 text-neutral-300">
            <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/10">
              <MapPin size={20} className="text-primary-400" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">Foco Local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
