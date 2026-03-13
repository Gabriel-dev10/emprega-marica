import { ChevronDown, LogOut, Menu, User, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useAuth } from '../shared/context/auth-context'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-neutral-900 border-b border-neutral-800 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-neutral-50 tracking-tight">
              EmpregaAí<span className="text-primary-600">Maricá</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-50 hover:text-primary-600 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}

            {isAuthenticated && user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2 text-sm text-neutral-50 hover:text-primary-600 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-semibold">
                    {user.nome.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden lg:block">{user.nome.split(' ')[0]}</span>
                  <ChevronDown size={14} />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-neutral-950 border border-neutral-700 rounded-lg shadow-lg py-1">
                    <div className="px-4 py-2 border-b border-neutral-700">
                      <p className="text-sm font-medium text-neutral-50 truncate">{user.nome}</p>
                      <p className="text-xs text-neutral-400 truncate">{user.email}</p>
                    </div>
                    {user.role === 'candidato' && (
                      <Link
                        to="/perfil/candidato"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-50 hover:text-primary-600 hover:bg-neutral-900 transition-colors"
                      >
                        <User size={14} />
                        Meu Currículo
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-400 hover:text-red-500 hover:bg-neutral-900 transition-colors"
                    >
                      <LogOut size={14} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-neutral-50 hover:text-primary-600 font-medium transition-colors text-sm"
                >
                  Entrar
                </Link>
                <Link to="/login/empresa">
                  <Button size="sm" className="px-5">
                    Área da Empresa
                  </Button>
                </Link>
              </>
            )}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-50 hover:text-primary-600 focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-700">
          <div className="px-4 py-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-50 hover:text-primary-600 font-medium py-3 text-base transition-colors"
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
                    className="text-neutral-50 hover:text-primary-600 font-medium py-3 text-base transition-colors"
                  >
                    Meu Currículo
                  </Link>
                )}
                <div className="pt-4 border-t border-neutral-700">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleLogout()
                    }}
                    className="flex items-center gap-2 text-neutral-400 hover:text-red-500 font-medium py-3 text-base transition-colors"
                  >
                    <LogOut size={16} />
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-50 hover:text-primary-600 font-medium py-3 text-base transition-colors"
                >
                  Entrar
                </Link>
                <div className="pt-4 border-t border-neutral-700">
                  <Link to="/login/empresa" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button fullWidth>Área da Empresa</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
