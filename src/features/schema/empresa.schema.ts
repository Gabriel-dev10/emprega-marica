import { z } from "zod";

export const solicitarSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  cnpj: z
    .string()
    .min(1, "CNPJ é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length === 14, "CNPJ inválido"),
  celular: z
    .string()
    .min(1, "Celular é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length >= 10, "Celular inválido"),
  mensagem: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .max(800, "Máximo 800 caracteres"),
});

export type SolicitarForm = z.infer<typeof solicitarSchema>;

export const dadosEmpresaSchema = z.object({
  razaoSocial: z.string().min(1, "Razão social é obrigatória").optional(),
  cnpj: z.string().optional(),
  endereco: z.string().optional(),
  telefone: z.string().optional(),
});

export type DadosEmpresaForm = z.infer<typeof dadosEmpresaSchema>;
