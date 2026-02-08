import { MousePointerClick, UserPlus, Zap } from 'lucide-react'
import React from 'react'

export const PROCESS_STEPS = [
  {
    id: 1,
    icon: React.createElement(UserPlus, { size: 28 }),
    title: 'Cadastro em 30 Segundos',
    description:
      'Sem burocracia. CNPJ, nome da empresa e pronto. Você já está habilitado para acessar o maior banco de talentos de Maricá.',
    badge: 'Rápido',
  },
  {
    id: 2,
    icon: React.createElement(MousePointerClick, { size: 28 }),
    title: 'Publique com 1 Clique',
    description:
      'Nosso sistema usa inteligência para preencher descrições automaticamente. Sua vaga vai ao ar e notifica candidatos do bairro na hora.',
    badge: 'Inteligente',
  },
  {
    id: 3,
    icon: React.createElement(Zap, { size: 28 }),
    title: 'Contrate em Recorde',
    description:
      'Receba currículos padronizados no seu painel. Filtre, chame no WhatsApp com um clique e feche a vaga em dias, não semanas.',
    badge: 'Eficaz',
  },
]
