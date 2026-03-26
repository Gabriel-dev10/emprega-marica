import { Briefcase, MapPin, TrendingUp } from "lucide-react";
import { JobSearchForm } from "../components/ui/JobSearchForm";
import { StatCard } from "./ui/StatCard";

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[85vh]"
      style={{ backgroundImage: "url('/marica-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-neutral-950/50" />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-neutral-950 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-text-primary text-sm font-medium mb-8 animate-fade-in duration-700">
          <span>A plataforma de empregos oficial de Maricá</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text-default leading-[1.15] tracking-tight mb-6">
          O emprego que você busca, <br className="hidden sm:block" />
          <span className="text-text-primary">perto de casa.</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-subtle max-w-2xl mx-auto mb-12 leading-relaxed">
          Conectamos talentos locais às melhores empresas da região. Encontre
          sua próxima oportunidade sem precisar sair da cidade.
        </p>

        <div className="relative z-20 w-full max-w-4xl flex justify-center mb-16">
          <div className="w-full p-2 bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-2xl">
            <JobSearchForm />
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 py-8 px-12 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 shadow-xl">
          <StatCard icon={Briefcase} value="130+" label="Empresas" />

          <div className="hidden sm:block w-px h-12 bg-neutral-800" />

          <StatCard
            icon={TrendingUp}
            value="17 Dias"
            label="Média de Contratação"
          />

          <div className="hidden sm:block w-px h-12 bg-neutral-800" />

          <StatCard icon={MapPin} value="100%" label="Foco Local" />
        </div>
      </div>
    </section>
  );
}
