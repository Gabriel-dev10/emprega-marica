import { Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              EmpregaAí<span className="text-neutral-500">Maricá</span>
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Conectando empresas e talentos de Maricá para fortalecer a economia local.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4 uppercase tracking-wider">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-500">
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
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-500">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>contato@empregaaimarica.com.br</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="/" className="text-neutral-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="/" className="text-neutral-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-600 gap-2">
          <p>&copy; {new Date().getFullYear()} EmpregaAí Maricá</p>
          <p>Feito com orgulho em Maricá.</p>
        </div>
      </div>
    </footer>
  )
}
