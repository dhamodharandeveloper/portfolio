import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BackgroundFX from './components/BackgroundFX.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function shouldBoot() {
  try {
    const params = new URLSearchParams(window.location.search)
    if (params.has('noboot')) return false
    if (params.has('boot')) return true
    return sessionStorage.getItem('ds-booted') !== '1'
  } catch {
    return true
  }
}

export default function App() {
  const [booting, setBooting] = useState(shouldBoot)

  useEffect(() => {
    if (!booting) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [booting])

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem('ds-booted', '1')
    } catch {
      /* storage may be unavailable — the portfolio still works */
    }
    setBooting(false)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <BackgroundFX />
      <CursorGlow />

      <AnimatePresence>
        {booting && <Preloader key="boot" onComplete={finishBoot} />}
      </AnimatePresence>

      <Navbar />

      <main id="main">
        <Hero ready={!booting} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
