import { Check, Star, X, Zap } from 'lucide-react'

import { useState } from 'react'
import { PLANS } from '../../shared/api/mock/plans'
import { Button } from '../../shared/ui/Button'

export function Services() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="planos" className="py-24 bg-white dark:bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Investimento que retorna para sua empresa
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-8">
            Escolha o plano ideal para o seu momento. Sem taxas escondidas, sem fidelidade e com a
            facilidade da moeda local.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}
            >
              Mensal
            </span>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <div className="w-14 h-7 bg-primary-600 rounded-full shadow-inner transition-colors duration-200 ease-in-out"></div>
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}
            >
              Anual{' '}
              <span className="text-primary-600 dark:text-primary-400 text-xs font-bold ml-1 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-full">
                -20% OFF
              </span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative bg-white dark:bg-neutral-800 rounded-2xl border transition-all duration-300 flex flex-col
                ${
                  plan.popular
                    ? 'border-primary-600 dark:border-primary-500 shadow-xl scale-100 md:scale-105 z-10'
                    : 'border-neutral-200 dark:border-neutral-700 shadow-sm hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-md'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                  <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center shadow-md">
                    <Star size={12} className="mr-1 fill-current" /> Mais Escolhido
                  </span>
                </div>
              )}

              <div className="p-8 border-b border-neutral-100 dark:border-neutral-700">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm h-10 leading-snug">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  {plan.price.monthly !== 'Sob Consulta' && plan.price.monthly !== 'Grátis' && (
                    <span className="text-neutral-500 dark:text-neutral-400 ml-1 font-medium">
                      {plan.period}
                    </span>
                  )}
                </div>

                {plan.popular && (
                  <div className="mt-4 inline-flex items-center px-2.5 py-1 rounded bg-blue-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold">
                    <Zap size={12} className="mr-1.5" />
                    Aceitamos Mumbuca
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start text-sm ${feature.included ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-400 dark:text-neutral-600'}`}
                    >
                      {feature.included ? (
                        <div
                          className={`mt-0.5 mr-3 shrink-0 rounded-full p-0.5 ${feature ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'bg-green-100 text-green-600'}`}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <X size={16} className="mt-0.5 mr-3 shrink-0 text-neutral-300" />
                      )}
                      <span
                        className={
                          feature ? 'font-semibold text-primary-700 dark:text-primary-400' : ''
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button
                  variant={plan.variant as 'primary' | 'secondary' | 'outline' | 'ghost'}
                  fullWidth
                  size="lg"
                  className={plan.popular ? 'shadow-lg shadow-primary-600/20' : ''}
                >
                  {plan.cta}
                </Button>
                {plan.name === 'Inicial' && (
                  <p className="text-center text-xs text-neutral-400 mt-3">
                    Não requer cartão de crédito
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-neutral-700 border-t border-neutral-200 dark:border-neutral-700 pt-8 max-w-5xl mx-auto">
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
              Cancele quando quiser
            </h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Sem contratos de fidelidade ou multas.
            </p>
          </div>
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
              Nota Fiscal Carioca
            </h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Emitimos NF para todas as transações.
            </p>
          </div>
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
              Precisa de ajuda?
            </h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Suporte especializado local.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
