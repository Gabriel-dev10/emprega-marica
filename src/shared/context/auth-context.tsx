import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { isCompanyApproved } from '../api/mock/empresaSolicitations'
import { MOCK_USERS } from '../api/mock/users'

export type UserRole = 'candidato' | 'empresa'

export type AuthUser = {
  id: string
  nome: string
  email: string
  role: UserRole
}

type LoginCredentials = {
  identificador: string
  senha: string
}

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = useCallback(
    async ({
      identificador,
      senha,
    }: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
      const found = MOCK_USERS.find((u) => u.email === identificador && u.senha === senha)
      if (!found) {
        return { success: false, error: 'Email ou senha incorretos.' }
      }
      // Se for empresa, verificar se está aprovada para usar o login
      if (found.role === 'empresa') {
        const approved =
          isCompanyApproved(found.email) ||
          isCompanyApproved(found.nome) ||
          isCompanyApproved(found.id)
        if (!approved) {
          return {
            success: false,
            error:
              'Conta de empresa não autorizada. Solicite proposta e aguarde liberação pelo suporte.',
          }
        }
      }
      setUser({ id: found.id, nome: found.nome, email: found.email, role: found.role })
      return { success: true }
    },
    [],
  )

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
