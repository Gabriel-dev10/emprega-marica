import { ArrowRight, Briefcase, CheckCircle2, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

export default function ParaCandidatosPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />
        
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-5 border-b border-white/10 pb-6 mb-6">
                    <div className="h-16 w-16 bg-neutral-800 border-2 border-primary-500 rounded-full flex items-center justify-center overflow-hidden">
                      <UserCircle size={40} className="text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Seu Perfil Profissional</h3>
                      <p className="text-sm text-neutral-400">Currículo digital moderno e atrativo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Briefcase, color: "text-blue-400", bg: "bg-blue-400/10", title: "Operador de Caixa", company: "Supermercado Local" },
                      { icon: Briefcase, color: "text-purple-400", bg: "bg-purple-400/10", title: "Atendimento", company: "Loja Centro" },
                      { icon: Briefcase, color: "text-green-400", bg: "bg-green-400/10", title: "Motorista Entregador", company: "Logística Maricá" },
                    ].map((job, i) => (
                      <div key={i} className="bg-neutral-950 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl ${job.bg} flex items-center justify-center`}>
                            <job.icon size={18} className={job.color} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{job.title}</div>
                            <div className="text-xs text-neutral-500">{job.company}</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium px-2 py-1 rounded bg-neutral-800 text-neutral-300">Novo</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <UserCircle size={16} />
                  <span>Para Candidatos</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Acelere sua carreira nas <span className="text-blue-500">melhores vagas localmente</span>
                </h1>
                
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-xl">
                  Crie seu currículo digital gratuitamente e conecte-se com as empresas de Maricá. A oportunidade que você estava esperando perto da sua casa.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    'Currículo online fácil de montar e exportar',
                    'Candidatura ágil em 1 clique nas vagas abertas',
                    'Notificações sobre vagas adequadas ao seu perfil',
                    '100% gratuito para sempre para trabalhadores'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/cadastrar/candidato" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
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
