import { zodResolver } from '@hookform/resolvers/zod'
import { Building2, Lock } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { useAuth } from '../../../shared/context/auth-context'
import { type LoginEmpresaForm, loginEmpresaSchema } from '../../../shared/lib/schemas'
import { AuthLayout } from '../../layout/AuthLayout'

export default function LoginEmpresaPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [authError, setAuthError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginEmpresaForm>({
    resolver: zodResolver(loginEmpresaSchema),
  })

  const onSubmit = async (data: LoginEmpresaForm) => {
    setAuthError(null)
    const result = await login({ identificador: data.identificador, senha: data.senha })
    if (result.success) {
      navigate('/empresa/planos')
    } else {
      setAuthError(result.error ?? 'Erro ao entrar.')
    }
  }

  return (
    <AuthLayout subtitle="Área da Empresa">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="CNPJ ou Email"
            placeholder="Informe seu CNPJ ou email"
            icon={<Building2 size={18} />}
            error={errors.identificador?.message}
            {...register('identificador')}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Sua senha"
            icon={<Lock size={18} />}
            error={errors.senha?.message}
            {...register('senha')}
          />
          {authError && <p className="text-sm text-red-400">{authError}</p>}
          <div className="flex justify-end">
            <a
              href="/"
              className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
            >
              Esqueceu a senha?
            </a>
          </div>
          <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </div>

      <div className="mt-6 space-y-3 text-center">
        <p className="text-sm text-neutral-500">
          Empresas não podem se cadastrar diretamente no site.{' '}
          <Link
            to="/empresa/solicitar-proposta"
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Solicitar proposta
          </Link>
        </p>
        <p className="text-sm text-neutral-500">
          É candidato?{' '}
          <Link
            to="/login"
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Entrar como candidato
          </Link>
        </p>
        <p className="text-xs text-neutral-600">
          Demo: <span className="text-neutral-500">empresa@teste.com</span> /{' '}
          <span className="text-neutral-500">123456</span>
        </p>
      </div>
    </AuthLayout>
  )
}
