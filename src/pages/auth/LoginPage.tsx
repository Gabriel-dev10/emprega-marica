import { zodResolver } from '@hookform/resolvers/zod'
import { Building2, Lock, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
  type LoginCandidatoForm,
  type LoginEmpresaForm,
  loginCandidatoSchema,
  loginEmpresaSchema,
} from '../../features/auth/schemas'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'

type Tab = 'candidato' | 'empresa'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<Tab>('candidato')

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-white">
              EmpregaAí<span className="text-neutral-500">Maricá</span>
            </h1>
          </Link>
          <p className="text-neutral-500 mt-2 text-sm">Acesse sua conta</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10">
          {/* Tabs */}
          <div className="flex bg-white/5 backdrop-blur-sm rounded-xl p-1 mb-8 border border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab('candidato')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'candidato'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <User size={16} />
              Candidato
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('empresa')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'empresa'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 size={16} />
              Empresa
            </button>
          </div>

          {activeTab === 'candidato' ? <LoginCandidatoForm /> : <LoginEmpresaForm />}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          Não tem conta?{' '}
          <Link
            to={activeTab === 'candidato' ? '/cadastrar/candidato' : '/cadastrar/empresa'}
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Criar conta gratuita
          </Link>
        </p>
      </div>
    </div>
  )
}

function LoginCandidatoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCandidatoForm>({
    resolver: zodResolver(loginCandidatoSchema),
  })

  const onSubmit = (data: LoginCandidatoForm) => {
    console.log('Login candidato:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Email, CPF ou Celular"
        placeholder="Informe seu email, CPF ou celular"
        icon={<User size={18} />}
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
      <div className="flex justify-end">
        <a href="/" className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
          Esqueceu a senha?
        </a>
      </div>
      <Button type="submit" fullWidth size="lg">
        Entrar
      </Button>
    </form>
  )
}

function LoginEmpresaForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginEmpresaForm>({
    resolver: zodResolver(loginEmpresaSchema),
  })

  const onSubmit = (data: LoginEmpresaForm) => {
    console.log('Login empresa:', data)
  }

  return (
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
      <div className="flex justify-end">
        <a href="/" className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
          Esqueceu a senha?
        </a>
      </div>
      <Button type="submit" fullWidth size="lg">
        Entrar
      </Button>
    </form>
  )
}
