import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/layouts/footer/Footer";

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <main className="flex-1 flex flex-col justify-center pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-default mb-6 leading-[1.15] tracking-tight">
              Encontre os melhores <br className="hidden sm:block" />
              <span className="text-text-primary">talentos locais</span> para
              sua empresa
            </h1>

            <p className="text-lg text-text-subtle mb-10 leading-relaxed max-w-2xl mx-auto">
              Nossa plataforma conecta sua empresa diretamente aos profissionais
              de Maricá. Cadastre suas vagas, gerencie processos seletivos e
              contrate de forma rápida e eficiente.
            </p>

            <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 w-full max-w-2xl mx-auto mb-10 shadow-xl">
              <ul className="flex flex-col gap-4 text-left">
                {[
                  "Acesso a um banco de talentos local qualificado",
                  "Divulgação gratuita de vagas de emprego",
                  "Filtros avançados para encontrar o candidato ideal",
                  "Marca empregadora forte na sua cidade",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-text-muted"
                  >
                    <CheckCircle2
                      className="text-text-primary shrink-0"
                      size={20}
                    />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/empresa/solicitar-proposta"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-text-default font-medium px-8 py-4 rounded-xl transition-colors w-full sm:w-auto"
            >
              Solicitar proposta
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
