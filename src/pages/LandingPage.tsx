import { FeaturedJobs } from '../features/landing/components/FeaturedJobs'
import { Hero } from '../features/landing/components/Hero'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <FeaturedJobs />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
