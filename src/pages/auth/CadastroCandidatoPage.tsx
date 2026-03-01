import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { DISTRITOS_MARICA } from '../../features/auth/constants'
import {
  type CadastroCandidatoForm,
  cadastroCandidatoSchema,
  maskCPF,
  maskCelular,
} from '../../features/auth/schemas'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import { Select } from '../../shared/ui/Select'

export default function CadastroCandidatoPage() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CadastroCandidatoForm>({
    resolver: zodResolver(cadastroCandidatoSchema),
    defaultValues: { distrito: '' },
  })

  const onSubmit = (data: CadastroCandidatoForm) => {
    console.log('Cadastro candidato:', data)
  }

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
          <p className="text-neutral-500 mt-2 text-sm">Crie sua conta de candidato</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              icon={<ShieldCheck size={18} />}
              error={errors.cpf?.message}
              {...register('cpf', {
                onChange: (e) => {
                  e.target.value = maskCPF(e.target.value)
                  setValue('cpf', e.target.value)
                },
              })}
            />

            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              icon={<Mail size={18} />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Select
              label="Distrito"
              icon={<MapPin size={18} />}
              placeholder="Selecione seu distrito"
              options={[...DISTRITOS_MARICA]}
              error={errors.distrito?.message}
              {...register('distrito')}
            />

            <Input
              label="Celular"
              placeholder="(00) 00000-0000"
              icon={<Phone size={18} />}
              error={errors.celular?.message}
              {...register('celular', {
                onChange: (e) => {
                  e.target.value = maskCelular(e.target.value)
                  setValue('celular', e.target.value)
                },
              })}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Mínimo 8 caracteres"
              icon={<Lock size={18} />}
              error={errors.senha?.message}
              {...register('senha')}
            />

            <Input
              label="Confirmar Senha"
              type="password"
              placeholder="Repita sua senha"
              icon={<Lock size={18} />}
              error={errors.confirmarSenha?.message}
              {...register('confirmarSenha')}
            />

            <Button type="submit" fullWidth size="lg">
              Criar Conta
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          Já tem conta?{' '}
          <Link to="/login" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  )
}
