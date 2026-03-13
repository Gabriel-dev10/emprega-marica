import { zodResolver } from '@hookform/resolvers/zod'
import { Building2, Phone, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { sendSolicitacaoEmpresa } from '../../../shared/api/mock/empresaSolicitations'
import { maskCelular, maskCNPJ } from '../../../shared/lib/schemas'
import { AuthLayout } from '../../layout/AuthLayout'
import { TextareaField } from '../../layout/textareaCandidato'
import { type SolicitarForm, solicitarSchema } from '../../schema/empresa.schema'

export default function SolicitarPropostaPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SolicitarForm>({ resolver: zodResolver(solicitarSchema) })

  const onSubmit = async (data: SolicitarForm) => {
    setIsSubmitting(true)

    try {
      const res = await sendSolicitacaoEmpresa(data)
      console.log('Solicitação mock enviada', res)
    } catch (err) {
      console.error('Erro ao enviar mock', err)
    }

    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/empresa/dados')
    }, 400)
  }

  return (
    <AuthLayout subtitle="Solicitar proposta">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8">
        <h2 className="text-white text-lg font-semibold mb-4">Solicitar proposta</h2>
        <p className="text-neutral-400 mb-6">
          Preencha os dados ou envie uma solicitação para que possamos avaliar e liberar o acesso.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Nome"
            placeholder="Nome da pessoa de contato"
            icon={<User size={16} />}
            error={errors.nome?.message}
            {...register('nome')}
          />

          <Input
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            icon={<Building2 size={16} />}
            error={errors.cnpj?.message}
            {...register('cnpj')}
            onChange={(e) => setValue('cnpj', maskCNPJ((e.target as HTMLInputElement).value))}
          />

          <Input
            label="Celular"
            placeholder="(00) 90000-0000"
            icon={<Phone size={16} />}
            error={errors.celular?.message}
            {...register('celular')}
            onChange={(e) => setValue('celular', maskCelular((e.target as HTMLInputElement).value))}
          />

          <TextareaField
            label="Mensagem (até 800 caracteres)"
            placeholder="Descreva sua solicitação e informações adicionais"
            error={errors.mensagem?.message}
            rows={6}
            {...register('mensagem')}
            maxLength={800}
          />

          <div className="mt-2">
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
