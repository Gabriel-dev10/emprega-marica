import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../../shared/ui/Button';
import { ModeToggle } from '../mode-toggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Para Candidatos', href: '#candidatos' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Planos Empresas', href: '#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-primary-600 dark:text-primary-400' : 'text-primary-800 dark:text-white'}`}>
              EmpregaAí<span className="text-neutral-600 dark:text-neutral-400">Maricá</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors text-sm dark:text-neutral-300 dark:hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button size="sm" variant="primary">Área da Empresa</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
       {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 shadow-lg animate-fade-in">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 hover:text-primary-600 font-medium py-2 text-lg dark:text-neutral-300 dark:hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
               <div className="flex justify-center">
                 <ModeToggle />
               </div>
               <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>Área da Empresa</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};