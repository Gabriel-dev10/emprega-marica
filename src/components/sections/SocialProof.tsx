export function SocialProof() {
  return (
    <section className="py-20 bg-primary-900 dark:bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Quem usa, aprova.</h2>
            <p className="text-primary-100 dark:text-primary-200 text-lg leading-relaxed mb-8">
              "O EmpregaAí Maricá transformou a forma como contratamos. A facilidade de encontrar
              profissionais que moram no mesmo bairro da nossa clínica reduziu os atrasos a zero."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-700 dark:bg-primary-800 flex items-center justify-center font-bold text-xl">
                R
              </div>
              <div>
                <p className="font-semibold text-white">Ricardo Mendes</p>
                <p className="text-sm text-primary-200 dark:text-primary-300">
                  Gestor de Clínica no Centro
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 dark:border-white/5">
              <div className="text-4xl font-bold text-white mb-2">+500</div>
              <div className="text-sm text-primary-200 dark:text-primary-300">
                Empresas Cadastradas
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 dark:border-white/5">
              <div className="text-4xl font-bold text-white mb-2">3 Dias</div>
              <div className="text-sm text-primary-200 dark:text-primary-300">
                Tempo Médio de Contratação
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 dark:border-white/5">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-primary-200 dark:text-primary-300">Foco em Maricá</div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 dark:border-white/5">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-sm text-primary-200 dark:text-primary-300">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
