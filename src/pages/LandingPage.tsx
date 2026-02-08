import React from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Benefits } from '../components/sections/Benefits'
import { Process } from '../components/sections/Process'
import { Candidates } from '../components/sections/Candidates'
import { SocialProof } from '../components/sections/SocialProof'
import { Contact } from '../components/sections/Contact'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
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
