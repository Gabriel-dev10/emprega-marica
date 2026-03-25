import { Briefcase, FileText, MapPin, User } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Footer } from '../../../layouts/footer/Footer'
import { FEATURED_JOBS } from '../../../shared/api/mock/jobs'
import { useAuth } from '../../../shared/context/auth-context'
import { JobSearchForm } from '../../landing/components/ui/JobSearchForm'

export default function VagasCandidatoPage() {
  const { user } = useAuth()
  const [inscricoes, setInscricoes] = useState<string[]>([])

  const jobs = useMemo(() => FEATURED_JOBS, [])

  const handleInscricao = (jobId: string) => {
    setInscricoes((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]))
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 sm:py-12">
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-default mb-2">
              Olá, {user?.nome || 'Candidato'}!
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-subtle">
              <span className="flex items-center gap-1.5">
                <User size={16} className="text-text-muted" />
                {user?.email || 'email@exemplo.com'}
              </span>
              <span className="hidden sm:block text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-text-muted" />
                {user?.telefone || '(00) 00000-0000'}
              </span>
            </div>
          </div>

          <Link to="/perfil/candidato" className="w-full md:w-auto">
            <Button className="w-full md:w-auto flex items-center justify-center gap-2">
              <FileText size={18} />
              Acessar Meu Currículo
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Card className="p-5 border border-neutral-800 bg-neutral-900/50">
            <p className="text-xs uppercase tracking-wide text-text-subtle mb-1">
              Inscrições Realizadas
            </p>
            <p className="text-3xl font-bold text-text-default">{inscricoes.length}</p>
          </Card>
          <Card className="p-5 border border-neutral-800 bg-neutral-900/50">
            <p className="text-xs uppercase tracking-wide text-text-subtle mb-1">
              Vagas Disponíveis
            </p>
            <p className="text-3xl font-bold text-text-default">{jobs.length}</p>
          </Card>
          <Card className="p-5 border border-neutral-800 bg-neutral-900/50 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-wide text-text-subtle mb-1">
              Status do Perfil
            </p>
            <p className="text-lg font-semibold text-green-400 mt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Ativo para empresas
            </p>
          </Card>
        </section>

        <section className="mb-12 relative z-20">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-default">Buscar Oportunidades</h2>
            <p className="text-sm text-text-subtle mt-1">
              Encontre a vaga ideal filtrando por cargo ou distrito.
            </p>
          </div>
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-2">
            <JobSearchForm />
          </div>
        </section>

        <section className="mb-6 flex items-end justify-between relative z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-default">Vagas recomendadas</h2>
            <p className="text-sm text-text-subtle mt-1">
              Encontramos estas oportunidades baseadas no seu perfil.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 relative z-10">
          {jobs.map((job) => {
            const inscrito = inscricoes.includes(job.id)
            return (
              <Card
                key={job.id}
                className="p-6 border border-neutral-800 flex flex-col h-full hover:border-neutral-700 transition-colors bg-neutral-900/40 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg text-text-default font-semibold leading-snug">{job.title}</h3>
                    <p className="text-sm text-text-primary mt-1">{job.company}</p>
                  </div>
                  {job.isNew && (
                    <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-primary-500/10 text-text-primary border border-primary-500/20">
                      Novo
                    </span>
                  )}
                </div>

                <div className="space-y-2.5 text-sm text-text-subtle mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-text-muted" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-text-muted" />
                    <span>
                      {job.type} • {job.salary}
                    </span>
                  </div>
                </div>

                <Button
                  fullWidth
                  variant={inscrito ? 'outline' : 'primary'}
                  onClick={() => handleInscricao(job.id)}
                  disabled={inscrito}
                  className={
                    inscrito
                      ? 'opacity-70 cursor-not-allowed border-green-500/30 text-green-400'
                      : ''
                  }
                >
                  {inscrito ? '✓ Inscrição Realizada' : 'Inscrever-se'}
                </Button>
              </Card>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}