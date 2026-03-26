import type { ReactNode } from "react";

interface SectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function Section({ icon, title, children }: SectionProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-primary-400">{icon}</span>
        <h2 className="text-base font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}
