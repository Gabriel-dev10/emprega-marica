import { Clock, MapPin, Users, Wallet } from 'lucide-react'
import React from 'react'

export const BENEFITS = [
  {
    icon: React.createElement(MapPin, {
      className: 'w-8 h-8 text-primary-600 dark:text-primary-400',
    }),
    title: 'Foco 100% Local',
    description:
      'Esqueça candidatos que moram longe. Nossa base é exclusiva de moradores de Maricá, garantindo pontualidade e menor custo de transporte.',
  },
  {
    icon: React.createElement(Wallet, {
      className: 'w-8 h-8 text-primary-600 dark:text-primary-400',
    }),
    title: 'Aceita Mumbuca',
    description:
      'Somos parte do ecossistema da cidade. Pague seus planos de recrutamento utilizando a moeda local Mumbuca com facilidade.',
  },
  {
    icon: React.createElement(Users, {
      className: 'w-8 h-8 text-primary-600 dark:text-primary-400',
    }),
    title: 'Banco Diversificado',
    description:
      'De jovens aprendizes a seniores 60+. Removemos barreiras para você encontrar a experiência exata que seu negócio precisa.',
  },
  {
    icon: React.createElement(Clock, {
      className: 'w-8 h-8 text-primary-600 dark:text-primary-400',
    }),
    title: 'Agilidade na Contratação',
    description:
      'Comerciantes locais relatam contratações assertivas em menos de 3 dias graças aos nossos filtros inteligentes por bairro.',
  },
]
