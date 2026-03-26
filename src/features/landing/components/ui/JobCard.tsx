import { Building2, CircleDollarSign, Clock, MapPin } from "lucide-react";
import { Button } from "../../../../shared/ui/button";
import { Card } from "../../../../shared/ui/card";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags?: string[];
  logo?: string;
  isNew?: boolean;
}

export function JobCard({
  title,
  company,
  location,
  type,
  salary,
  tags = [],
  logo,
  isNew = false,
}: JobCardProps) {
  return (
    <Card
      hoverEffect
      className="h-full flex flex-col p-6 transition-all duration-300 group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700"
    >
      <div className="flex justify-between items-start mb-5">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700 shrink-0">
            {logo ? (
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-cover"
              />
            ) : (
              <Building2 className="text-text-subtle" size={24} />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-lg text-text-default line-clamp-1 group-hover:text-text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-text-subtle font-medium mt-0.5">
              {company}
            </p>
          </div>
        </div>

        {isNew && (
          <span className="px-2.5 py-1 bg-primary-500/10 text-text-primary text-[10px] font-bold uppercase tracking-wider rounded-md border border-primary-500/20 shrink-0">
            Novo
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6 grow">
        <div className="flex items-center text-sm text-text-subtle">
          <MapPin size={16} className="mr-3 text-text-muted opacity-60" />
          {location}
        </div>
        <div className="flex items-center text-sm text-text-subtle">
          <Clock size={16} className="mr-3 text-text-muted opacity-60" />
          {type}
        </div>
        <div className="flex items-center text-sm text-text-subtle">
          <CircleDollarSign
            size={16}
            className="mr-3 text-text-muted opacity-60"
          />
          {salary}
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1.5 bg-neutral-900/80 text-text-subtle text-xs rounded-md border border-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Button
        variant="outline"
        fullWidth
        className="mt-auto border-neutral-800 text-text-muted hover:text-text-default hover:bg-neutral-800 transition-colors"
      >
        Ver Detalhes
      </Button>
    </Card>
  );
}
