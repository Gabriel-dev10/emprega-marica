import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Vagas', href: '#vagas' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">
              EmpregaAí<span className="text-neutral-500">Maricá</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <Link to="/login" className="text-neutral-400 hover:text-white font-medium transition-colors text-sm">
              Entrar
            </Link>
            <Link to="/login">
              <Button size="sm" className="px-5">
                Área da Empresa
              </Button>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50">
          <div className="px-4 py-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white font-medium py-3 text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-400 hover:text-white font-medium py-3 text-base transition-colors"
            >
              Entrar
            </Link>
            <div className="pt-4 border-t border-neutral-800/50">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button fullWidth>
                  Área da Empresa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
