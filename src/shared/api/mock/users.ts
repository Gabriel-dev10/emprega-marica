export type MockUser = {
  id: string
  nome: string
  email: string
  senha: string
  role: 'candidato' | 'empresa'
}

export const MOCK_USERS: MockUser[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'candidato@teste.com',
    senha: '123456',
    role: 'candidato',
  },
  {
    id: '2',
    nome: 'Empresa Demo',
    email: 'empresa@teste.com',
    senha: '123456',
    role: 'empresa',
  },
]
