import { ArrowRight, CheckCircle2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../header/Header'
import { Footer } from './Footer'

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Encontre os melhores <span className="text-primary-500">talentos locais</span>{' '}
                  para a sua empresa
                </h1>

                <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-xl">
                  Nossa plataforma conecta sua empresa diretamente aos profissionais de Maricá.
                  Cadastre suas vagas, gerencie processos seletivos e contrate de forma rápida e
                  eficiente.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Acesso a um banco de talentos local qualificado',
                    'Divulgação gratuita de vagas de emprego',
                    'Filtros avançados para encontrar o candidato ideal',
                    'Marca do empregador forte na sua cidade',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="text-primary-500 mt-0.5 shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/empresa/solicitar-proposta"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  Solicitar proposta
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full" />
                <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Painel da Empresa</h3>
                      <p className="text-sm text-neutral-400">Visão geral rápida e clara</p>
                    </div>
                    <div className="flex bg-neutral-950 border border-white/5 rounded-lg p-2 gap-3">
                      <div className="flex flex-col items-center px-4 border-r border-white/5">
                        <span className="text-2xl font-bold text-white">42</span>
                        <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                          Vagas
                        </span>
                      </div>
                      <div className="flex flex-col items-center px-4">
                        <span className="text-2xl font-bold text-primary-500">156</span>
                        <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                          Currículos
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-neutral-950 border border-white/5 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                            <Users size={18} className="text-neutral-400" />
                          </div>
                          <div>
                            <div className="h-4 w-32 bg-neutral-800 rounded mb-2"></div>
                            <div className="h-3 w-20 bg-neutral-800/50 rounded"></div>
                          </div>
                        </div>
                        <div className="h-8 w-24 bg-primary-500/20 border border-primary-500/30 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
