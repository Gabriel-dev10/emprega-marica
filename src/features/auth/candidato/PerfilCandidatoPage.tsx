import { zodResolver } from '@hookform/resolvers/zod'
import { BookOpen, Briefcase, ListChecks, Plus, Trash2, User } from 'lucide-react'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { Footer } from '../../../layouts/footer/Footer'
import { useAuth } from '../../../shared/context/auth-context'
import { DISTRITOS_MARICA } from '../../../shared/lib/constants'
import { maskCelular, maskCPF } from '../../../shared/lib/schemas'
import { Section } from '../../layout/sectionCandidato'
import { TextareaField } from '../../layout/textareaCandidato'
import { GRAUS, type PerfilForm, perfilSchema } from '../../schema/candidato.schema'

export default function PerfilCandidatoPage() {
  const { user } = useAuth()
  const [saved, setSaved] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<PerfilForm>({
    resolver: zodResolver(perfilSchema),
    defaultValues: {
      nomeCompleto: user?.nome ?? '',
      email: user?.email ?? '',
      cpf: '',
      dataNascimento: '',
      celular: '',
      distrito: '',
      resumoProfissional: '',
      objetivo: '',
      experiencias: [],
      formacoes: [],
      habilidades: [],
      certificados: [],
    },
  })

  const experiencias = useFieldArray({ control, name: 'experiencias' })
  const formacoes = useFieldArray({ control, name: 'formacoes' })
  const habilidades = useFieldArray({ control, name: 'habilidades' })
  const certificados = useFieldArray({ control, name: 'certificados' })
  const [novaHabilidade, setNovaHabilidade] = useState('')

  const onSubmit = (data: PerfilForm) => {
    console.log('Perfil salvo:', data)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Meu Currículo</h1>
          <p className="text-neutral-400 mt-1 text-sm">
            Preencha suas informações para que as empresas possam encontrar você.
          </p>
        </div>

        <Section icon={<User size={18} />} title="perfil do usuário">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white font-semibold">{user?.nome}</p>
              <p className="text-sm text-neutral-400">{user?.email}</p>
              <p className="text-xs text-neutral-500 mt-1">Perfil: Candidato</p>
            </div>
            <Link to="/vagas/candidato">
              <Button variant="outline" size="sm">
                Ver vagas para inscrição
              </Button>
            </Link>
          </div>
        </Section>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <Section icon={<User size={18} />} title="Dados Pessoais">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="Nome Completo"
                placeholder="Seu nome completo"
                error={errors.nomeCompleto?.message}
                {...register('nomeCompleto')}
              />
              <Input
                label="CPF"
                placeholder="000.000.000-00"
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
                error={errors.email?.message}
                {...register('email')}
              />
              <Input
                label="Celular"
                placeholder="(21) 99999-9999"
                error={errors.celular?.message}
                {...register('celular', {
                  onChange: (e) => {
                    e.target.value = maskCelular(e.target.value)
                    setValue('celular', e.target.value)
                  },
                })}
              />
              <Input
                label="Data de Nascimento"
                type="date"
                error={errors.dataNascimento?.message}
                {...register('dataNascimento')}
              />
              <Select
                label="Distrito em Maricá"
                options={DISTRITOS_MARICA.map((d) => ({ value: d.value, label: d.label }))}
                placeholder="Selecione seu distrito"
                error={errors.distrito?.message}
                {...register('distrito')}
              />
            </div>
          </Section>

          <Section icon={<User size={18} />} title="Sobre Mim">
            <div className="space-y-5">
              <TextareaField
                label="Resumo Profissional"
                placeholder="Escreva um breve resumo sobre você, suas experiências e qualidades..."
                rows={4}
                error={errors.resumoProfissional?.message}
                {...register('resumoProfissional')}
              />
              <TextareaField
                label="Objetivo Profissional"
                placeholder="Qual tipo de vaga ou área você está buscando?"
                rows={3}
                error={errors.objetivo?.message}
                {...register('objetivo')}
              />
            </div>
          </Section>

          <Section icon={<Briefcase size={18} />} title="Experiências Profissionais">
            <div className="space-y-6">
              {experiencias.fields.map((field, idx) => {
                const atual = watch(`experiencias.${idx}.atual`)
                return (
                  <div
                    key={field.id}
                    className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-300">
                        Experiência {idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => experiencias.remove(idx)}
                        className="text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Empresa"
                        placeholder="Nome da empresa"
                        error={errors.experiencias?.[idx]?.empresa?.message}
                        {...register(`experiencias.${idx}.empresa`)}
                      />
                      <Input
                        label="Cargo"
                        placeholder="Seu cargo"
                        error={errors.experiencias?.[idx]?.cargo?.message}
                        {...register(`experiencias.${idx}.cargo`)}
                      />
                      <Input
                        label="Data de Início"
                        type="month"
                        error={errors.experiencias?.[idx]?.dataInicio?.message}
                        {...register(`experiencias.${idx}.dataInicio`)}
                      />
                      {!atual && (
                        <Input
                          label="Data de Fim"
                          type="month"
                          {...register(`experiencias.${idx}.dataFim`)}
                        />
                      )}
                    </div>
                    <label className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-primary-500"
                        {...register(`experiencias.${idx}.atual`)}
                      />
                      Trabalho aqui atualmente
                    </label>
                    <TextareaField
                      label="Descrição das atividades"
                      placeholder="Descreva suas principais responsabilidades..."
                      rows={3}
                      {...register(`experiencias.${idx}.descricao`)}
                    />
                  </div>
                )
              })}
              <button
                type="button"
                onClick={() =>
                  experiencias.append({
                    empresa: '',
                    cargo: '',
                    dataInicio: '',
                    dataFim: '',
                    atual: false,
                    descricao: '',
                  })
                }
                className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors border border-dashed border-neutral-700 hover:border-primary-500/50 rounded-lg px-4 py-3 w-full justify-center"
              >
                <Plus size={16} />
                Adicionar Experiência
              </button>
            </div>
          </Section>

          <Section icon={<BookOpen size={18} />} title="Formação Acadêmica">
            <div className="space-y-6">
              {formacoes.fields.map((field, idx) => (
                <div
                  key={field.id}
                  className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5 space-y-4"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-neutral-300">Formação {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => formacoes.remove(idx)}
                      className="text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Instituição"
                      placeholder="Nome da escola ou universidade"
                      error={errors.formacoes?.[idx]?.instituicao?.message}
                      {...register(`formacoes.${idx}.instituicao`)}
                    />
                    <Input
                      label="Curso"
                      placeholder="Nome do curso"
                      error={errors.formacoes?.[idx]?.curso?.message}
                      {...register(`formacoes.${idx}.curso`)}
                    />
                    <Select
                      label="Grau"
                      options={GRAUS}
                      placeholder="Selecione o grau"
                      error={errors.formacoes?.[idx]?.grau?.message}
                      {...register(`formacoes.${idx}.grau`)}
                    />
                    <Input
                      label="Data de Início"
                      type="month"
                      error={errors.formacoes?.[idx]?.dataInicio?.message}
                      {...register(`formacoes.${idx}.dataInicio`)}
                    />
                    <Input
                      label="Data de Conclusão (ou previsão)"
                      type="month"
                      {...register(`formacoes.${idx}.dataConclusao`)}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  formacoes.append({
                    instituicao: '',
                    curso: '',
                    grau: '',
                    dataInicio: '',
                    dataConclusao: '',
                  })
                }
                className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors border border-dashed border-neutral-700 hover:border-primary-500/50 rounded-lg px-4 py-3 w-full justify-center"
              >
                <Plus size={16} />
                Adicionar Formação
              </button>
            </div>
          </Section>

          <Section icon={<ListChecks size={18} />} title="Habilidades">
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={novaHabilidade}
                  onChange={(e) => setNovaHabilidade(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      const val = novaHabilidade.trim()
                      if (val) {
                        habilidades.append({ nome: val })
                        setNovaHabilidade('')
                      }
                    }
                  }}
                  placeholder="Digite uma habilidade e pressione Enter"
                  className="flex-1 h-11 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/50"
                />
                <button
                  type="button"
                  onClick={() => {
                    const val = novaHabilidade.trim()
                    if (val) {
                      habilidades.append({ nome: val })
                      setNovaHabilidade('')
                    }
                  }}
                  className="px-4 bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white rounded-lg text-sm transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {habilidades.fields.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {habilidades.fields.map((field, idx) => (
                    <span
                      key={field.id}
                      className="flex items-center gap-1.5 bg-neutral-800 border border-neutral-700 text-neutral-300 px-3 py-1.5 rounded-md text-sm"
                    >
                      {field.nome}
                      <button
                        type="button"
                        onClick={() => habilidades.remove(idx)}
                        className="text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Section>

          <Section icon={<BookOpen size={18} />} title="Cursos e Certificações">
            <div className="space-y-6">
              {certificados.fields.map((field, idx) => (
                <div
                  key={field.id}
                  className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-neutral-300">Curso {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => certificados.remove(idx)}
                      className="text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Nome do Curso"
                      placeholder="Ex: Excel Avançado"
                      error={errors.certificados?.[idx]?.nome?.message}
                      {...register(`certificados.${idx}.nome`)}
                    />
                    <Input
                      label="Instituição"
                      placeholder="Ex: Senac, Udemy..."
                      error={errors.certificados?.[idx]?.instituicao?.message}
                      {...register(`certificados.${idx}.instituicao`)}
                    />
                    <Input
                      label="Ano de Conclusão"
                      placeholder="Ex: 2024"
                      {...register(`certificados.${idx}.ano`)}
                    />
                    <Input
                      label="Carga Horária (horas)"
                      placeholder="Ex: 40"
                      {...register(`certificados.${idx}.cargaHoraria`)}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  certificados.append({
                    nome: '',
                    instituicao: '',
                    ano: '',
                    cargaHoraria: '',
                  })
                }
                className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors border border-dashed border-neutral-700 hover:border-primary-500/50 rounded-lg px-4 py-3 w-full justify-center"
              >
                <Plus size={16} />
                Adicionar Curso
              </button>
            </div>
          </Section>

          <div className="flex items-center justify-end gap-4 pt-4 border-t border-neutral-800">
            {saved && <span className="text-sm text-green-400">Currículo salvo com sucesso!</span>}
            <Button type="submit" size="lg">
              Salvar Currículo
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
