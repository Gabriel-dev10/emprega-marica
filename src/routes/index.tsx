import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const LandingPage = lazy(() => import('../pages/LandingPage'))

const withSuspense = (element: React.ReactNode) => (
  <Suspense
    fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}
  >
    {element}
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<LandingPage />),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
