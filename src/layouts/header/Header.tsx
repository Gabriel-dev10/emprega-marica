import { ChevronDown, LogOut, User } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../shared/context/auth-context'

export function Header() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isAuthRoute = ['/login', '/cadastro', '/cadastrar', '/solicitar-proposta'].some((path) =>
    location.pathname.includes(path),
  )

  if (isAuthRoute) return null

  const logoLink = user ? (user.role === 'empresa' ? '/painel/empresa' : '/vagas/candidato') : '/'
  const sectionHref = (hash: string) => (location.pathname === '/' ? `#${hash}` : `/#${hash}`)

  return (
    <header className="bg-neutral-800 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to={logoLink} className="text-xl font-bold text-text-default tracking-tight">
          EmpregaAí<span className="text-text-primary">Maricá</span>
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-text-muted">
              <span className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <User size={14} className="text-text-subtle" />
              </span>
              <span className="font-medium text-text-default">{user.nome.split(' ')[0]}</span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-text-subtle hover:text-text-default transition-colors"
            >
              <span className="hidden sm:block">Sair da conta</span>
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 mr-4">
              <div className="relative group py-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm text-text-subtle hover:text-text-default transition-colors focus:outline-none"
                >
                  Como Funciona
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>

                <div className="absolute top-full left-0 mt-1 w-48 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link
                    to="/para-candidatos"
                    className="block px-4 py-2 text-sm text-text-subtle hover:text-text-primary hover:bg-neutral-800/50 transition-colors"
                  >
                    Para Candidatos
                  </Link>
                  <Link
                    to="/para-empresas"
                    className="block px-4 py-2 text-sm text-text-subtle hover:text-text-primary hover:bg-neutral-800/50 transition-colors"
                  >
                    Para Empresas
                  </Link>
                </div>
              </div>

              <a
                href={sectionHref('vagas')}
                className="text-sm text-text-subtle hover:text-text-default transition-colors"
              >
                Vagas
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/login/candidato"
                className="text-sm font-medium text-text-subtle hover:text-text-default transition-colors hidden sm:block"
              >
                Entrar
              </Link>
              <Link to="/cadastrar/candidato">
                <Button size="sm">Criar Conta</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
