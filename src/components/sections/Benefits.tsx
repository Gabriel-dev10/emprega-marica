import { BENEFITS } from '../../shared/api/mock/benefits'
import { Card } from '../../shared/ui/Card'

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Por que escolher o EmpregaAí?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            Muito mais que um portal de vagas, somos um movimento de valorização local desenhado
            para as necessidades reais do empresário maricaense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item) => (
            <Card key={item.title} className="p-8 h-full" hoverEffect>
              <div className="bg-primary-50 dark:bg-primary-900/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
