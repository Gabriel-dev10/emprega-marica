import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Contact } from '../components/sections/Contact'
import { FeaturedJobs } from '../components/sections/FeaturedJobs'
import { Hero } from '../components/sections/Hero'
import { Process } from '../components/sections/Process'

function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturedJobs />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
