import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ icon, title, children, className }: SectionProps) {
  return (
    <div
      className={cn(
        "bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-6">
        {icon && <span className="text-text-primary">{icon}</span>}
        <h2 className="text-base font-semibold text-text-default">{title}</h2>
      </div>
      {children}
    </div>
  );
}
