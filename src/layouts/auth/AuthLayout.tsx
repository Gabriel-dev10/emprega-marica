import { Home } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  subtitle?: string;
}

export function AuthLayout({
  children,
  subtitle = "Acesse sua conta",
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-neutral-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/marica-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm" />
      </div>
      <div className="absolute top-8 left-8 z-30">
        <Link
          to="/"
          className="flex items-center text-sm font-medium text-text-muted hover:text-text-default transition-all group"
        >
          <Home
            size={18}
            className="mr-2 group-hover:scale-110 transition-transform"
          />
          Home
        </Link>
      </div>
      <div className="w-full max-w-lg flex flex-col relative z-20 px-6 py-12">
        <div className="w-full text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-default mb-2">
              EmpregaAí<span className="text-text-primary">Maricá</span>
            </h1>
          </Link>
          <p className="text-text-subtle text-lg">{subtitle}</p>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
