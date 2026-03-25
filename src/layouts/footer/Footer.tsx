import { Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-text-default mb-4 tracking-tight">
              EmpregaAí<span className="text-text-primary">Maricá</span>
            </h3>
            <p className="text-sm text-text-subtle leading-relaxed max-w-xs">
              Conectando empresas e talentos de Maricá para fortalecer a economia local.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-default mb-5 uppercase tracking-wider">
              Plataforma
            </h4>
            <ul className="space-y-3 text-sm text-text-subtle">
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-default mb-5 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-text-subtle">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>contato@empregaaimarica.com.br</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6 -ml-2">
              <a
                href="/"
                className="text-text-subtle hover:text-text-primary hover:bg-neutral-900 p-2 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/"
                className="text-text-subtle hover:text-text-primary hover:bg-neutral-900 p-2 rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-text-subtle gap-4">
          <p>&copy; {new Date().getFullYear()} EmpregaAí Maricá</p>
          <p>Feito com orgulho em Maricá.</p>
        </div>
      </div>
    </footer>
  )
}
