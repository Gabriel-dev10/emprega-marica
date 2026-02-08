import { CheckCircle } from 'lucide-react'
import type React from 'react'
import { JobSearchForm } from '../../shared/ui/JobSearchForm'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase tracking-wide mb-6">
              Exclusivo para Maricá
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
              O emprego que você busca,
              <br />
              <span className="text-primary-600 dark:text-primary-400">perto de casa.</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Conectamos talentos locais às melhores empresas de Maricá. Valorizamos sua
              experiência, seja você um jovem aprendiz ou um profissional 60+.
            </p>
            <JobSearchForm />
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span>Cadastro Gratuito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span>Candidatos 100% Locais</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span>Redução de Turnover</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-primary-600/10 rounded-2xl transform rotate-3 blur-lg"></div>
            <img
              src="https://picsum.photos/800/600?grayscale"
              alt="Profissionais trabalhando em Maricá"
              className="relative rounded-2xl shadow-xl border border-white/50 object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-400 font-bold">
                  RH
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                    Nova contratação
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Há 2 horas • Centro, Maricá
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                "Encontramos um gerente experiente do bairro Flamengo em 2 dias."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
