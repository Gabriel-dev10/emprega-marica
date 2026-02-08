import React from 'react';
import { Button } from '../../shared/ui/Button';
import { MapPin, TrendingUp, Bell, ShieldCheck } from 'lucide-react';

export const Candidates: React.FC = () => {
  return (
    <section id="candidatos" className="py-24 bg-neutral-50 dark:bg-neutral-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Conteúdo */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold uppercase tracking-wide mb-6">
              100% Gratuito para Candidatos
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
              Chega de perder horas no trânsito para o Rio ou Niterói.
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              A qualidade de vida que você sonha começa trabalhando perto de casa. 
              O EmpregaAí conecta você às melhores oportunidades de Maricá, valorizando quem vive na nossa cidade.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-600 mr-4 shrink-0">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">Vagas no seu bairro</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Filtre oportunidades em Itaipuaçu, Centro, Inoã, Ponta Negra e mais.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-600 mr-4 shrink-0">
                  <ShieldCheck className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">Empresas Verificadas</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Segurança total. Apenas empresas reais e vagas sérias.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-600 mr-4 shrink-0">
                  <Bell className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">Alerta de Vagas</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Receba notificações quando uma vaga no seu perfil for postada.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 focus:ring-green-600">
                Cadastrar Currículo Grátis
              </Button>
            </div>
          </div>

          {/* Coluna Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Profissional feliz trabalhando" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Card Flutuante */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-green-600" />
                    <span className="text-xs font-bold uppercase text-green-600 tracking-wider">Em alta hoje</span>
                  </div>
                  <span className="text-xs text-neutral-400">Há 1h</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-700 pb-2">
                    <span className="font-medium text-neutral-800 dark:text-white">Vendedor(a) Loja</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Centro</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-700 pb-2">
                    <span className="font-medium text-neutral-800 dark:text-white">Assistente Adm.</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Inoã</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-800 dark:text-white">Técnico TI</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Itaipuaçu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};