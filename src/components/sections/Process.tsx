import { ClipboardList, Search, UserCheck } from 'lucide-react'

const steps = [
  {
    icon: <ClipboardList size={28} />,
    number: '01',
    title: 'Cadastre-se',
    description: 'Crie sua conta gratuitamente em menos de 2 minutos.',
  },
  {
    icon: <Search size={28} />,
    number: '02',
    title: 'Encontre Vagas',
    description: 'Busque oportunidades por localização, área ou tipo de contrato.',
  },
  {
    icon: <UserCheck size={28} />,
    number: '03',
    title: 'Seja Contratado',
    description: 'Candidate-se e acompanhe o processo de seleção em tempo real.',
  },
]

export function Process() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Como Funciona</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">Simples, rápido e sem burocracia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-800/80 border border-neutral-700/50 text-primary-400 mb-6 group-hover:bg-primary-600/10 group-hover:border-primary-600/30 transition-all duration-300">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 md:relative md:top-auto md:right-auto hidden">
                <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
