import { ArrowRight } from 'lucide-react'
import { Button } from '../../shared/ui/Button'

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Pronto para encontrar seu <span className="text-primary-400">próximo talento?</span>
        </h2>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Publique vagas, encontre candidatos locais e contrate de forma rápida e segura.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 group">
            Quero Contratar
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-neutral-600 text-neutral-300 hover:border-neutral-400 hover:text-white"
          >
            Buscar Vagas
          </Button>
        </div>

        <p className="mt-8 text-sm text-neutral-600">
          Plano gratuito disponível · Sem cartão de crédito
        </p>
      </div>
    </section>
  )
}
