import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'

type User = {
  id: string
  name: string
  email: string
  permissions: string[]
}

type LoginCredentials = {
  email: string
  password: string
}

type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

function generateUserId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `mock-user-${Math.random().toString(36).slice(2)}`
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback(async ({ email }: LoginCredentials) => {
    // TODO: Integrate with apiClient once backend endpoints are available.
    // Currently in mock mode; password handling is temporarily disabled.
    const username = email.split('@')[0] || 'Usuário'

    setUser({
      id: generateUserId(),
      name: username,
      email,
      permissions: [],
    })
  }, [])

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
