import { FeaturedJobs } from '../features/landing/components/FeaturedJobs'
import { Hero } from '../features/landing/components/Hero'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturedJobs />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
