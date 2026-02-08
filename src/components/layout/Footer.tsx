import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react'
import type React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white pt-16 pb-8 border-t border-neutral-800 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">EmpregaAí</h3>
            <p className="text-neutral-400 dark:text-neutral-500 text-sm leading-relaxed mb-6">
              Conectando empresas e talentos de Maricá para fortalecer nossa economia local e gerar
              oportunidades reais.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/"
                className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="/"
                className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Plataforma</h4>
            <ul className="space-y-3 text-sm text-neutral-400 dark:text-neutral-500">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Para Empresas
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Para Candidatos
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Aceitamos Mumbuca
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-neutral-400 dark:text-neutral-500">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-neutral-400 dark:text-neutral-500">
              <li className="flex items-start">
                <Mail size={16} className="mt-1 mr-3 shrink-0" />
                <span>contato@empregaaimarica.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 shrink-0" />
                <span>Centro, Maricá - RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 dark:border-neutral-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-600">
          <p>&copy; {new Date().getFullYear()} EmpregaAí Maricá. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com orgulho em Maricá.</p>
        </div>
      </div>
    </footer>
  )
}
