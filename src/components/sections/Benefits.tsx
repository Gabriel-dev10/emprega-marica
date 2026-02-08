import React from 'react';
import { Card } from '../../shared/ui/Card';
import { MapPin, Wallet, Users, Clock } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Foco 100% Local",
      description: "Esqueça candidatos que moram longe. Nossa base é exclusiva de moradores de Maricá, garantindo pontualidade e menor custo de transporte."
    },
    {
      icon: <Wallet className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Aceita Mumbuca",
      description: "Somos parte do ecossistema da cidade. Pague seus planos de recrutamento utilizando a moeda local Mumbuca com facilidade."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Banco Diversificado",
      description: "De jovens aprendizes a seniores 60+. Removemos barreiras para você encontrar a experiência exata que seu negócio precisa."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Agilidade na Contratação",
      description: "Comerciantes locais relatam contratações assertivas em menos de 3 dias graças aos nossos filtros inteligentes por bairro."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Por que escolher o EmpregaAí?</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            Muito mais que um portal de vagas, somos um movimento de valorização local desenhado para as necessidades reais do empresário maricaense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="p-8 h-full" hoverEffect>
              <div className="bg-primary-50 dark:bg-primary-900/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};