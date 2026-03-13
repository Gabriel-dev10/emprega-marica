import { lazy, type ReactNode, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { useAuth } from '../shared/context/auth-context'

const LandingPage = lazy(() => import('../pages/LandingPage'))
const LoginCandidatoPage = lazy(() => import('../features/auth/candidato/LoginCandidatoPage'))
const LoginEmpresaPage = lazy(() => import('../features/auth/empresa/LoginEmpresaPage'))
const CadastroCandidatoPage = lazy(() => import('../features/auth/candidato/CadastroCandidatoPage'))
const ParaEmpresasPage = lazy(() => import('../layouts/footer/ParaEmpresasPage'))
const ParaCandidatosPage = lazy(() => import('../layouts/footer/ParaCandidatosPage'))
const PerfilCandidatoPage = lazy(() => import('../features/auth/candidato/PerfilCandidatoPage'))
const SolicitarPropostaPage = lazy(() => import('../features/auth/empresa/SolicitarPropostaPage'))

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-neutral-500 text-sm">Carregando...</div>
    </div>
  )
}

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<LoadingScreen />}>{element}</Suspense>
)

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<LandingPage />),
  },
  {
    path: '/login',
    element: withSuspense(<LoginCandidatoPage />),
  },
  {
    path: '/login/candidato',
    element: withSuspense(<LoginCandidatoPage />),
  },
  {
    path: '/login/empresa',
    element: withSuspense(<LoginEmpresaPage />),
  },
  {
    path: '/empresa/solicitar-proposta',
    element: withSuspense(<SolicitarPropostaPage />),
  },
  {
    path: '/cadastrar/candidato',
    element: withSuspense(<CadastroCandidatoPage />),
  },
  {
    path: '/para-empresas',
    element: withSuspense(<ParaEmpresasPage />),
  },
  {
    path: '/para-candidatos',
    element: withSuspense(<ParaCandidatosPage />),
  },
  {
    path: '/perfil/candidato',
    element: withSuspense(
      <ProtectedRoute>
        <PerfilCandidatoPage />
      </ProtectedRoute>,
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
