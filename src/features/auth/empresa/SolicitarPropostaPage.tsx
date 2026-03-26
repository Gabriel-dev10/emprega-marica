import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { sendSolicitacaoEmpresa } from "@/shared/api/mock/empresaSolicitations";
import { maskCelular, maskCNPJ } from "@/shared/lib/schemas";
import { AuthLayout } from "@/layouts/auth/AuthLayout";
import { Textarea } from "@/shared/ui/textarea";
import {
  type SolicitarForm,
  solicitarSchema,
} from "@/features/schema/empresa.schema";

export default function SolicitarPropostaPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SolicitarForm>({ resolver: zodResolver(solicitarSchema) });

  const onSubmit = async (data: SolicitarForm) => {
    setIsSubmitting(true);

    try {
      await sendSolicitacaoEmpresa(data);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/empresa/dados");
    }, 400);
  };

  return (
    <AuthLayout subtitle="Solicitar proposta">
      <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
        <h2 className="text-text-default text-xl font-bold mb-2">
          Solicitar proposta
        </h2>
        <p className="text-text-subtle text-sm mb-8 leading-relaxed">
          Preencha os dados ou envie uma solicitação para que possamos avaliar e
          liberar o acesso.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Nome"
            placeholder="Nome da pessoa de contato"
            icon={<User size={18} className="text-text-subtle" />}
            error={errors.nome?.message}
            {...register("nome")}
          />

          <Input
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            icon={<Building2 size={18} className="text-text-subtle" />}
            error={errors.cnpj?.message}
            {...register("cnpj", {
              onChange: (e) => {
                e.target.value = maskCNPJ(e.target.value);
                setValue("cnpj", e.target.value);
              },
            })}
          />

          <Input
            label="Celular"
            placeholder="(00) 90000-0000"
            icon={<Phone size={18} className="text-text-subtle" />}
            error={errors.celular?.message}
            {...register("celular", {
              onChange: (e) => {
                e.target.value = maskCelular(e.target.value);
                setValue("celular", e.target.value);
              },
            })}
          />

          <Textarea
            label="Mensagem (até 800 caracteres)"
            placeholder="Descreva sua solicitação e informações adicionais"
            error={errors.mensagem?.message}
            rows={5}
            maxLength={800}
            {...register("mensagem")}
          />

          <div className="pt-2">
            <Button type="submit" fullWidth disabled={isSubmitting} size="lg">
              {isSubmitting ? "Enviando..." : "Enviar solicitação"}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
