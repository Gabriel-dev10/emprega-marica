import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const LandingPage = lazy(() => import('../pages/LandingPage'))
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const CadastroCandidatoPage = lazy(() => import('../pages/auth/CadastroCandidatoPage'))
const CadastroEmpresaPage = lazy(() => import('../pages/auth/CadastroEmpresaPage'))

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-neutral-500 text-sm">Carregando...</div>
    </div>
  )
}

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<LoadingScreen />}>
    {element}
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<LandingPage />),
  },
  {
    path: '/login',
    element: withSuspense(<LoginPage />),
  },
  {
    path: '/cadastrar/candidato',
    element: withSuspense(<CadastroCandidatoPage />),
  },
  {
    path: '/cadastrar/empresa',
    element: withSuspense(<CadastroEmpresaPage />),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
