import { z } from 'zod'

function validarCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '')
  if (cleaned.length !== 11 || /^(\d)\1+$/.test(cleaned)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) sum += Number(cleaned[i]) * (10 - i)
  let rest = (sum * 10) % 11
  if (rest === 10) rest = 0
  if (rest !== Number(cleaned[9])) return false

  sum = 0
  for (let i = 0; i < 10; i++) sum += Number(cleaned[i]) * (11 - i)
  rest = (sum * 10) % 11
  if (rest === 10) rest = 0
  return rest === Number(cleaned[10])
}

function validarCNPJ(cnpj: string): boolean {
  const cleaned = cnpj.replace(/\D/g, '')
  if (cleaned.length !== 14 || /^(\d)\1+$/.test(cleaned)) return false

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sum = 0
  for (let i = 0; i < 12; i++) sum += Number(cleaned[i]) * weights1[i]
  let rest = sum % 11
  const d1 = rest < 2 ? 0 : 11 - rest
  if (Number(cleaned[12]) !== d1) return false

  sum = 0
  for (let i = 0; i < 13; i++) sum += Number(cleaned[i]) * weights2[i]
  rest = sum % 11
  const d2 = rest < 2 ? 0 : 11 - rest
  return Number(cleaned[13]) === d2
}

export function maskCPF(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export function maskCNPJ(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 14)
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
}

export function maskCelular(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
}

export const loginCandidatoSchema = z.object({
  identificador: z
    .string()
    .min(1, 'Informe seu email, CPF ou celular'),
  senha: z
    .string()
    .min(1, 'Informe sua senha'),
})

export const loginEmpresaSchema = z.object({
  identificador: z
    .string()
    .min(1, 'Informe seu CNPJ ou email'),
  senha: z
    .string()
    .min(1, 'Informe sua senha'),
})

export const cadastroCandidatoSchema = z.object({
  cpf: z
    .string()
    .min(1, 'CPF é obrigatório')
    .refine((val) => validarCPF(val), 'CPF inválido'),
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  distrito: z
    .string()
    .min(1, 'Selecione seu distrito'),
  celular: z
    .string()
    .min(1, 'Celular é obrigatório')
    .refine((val) => val.replace(/\D/g, '').length >= 10, 'Celular inválido'),
  senha: z
    .string()
    .min(8, 'Mínimo 8 caracteres'),
  confirmarSenha: z
    .string()
    .min(1, 'Confirme sua senha'),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmarSenha'],
})

export const cadastroEmpresaSchema = z.object({
  cnpj: z
    .string()
    .min(1, 'CNPJ é obrigatório')
    .refine((val) => validarCNPJ(val), 'CNPJ inválido'),
  razaoSocial: z
    .string()
    .min(1, 'Razão Social é obrigatória'),
  distrito: z
    .string()
    .min(1, 'Selecione o distrito'),
  celular: z
    .string()
    .min(1, 'Celular é obrigatório')
    .refine((val) => val.replace(/\D/g, '').length >= 10, 'Celular inválido'),
  senha: z
    .string()
    .min(8, 'Mínimo 8 caracteres'),
  confirmarSenha: z
    .string()
    .min(1, 'Confirme sua senha'),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmarSenha'],
})

export type LoginCandidatoForm = z.infer<typeof loginCandidatoSchema>
export type LoginEmpresaForm = z.infer<typeof loginEmpresaSchema>
export type CadastroCandidatoForm = z.infer<typeof cadastroCandidatoSchema>
export type CadastroEmpresaForm = z.infer<typeof cadastroEmpresaSchema>
