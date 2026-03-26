import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { AuthLayout } from "@/layouts/auth/AuthLayout";
import { ModalMapaDistrito } from "@/layouts/mapa/ModalMapaDistrito";
import { DISTRITOS_MARICA } from "@/shared/lib/constants";
import {
  type CadastroCandidatoForm,
  cadastroCandidatoSchema,
  maskCelular,
  maskCPF,
} from "@/shared/lib/schemas";

export default function CadastroCandidatoPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CadastroCandidatoForm>({
    resolver: zodResolver(cadastroCandidatoSchema),
    defaultValues: { distrito: "" },
  });

  const onSubmit = (data: CadastroCandidatoForm) => {
    console.log("Cadastro candidato:", data);
  };

  return (
    <AuthLayout subtitle="Crie sua conta de candidato">
      <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            icon={<ShieldCheck size={18} />}
            error={errors.cpf?.message}
            {...register("cpf", {
              onChange: (e) => {
                e.target.value = maskCPF(e.target.value);
                setValue("cpf", e.target.value);
              },
            })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            icon={<Mail size={18} />}
            error={errors.email?.message}
            {...register("email")}
          />

          <div>
            <Select
              label="Distrito"
              icon={<MapPin size={18} />}
              placeholder="Selecione seu distrito"
              options={[...DISTRITOS_MARICA]}
              error={errors.distrito?.message}
              {...register("distrito")}
            />
            <ModalMapaDistrito
              onSelecionar={(value: string) =>
                setValue("distrito", value, { shouldValidate: true })
              }
            />
          </div>

          <Input
            label="Celular"
            placeholder="(00) 00000-0000"
            icon={<Phone size={18} />}
            error={errors.celular?.message}
            {...register("celular", {
              onChange: (e) => {
                e.target.value = maskCelular(e.target.value);
                setValue("celular", e.target.value);
              },
            })}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Mínimo 8 caracteres"
            icon={<Lock size={18} />}
            error={errors.senha?.message}
            {...register("senha")}
          />

          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Repita sua senha"
            icon={<Lock size={18} />}
            error={errors.confirmarSenha?.message}
            {...register("confirmarSenha")}
          />

          <Button type="submit" fullWidth size="lg">
            Criar Conta
          </Button>
        </form>
      </div>

      <p className="text-center text-sm text-text-muted mt-6">
        Já tem conta?{" "}
        <Link
          to="/login"
          className="text-text-primary hover:text-primary-300 font-medium transition-colors"
        >
          Entrar
        </Link>
      </p>
    </AuthLayout>
  );
}
