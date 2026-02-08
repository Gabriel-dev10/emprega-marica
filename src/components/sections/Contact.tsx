import React from 'react';
import { Button } from '../../shared/ui/Button';
import { CheckCircle2, Search, Star, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Copy de Venda */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sua próxima contratação de sucesso está a <span className="text-blue-300">um clique</span> de distância.
            </h2>
            <p className="text-primary-100 dark:text-primary-200 text-lg mb-8 leading-relaxed max-w-xl">
              Não perca mais tempo com processos seletivos manuais. Junte-se a mais de 500 empresas de Maricá que modernizaram seu RH. Publique agora e comece a entrevistar amanhã.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-400 shrink-0" size={24} />
                <span className="text-lg font-medium">Acesso imediato ao banco de currículos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-400 shrink-0" size={24} />
                <span className="text-lg font-medium">Pagamento facilitado com Mumbuca</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-400 shrink-0" size={24} />
                <span className="text-lg font-medium">Suporte local especializado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="
                  text-primary-950 font-extrabold text-lg px-10 py-5
                  hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] 
                  transition-all duration-300 ease-out border-0 shadow-2xl shadow-black/30 group relative
                "
              >
                <span className="flex items-center relative z-10">
                  Quero Contratar Agora
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={3} />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="
                  border-primary-400 text-white font-semibold text-lg px-8
                  hover:bg-primary-800 hover:border-white hover:text-white transition-all duration-300
                "
              >
                Falar com Consultor
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-300 dark:text-primary-400 opacity-80 pl-2">
              Plano Gratuito disponível. Cancele quando quiser.
            </p>
          </div>

          {/* Lado Direito: Visualização do Valor (Card de Candidato) */}
          <div className="relative hidden lg:block">
             {/* Card Principal */}
            <div className="relative z-10 bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 dark:border-neutral-700 w-96 mx-auto">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md flex items-center">
                  <Star size={12} className="mr-1 fill-current" /> 98% Compatível
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Candidata" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Mariana Costa</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Gerente Comercial</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1">Mora em: Itaipuaçu (3km)</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary-600 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span>Experiência</span>
                  <span className="font-bold text-neutral-900 dark:text-white">8 Anos</span>
                </div>
                <div className="h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-primary-600 rounded-full"></div>
                </div>
                 <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span>Disponibilidade</span>
                  <span className="font-bold text-neutral-900 dark:text-white">Imediata</span>
                </div>
              </div>

              <Button fullWidth size="sm" className="bg-primary-600 text-white shadow-none">
                Agendar Entrevista
              </Button>
            </div>

            {/* Elemento flutuante de fundo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/5 border border-white/10 rounded-2xl -z-10 rotate-6"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 right-10 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20 animate-bounce-slow">
               <div className="bg-green-100 p-2 rounded-lg text-green-600">
                 <Search size={20} />
               </div>
               <div>
                 <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">Nova Busca</p>
                 <p className="text-sm font-bold text-neutral-900 dark:text-white">5 novos candidatos hoje</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};