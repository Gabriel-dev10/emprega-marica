import React from 'react';
import { Button } from '../../shared/ui/Button';
import { UserPlus, Zap, MousePointerClick, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <UserPlus size={28} />,
      title: "Cadastro em 30 Segundos",
      description: "Sem burocracia. CNPJ, nome da empresa e pronto. Você já está habilitado para acessar o maior banco de talentos de Maricá.",
      badge: "Rápido"
    },
    {
      id: 2,
      icon: <MousePointerClick size={28} />,
      title: "Publique com 1 Clique",
      description: "Nosso sistema usa inteligência para preencher descrições automaticamente. Sua vaga vai ao ar e notifica candidatos do bairro na hora.",
      badge: "Inteligente"
    },
    {
      id: 3,
      icon: <Zap size={28} />,
      title: "Contrate em Recorde",
      description: "Receba currículos padronizados no seu painel. Filtre, chame no WhatsApp com um clique e feche a vaga em dias, não semanas.",
      badge: "Eficaz"
    }
  ];

  return (
    <section id="processo" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Menos RH operacional, <br/>
              <span className="text-primary-600">Mais contratações assertivas.</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Eliminamos planilhas, emails perdidos e currículos de papel. 
              Sua gestão de vagas agora é 100% digital e centralizada.
            </p>
          </div>
          <div className="hidden md:block pb-2">
             <Button variant="secondary" className="group">
                Ver demonstração
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="group relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              {/* Conector Visual entre cards (apenas desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-neutral-300 z-0"></div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm text-primary-600 flex items-center justify-center border border-neutral-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="bg-white text-neutral-600 text-xs font-bold px-3 py-1 rounded-full border border-neutral-100 shadow-sm uppercase tracking-wider">
                  {step.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};