import { zodResolver } from '@hookform/resolvers/zod'
import { Building2, Lock, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { ModalMapaDistrito } from '../../../components/ModalMapaDistrito'
import { Select } from '../../../components/Select'
import { DISTRITOS_MARICA } from '../../../shared/lib/constants'
import {
  type CadastroEmpresaForm,
  cadastroEmpresaSchema,
  maskCelular,
  maskCNPJ,
} from '../../../shared/lib/schemas'
import { AuthLayout } from '../../components/AuthLayout'

export default function CadastroEmpresaPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CadastroEmpresaForm>({
    resolver: zodResolver(cadastroEmpresaSchema),
    defaultValues: { distrito: '' },
  })

  const onSubmit = (data: CadastroEmpresaForm) => {
    console.log('Cadastro empresa:', data)
  }

  return (
    <AuthLayout subtitle="Cadastre sua empresa">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            icon={<Building2 size={18} />}
            error={errors.cnpj?.message}
            {...register('cnpj', {
              onChange: (e) => {
                e.target.value = maskCNPJ(e.target.value)
                setValue('cnpj', e.target.value)
              },
            })}
          />

          <Input
            label="Razão Social"
            placeholder="Nome da empresa"
            icon={<Building2 size={18} />}
            error={errors.razaoSocial?.message}
            {...register('razaoSocial')}
          />

          <div>
            <Select
              label="Distrito"
              icon={<MapPin size={18} />}
              placeholder="Selecione o distrito"
              options={[...DISTRITOS_MARICA]}
              error={errors.distrito?.message}
              {...register('distrito')}
            />
            <ModalMapaDistrito
              onSelecionar={(value) => setValue('distrito', value, { shouldValidate: true })}
            />
          </div>

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
            Cadastrar Empresa
          </Button>
        </form>
      </div>

      <p className="text-center text-sm text-neutral-500 mt-6">
        Já tem conta?{' '}
        <Link
          to="/login/empresa"
          className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
        >
          Entrar
        </Link>
      </p>
    </AuthLayout>
  )
}
