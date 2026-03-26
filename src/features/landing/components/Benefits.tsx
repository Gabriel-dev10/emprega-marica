import { Card } from "@/shared/ui/card";
import { BENEFITS } from "@/shared/api/mock/benefits";
import { SectionHeader } from "@/features/landing/components/ui/SectionHeader";

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Por que escolher o EmpregaAí?"
          subtitle="Muito mais que um portal de vagas, somos um movimento de valorização local desenhado para as necessidades reais do empresário maricaense."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item) => (
            <Card key={item.title} className="p-8 h-full" hoverEffect>
              <div className="bg-primary-50 dark:bg-primary-900/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-default mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
