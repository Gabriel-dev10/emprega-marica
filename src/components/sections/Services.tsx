import React, { useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { Check, X, Star, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Inicial",
      description: "Para MEIs e quem está começando a contratar.",
      price: { monthly: "Grátis", yearly: "Grátis" },
      features: [
        { text: "1 Vaga Ativa", included: true },
        { text: "Visibilidade Básica", included: true },
        { text: "Triagem de currículos", included: true },
        { text: "Banco de Talentos", included: false },
        { text: "Destaque na busca", included: false },
        { text: "Pagamento via Mumbuca", included: false },
      ],
      cta: "Criar conta grátis",
      variant: "outline",
      popular: false
    },
    {
      name: "Maricá Pro",
      description: "A escolha inteligente para comércios e serviços.",
      price: { monthly: "R$ 49", yearly: "R$ 39" },
      period: "/mês",
      features: [
        { text: "Vagas Ilimitadas", included: true },
        { text: "Pagamento via Mumbuca", included: true, highlight: true },
        { text: "Acesso ao Banco de Talentos", included: true },
        { text: "Filtros por Bairro", included: true },
        { text: "Destaque nas buscas", included: true },
        { text: "Suporte WhatsApp Prioritário", included: true },
      ],
      cta: "Assinar Maricá Pro",
      variant: "primary",
      popular: true
    },
    {
      name: "Corporativo",
      description: "Para grandes redes, indústrias e RHs estruturados.",
      price: { monthly: "Sob Consulta", yearly: "Sob Consulta" },
      features: [
        { text: "Vagas Ilimitadas", included: true },
        { text: "Múltiplos Recrutadores", included: true },
        { text: "Integração via API", included: true },
        { text: "Gestor de Conta Dedicado", included: true },
        { text: "Employer Branding", included: true },
        { text: "Relatórios de Performance", included: true },
      ],
      cta: "Falar com Consultor",
      variant: "outline",
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Investimento que retorna para sua empresa
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Escolha o plano ideal para o seu momento. Sem taxas escondidas, sem fidelidade e com a facilidade da moeda local.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-neutral-900' : 'text-neutral-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <div className="w-14 h-7 bg-primary-600 rounded-full shadow-inner transition-colors duration-200 ease-in-out"></div>
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-neutral-900' : 'text-neutral-500'}`}>
              Anual <span className="text-primary-600 text-xs font-bold ml-1 bg-primary-50 px-2 py-0.5 rounded-full">-20% OFF</span>
            </span>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative bg-white rounded-2xl border transition-all duration-300 flex flex-col
                ${plan.popular 
                  ? 'border-primary-600 shadow-xl scale-100 md:scale-105 z-10' 
                  : 'border-neutral-200 shadow-sm hover:border-primary-200 hover:shadow-md'
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

              <div className="p-8 border-b border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-500 text-sm h-10 leading-snug">{plan.description}</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-900">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  {plan.price.monthly !== 'Sob Consulta' && plan.price.monthly !== 'Grátis' && (
                    <span className="text-neutral-500 ml-1 font-medium">{plan.period}</span>
                  )}
                </div>
                
                {plan.popular && (
                  <div className="mt-4 inline-flex items-center px-2.5 py-1 rounded bg-blue-50 text-primary-700 text-xs font-semibold">
                    <Zap size={12} className="mr-1.5" />
                    Aceitamos Mumbuca
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm ${feature.included ? 'text-neutral-700' : 'text-neutral-400'}`}>
                      {feature.included ? (
                        <div className={`mt-0.5 mr-3 shrink-0 rounded-full p-0.5 ${feature ? 'bg-primary-100 text-primary-600' : 'bg-green-100 text-green-600'}`}>
                           <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <X size={16} className="mt-0.5 mr-3 shrink-0 text-neutral-300" />
                      )}
                      <span className={feature ? 'font-semibold text-primary-700' : ''}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button 
                  variant={plan.variant as any} 
                  fullWidth
                  size="lg"
                  className={plan.popular ? 'shadow-lg shadow-primary-600/20' : ''}
                >
                  {plan.cta}
                </Button>
                {plan.name === "Inicial" && (
                  <p className="text-center text-xs text-neutral-400 mt-3">
                    Não requer cartão de crédito
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer da Seção */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 border-t border-neutral-200 pt-8 max-w-5xl mx-auto">
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 mb-1">Cancele quando quiser</h4>
            <p className="text-sm text-neutral-500">Sem contratos de fidelidade ou multas.</p>
          </div>
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 mb-1">Nota Fiscal Carioca</h4>
            <p className="text-sm text-neutral-500">Emitimos NF para todas as transações.</p>
          </div>
          <div className="text-center px-4 py-4 sm:py-0">
            <h4 className="font-semibold text-neutral-900 mb-1">Precisa de ajuda?</h4>
            <p className="text-sm text-neutral-500">Suporte especializado local.</p>
          </div>
        </div>

      </div>
    </section>
  );
};