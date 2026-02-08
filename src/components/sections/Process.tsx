import { ArrowRight } from 'lucide-react'
import type React from 'react'
import { PROCESS_STEPS } from '../../shared/api/mock/process'
import { Button } from '../../shared/ui/Button'

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-primary-50 dark:bg-primary-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Menos RH operacional, <br />
              <span className="text-primary-600 dark:text-primary-400">
                Mais contratações assertivas.
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Eliminamos planilhas, emails perdidos e currículos de papel. Sua gestão de vagas agora
              é 100% digital e centralizada.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <Button variant="secondary" className="group">
              Ver demonstração
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {index !== PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-neutral-300 dark:bg-neutral-600 z-0"></div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-neutral-900 shadow-sm text-primary-600 dark:text-primary-400 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 text-xs font-bold px-3 py-1 rounded-full border border-neutral-100 dark:border-neutral-700 shadow-sm uppercase tracking-wider">
                  {step.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
