import { Card } from '../../../components/Card'
import { BENEFITS } from '../../../shared/api/mock/benefits'
import { SectionHeader } from './ui/SectionHeader'

export function Benefits() {
  return (
    /* Usamos neutral-900 que é o nosso fundo creme, e tiramos o white e o dark */
    <section id="beneficios" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Por que escolher o EmpregaAí?"
          subtitle="Muito mais que um portal de vagas, somos um movimento de valorização local desenhado para as necessidades reais do empresário maricaense."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item) => (
            <Card key={item.title} className="p-8 h-full" hoverEffect>
              {/* Fundo do ícone com um verde bem clarinho (primary-100) */}
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Mudamos para neutral-50 que agora é o nosso texto quase preto */}
              <h3 className="text-xl font-bold text-neutral-50 mb-3">{item.title}</h3>

              {/* Mudamos para neutral-300 que é um cinza escuro, ótimo para leitura */}
              <p className="text-neutral-300 leading-relaxed text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
