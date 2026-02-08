import type React from 'react'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Benefits } from '../components/sections/Benefits'
import { Candidates } from '../components/sections/Candidates'
import { Contact } from '../components/sections/Contact'
import { FeaturedJobs } from '../components/sections/FeaturedJobs'
import { Hero } from '../components/sections/Hero'
import { Process } from '../components/sections/Process'
import { Services } from '../components/sections/Services'
import { SocialProof } from '../components/sections/SocialProof'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      <main>
        <Hero />
        <FeaturedJobs />
        <Services />
        <Benefits />
        <Process />
        <Candidates />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
