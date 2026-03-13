import type { SolicitarForm } from '../../../features/schema/empresa.schema'

const solicitacoes: SolicitarForm[] = []

// lista simples em memória de empresas aprovadas (usar email ou cnpj como chave)
const approvedCompanies: string[] = []

export function getSolicitacoes() {
  return solicitacoes
}

export function getApprovedCompanies() {
  return approvedCompanies
}

export function isCompanyApproved(key: string) {
  return approvedCompanies.includes(key)
}

export function approveCompany(key: string) {
  if (!approvedCompanies.includes(key)) approvedCompanies.push(key)
}

export async function sendSolicitacaoEmpresa(data: SolicitarForm) {
  return new Promise<{ success: boolean; id: number }>((resolve) => {
    setTimeout(() => {
      solicitacoes.push(data)
      resolve({ success: true, id: solicitacoes.length })
    }, 600)
  })
}
