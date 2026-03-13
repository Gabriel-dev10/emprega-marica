import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  children: ReactNode
  subtitle?: string
}

export function AuthLayout({ children, subtitle = 'Acesse sua conta' }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-text-default">
              EmpregaAí<span className="opacity-50">Maricá</span>
            </h1>
          </Link>
          <p className="text-text-muted mt-2 text-sm">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
