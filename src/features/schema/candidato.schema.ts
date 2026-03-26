import { z } from "zod";

export const GRAUS = [
  { value: "fundamental", label: "Ensino Fundamental" },
  { value: "medio", label: "Ensino Médio" },
  { value: "tecnico", label: "Técnico" },
  { value: "graduacao", label: "Graduação" },
  { value: "pos", label: "Pós-graduação" },
  { value: "mestrado", label: "Mestrado" },
  { value: "doutorado", label: "Doutorado" },
];

export const experienciaSchema = z.object({
  empresa: z.string().min(1, "Informe a empresa"),
  cargo: z.string().min(1, "Informe o cargo"),
  dataInicio: z.string().min(1, "Informe o início"),
  dataFim: z.string().optional(),
  atual: z.boolean().optional(),
  descricao: z.string().optional(),
});

export const formacaoSchema = z.object({
  instituicao: z.string().min(1, "Informe a instituição"),
  curso: z.string().min(1, "Informe o curso"),
  grau: z.string().min(1, "Selecione o grau"),
  dataInicio: z.string().min(1, "Informe o início"),
  dataConclusao: z.string().optional(),
});

export const certificadoSchema = z.object({
  nome: z.string().min(1, "Informe o nome do curso"),
  instituicao: z.string().min(1, "Informe a instituição"),
  ano: z.string().optional(),
  cargaHoraria: z.string().optional(),
});

export const perfilSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  celular: z.string().min(1, "Celular é obrigatório"),
  email: z.string().email("Email inválido"),
  distrito: z.string().min(1, "Selecione o distrito"),
  resumoProfissional: z.string().optional(),
  objetivo: z.string().optional(),
  experiencias: z.array(experienciaSchema),
  formacoes: z.array(formacaoSchema),
  habilidades: z.array(z.object({ nome: z.string().min(1) })),
  certificados: z.array(certificadoSchema),
});

export type PerfilForm = z.infer<typeof perfilSchema>;
