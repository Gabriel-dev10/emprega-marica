import { ChevronDown, LogOut, Menu, User, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../shared/context/auth-context'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'Vagas', href: '#vagas' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ]

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
    navigate('/')
  }

  function UnauthActions({ mobile }: { mobile?: boolean }) {
    const close = () => setIsMobileMenuOpen(false)
    if (mobile) {
      return (
        <div className="pt-4 border-t border-primary-600/30">
          <Link to="/cadastrar/candidato" onClick={close}>
            <Button fullWidth>Candidate-se</Button>
          </Link>
        </div>
      )
    }

    return (
      <Link to="/cadastrar/candidato" className="ml-4">
        <Button size="sm" className="px-5">
          Candidate-se
        </Button>
      </Link>
    )
  }

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-200 bg-primary-700 border-b border-primary-800 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-text-inverted tracking-tight">
              EmpregaAí<span className="text-accent-200 opacity-70">Maricá</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-inverted opacity-80 hover:opacity-100 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}

            {isAuthenticated && user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2 text-sm text-text-inverted opacity-80 hover:opacity-100 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-white text-xs font-semibold border border-primary-600">
                    {user.nome.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden lg:block">{user.nome.split(' ')[0]}</span>
                  <ChevronDown size={14} />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-primary-800 border border-primary-700/50 rounded-lg shadow-lg py-1">
                    <div className="px-4 py-2 border-b border-primary-700/50">
                      <p className="text-sm font-medium text-text-inverted truncate">{user.nome}</p>
                      <p className="text-xs text-text-inverted opacity-60 truncate">{user.email}</p>
                    </div>
                    {user.role === 'candidato' && (
                      <Link
                        to="/perfil/candidato"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-inverted opacity-80 hover:opacity-100 hover:bg-primary-700/50 transition-colors"
                      >
                        <User size={14} />
                        Meu Currículo
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-text-inverted opacity-70 hover:text-red-300 hover:bg-primary-700/50 transition-colors"
                    >
                      <LogOut size={14} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <UnauthActions />
            )}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-inverted opacity-80 hover:opacity-100 focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-700 border-b border-primary-800">
          <div className="px-4 py-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-inverted opacity-80 hover:opacity-100 font-medium py-3 text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
            {isAuthenticated && user ? (
              <>
                {user.role === 'candidato' && (
                  <Link
                    to="/perfil/candidato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-text-inverted opacity-80 hover:opacity-100 font-medium py-3 text-base transition-colors"
                  >
                    Meu Currículo
                  </Link>
                )}
                <div className="pt-4 border-t border-primary-600/30">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleLogout()
                    }}
                    className="flex items-center gap-2 text-text-inverted opacity-70 hover:text-red-300 font-medium py-3 text-base transition-colors"
                  >
                    <LogOut size={16} />
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <UnauthActions mobile />
            )}
          </div>
        </div>
      )}
    </header>
  )
}
