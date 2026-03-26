import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useAuth } from "../../../shared/context/auth-context";
import {
  type LoginEmpresaForm,
  loginEmpresaSchema,
} from "../../../shared/lib/schemas";
import { AuthLayout } from "../../layout/AuthLayout";

export default function LoginEmpresaPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginEmpresaForm>({
    resolver: zodResolver(loginEmpresaSchema),
  });

  const onSubmit = async (data: LoginEmpresaForm) => {
    setAuthError(null);
    const result = await login({
      identificador: data.identificador,
      senha: data.senha,
    });
    if (result.success) {
      navigate("/empresa/planos");
    } else {
      setAuthError(result.error ?? "Erro ao entrar.");
    }
  };

  return (
    <AuthLayout subtitle="Área da Empresa">
      <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="CNPJ ou Email"
            placeholder="Informe seu CNPJ ou email"
            icon={<Building2 size={18} />}
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
              className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
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
        <p className="text-xs text-neutral-600">
          Demo: <span className="text-neutral-500">empresa@teste.com</span> /{" "}
          <span className="text-neutral-500">123456</span>
        </p>
      </div>
    </AuthLayout>
  );
}
