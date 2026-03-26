import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAuth } from "@/shared/context/auth-context";
import {
  type LoginCandidatoForm,
  loginCandidatoSchema,
} from "@/shared/lib/schemas";
import { AuthLayout } from "@/layouts/auth/AuthLayout";

export default function LoginCandidatoPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCandidatoForm>({
    resolver: zodResolver(loginCandidatoSchema),
  });

  const onSubmit = async (data: LoginCandidatoForm) => {
    setAuthError(null);
    const result = await login({
      identificador: data.identificador,
      senha: data.senha,
    });
    if (result.success) {
      navigate("/vagas/candidato");
    } else {
      setAuthError(result.error ?? "Erro ao entrar.");
    }
  };

  return (
    <AuthLayout subtitle="Área do Candidato">
      <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Email"
            placeholder="seu@email.com"
            icon={<User size={18} />}
            error={errors.identificador?.message}
            {...register("identificador")}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Sua senha"
            icon={<Lock size={18} />}
            error={errors.senha?.message}
            {...register("senha")}
          />
          {authError && <p className="text-sm text-red-400">{authError}</p>}
          <div className="flex justify-end">
            <a
              href="/"
              className="text-xs text-text-link hover:underline transition-colors"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>

      <div className="mt-6 space-y-3 text-center">
        <p className="text-sm text-text-muted">
          Não tem conta?{" "}
          <Link
            to="/cadastrar/candidato"
            className="text-text-link font-medium hover:underline transition-colors"
          >
            Criar conta gratuita
          </Link>
        </p>
        <p className="text-xs text-text-subtle">
          Demo: <span className="text-text-muted">candidato@teste.com</span> /{" "}
          <span className="text-text-muted">123456</span>
        </p>
      </div>
    </AuthLayout>
  );
}
