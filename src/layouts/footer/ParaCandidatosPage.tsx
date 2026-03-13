import { ArrowRight, Briefcase, CheckCircle2, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../header/Header'
import { Footer } from './Footer'

export default function ParaCandidatosPage() {
  return (
    <div className="min-h-screen bg-neutral-900 relative">
      <div className="fixed inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-5 border-b border-neutral-800 pb-6 mb-6">
                    <div className="h-16 w-16 bg-neutral-900 border-2 border-primary-600 rounded-full flex items-center justify-center overflow-hidden">
                      <UserCircle size={40} className="text-text-muted" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-default mb-1">
                        Seu Perfil Profissional
                      </h3>
                      <p className="text-sm text-text-muted">
                        Currículo digital moderno e atrativo
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Briefcase,
                        color: 'text-blue-400',
                        bg: 'bg-blue-400/10',
                        title: 'Operador de Caixa',
                        company: 'Supermercado Local',
                      },
                      {
                        icon: Briefcase,
                        color: 'text-purple-400',
                        bg: 'bg-purple-400/10',
                        title: 'Atendimento',
                        company: 'Loja Centro',
                      },
                      {
                        icon: Briefcase,
                        color: 'text-green-400',
                        bg: 'bg-green-400/10',
                        title: 'Motorista Entregador',
                        company: 'Logística Maricá',
                      },
                    ].map((job) => (
                      <div
                        key={job.title}
                        className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl ${job.bg} flex items-center justify-center`}
                          >
                            <job.icon size={18} className={job.color} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-text-default">
                              {job.title}
                            </div>
                            <div className="text-xs text-text-muted">{job.company}</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                          Novo
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-medium mb-6">
                  <UserCircle size={16} />
                  <span>Para Candidatos</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-text-default mb-6 leading-tight">
                  Acelere sua carreira nas{' '}
                  <span className="text-primary-600">melhores vagas localmente</span>
                </h1>

                <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl">
                  Crie seu currículo digital gratuitamente e conecte-se com as empresas de Maricá. A
                  oportunidade que você estava esperando perto da sua casa.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Currículo online fácil de montar e exportar',
                    'Candidatura ágil em 1 clique nas vagas abertas',
                    'Notificações sobre vagas adequadas ao seu perfil',
                    '100% gratuito para sempre para trabalhadores',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-text-muted">
                      <CheckCircle2 className="text-primary-600 mt-0.5 shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/cadastrar/candidato"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-text-default font-semibold px-8 py-4 rounded-xl"
                >
                  Criar meu currículo grátis
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
