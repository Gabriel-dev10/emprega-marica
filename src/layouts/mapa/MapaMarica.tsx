import { useEffect, useRef } from "react";

interface MapaMaricaProps {
  onDistritoClick?: (numero: number, nome: string) => void;
  distritoSelecionado?: number | null;
}

export function MapaMarica({
  onDistritoClick,
  distritoSelecionado,
}: MapaMaricaProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/mapa_distritos.svg")
      .then((r) => r.text())
      .then((text) => {
        if (cancelled || !containerRef.current) return;

        let cleaned = text.replace(/<\?xml[^?]*\?>/g, "").trim();
        cleaned = cleaned.replace(/<sodipodi:namedview[\s\S]*?\/>/g, "");
        cleaned = cleaned.replace(/<defs[^>]*\/>/g, "");

        containerRef.current.innerHTML = cleaned;

        const grupos =
          containerRef.current.querySelectorAll<SVGElement>(".distrito");
        for (const g of grupos) {
          const num = Number(g.dataset.distrito);
          const nome = g.dataset.nome ?? "";
          g.addEventListener("click", () => onDistritoClick?.(num, nome));
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDistritoClick]);

  useEffect(() => {
    if (!containerRef.current) return;
    const grupos =
      containerRef.current.querySelectorAll<SVGElement>(".distrito");
    for (const g of grupos) {
      g.classList.toggle(
        "selected",
        Number(g.dataset.distrito) === distritoSelecionado,
      );
    }
  }, [distritoSelecionado]);

  return (
    <div ref={containerRef} className="w-full [&>svg]:w-full [&>svg]:h-auto" />
  );
}
