import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Github from './components/Github'
import Goals from './components/Goals'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import MatrixRain from './components/MatrixRain'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <MatrixRain />
      <CursorGlow />
      <div className="overlay-scanlines" aria-hidden="true" />
      <div className="overlay-vignette" aria-hidden="true" />

      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Github />
        <Goals />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  )
}