import { Briefcase, MapPin, TrendingUp } from 'lucide-react'
import { JobSearchForm } from '../../components/JobSearchForm'
import { StatCard } from './ui/StatCard'

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Mudamos de text-white para text-neutral-50 (o nosso texto quase preto) */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-50 leading-[1.1] tracking-tight mb-6">
          O emprego que você busca, <span className="text-primary-600">perto de casa.</span>
        </h1>

        {/* Mudamos para text-neutral-300, que é um cinza escuro excelente para leitura */}
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Conectamos talentos locais às melhores empresas de Maricá.
        </p>

        <div className="flex justify-center mb-16">
          <JobSearchForm />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <StatCard icon={Briefcase} value="500+" label="Empresas" />

          {/* As linhas divisórias agora usam um cinza suave para combinar com o fundo claro */}
          <div className="hidden sm:block w-px h-10 bg-neutral-600/50" />

          <StatCard icon={TrendingUp} value="3 Dias" label="Média de Contratação" />

          <div className="hidden sm:block w-px h-10 bg-neutral-600/50" />

          <StatCard icon={MapPin} value="100%" label="Foco Local" />
        </div>
      </div>
    </section>
  )
}
