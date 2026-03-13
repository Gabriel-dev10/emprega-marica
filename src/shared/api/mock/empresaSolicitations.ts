import type { SolicitarForm } from '../../../features/schema/empresa.schema'

const solicitacoes: SolicitarForm[] = []

export function getSolicitacoes() {
  return solicitacoes
}

export async function sendSolicitacaoEmpresa(data: SolicitarForm) {
  return new Promise<{ success: boolean; id: number }>((resolve) => {
    setTimeout(() => {
      solicitacoes.push(data)
      resolve({ success: true, id: solicitacoes.length })
    }, 600)
  })
}
