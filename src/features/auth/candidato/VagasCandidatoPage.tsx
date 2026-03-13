import { Briefcase, LogOut, MapPin, User } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Footer } from '../../../layouts/footer/Footer'
import { FEATURED_JOBS } from '../../../shared/api/mock/jobs'
import { useAuth } from '../../../shared/context/auth-context'

export default function VagasCandidatoPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [inscricoes, setInscricoes] = useState<string[]>([])

  const jobs = useMemo(() => FEATURED_JOBS, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleInscricao = (jobId: string) => {
    setInscricoes((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]))
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="bg-neutral-900 border-b border-neutral-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <a href="/" className="text-lg font-bold text-white">
            EmpregaAí<span className="text-neutral-500">Maricá</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/perfil/candidato">
              <Button size="sm" variant="outline">
                Meu Currículo
              </Button>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <LogOut size={16} />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Vagas para você</h1>
          <p className="text-neutral-400 mt-1 text-sm">
            Escolha uma vaga e clique em inscrever-se. Total de inscrições: {inscricoes.length}
          </p>
        </div>

        <Card className="mb-8 p-4 sm:p-5 border border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Perfil</p>
              <p className="text-white font-semibold flex items-center gap-2">
                <User size={16} className="text-primary-400" />
                {user?.nome}
              </p>
              <p className="text-sm text-neutral-400">{user?.email}</p>
              <p className="text-xs text-neutral-500">{user?.telefone}</p>
            </div>
            <Link to="/perfil/candidato">
              <Button size="sm">Baixar currículo</Button>
            </Link>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {jobs.map((job) => {
            const inscrito = inscricoes.includes(job.id)
            return (
              <Card key={job.id} className="p-5 border border-neutral-800">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="text-white font-semibold leading-snug">{job.title}</h2>
                  {job.isNew && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-500/15 text-primary-400 border border-primary-500/20">
                      Novo
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-300 mb-3">{job.company}</p>
                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary-500/70" />
                    {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase size={14} className="text-primary-500/70" />
                    {job.type} • {job.salary}
                  </p>
                </div>
                <Button
                  fullWidth
                  variant={inscrito ? 'outline' : 'primary'}
                  onClick={() => handleInscricao(job.id)}
                  disabled={inscrito}
                >
                  {inscrito ? 'Inscrição realizada' : 'Inscrever-se'}
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
