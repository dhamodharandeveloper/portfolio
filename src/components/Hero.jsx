import { Suspense, lazy, useRef } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { SiJavascript, SiMysql, SiReact, SiSpringboot } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { profile } from '../data/resume.js'
import ErrorBoundary from './ErrorBoundary.jsx'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, delayChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

const stack = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Java', 'Spring Boot', 'MySQL']

function HoloFallback() {
  return (
    <div className="holo-fallback" aria-hidden="true">
      <div className="holo-fallback__core" />
    </div>
  )
}

export default function Hero({ ready }) {
  const sectionRef = useRef(null)
  const visualRef = useRef(null)
  const inView = useInView(sectionRef, { margin: '120px' })
  const reduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.6 })
  const springY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.6 })
  const parallaxX = useTransform(springX, (value) => value * 16)
  const parallaxY = useTransform(springY, (value) => value * 12)

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || reduceMotion) return
    const node = visualRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="container-x hero__grid">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
        >
          <motion.div variants={item} className="hero__badge">
            <span className="status-dot" />
            <span>
              System online <b>//</b> Portfolio v2.0
            </span>
          </motion.div>

          <motion.h1 className="hero__title" variants={item}>
            <span className="hero__title-line">DHAMODHARAN</span>
          </motion.h1>

          <motion.div className="hero__roles" variants={item}>
            <span className="hero__role">{profile.role}</span>
            <span className="hero__role-sep">//</span>
            <span className="hero__role-sub">{profile.subRole}</span>
          </motion.div>

          <motion.p className="hero__summary" variants={item}>
            {profile.shortIntro} Eager to apply technical knowledge, learn new technologies, and
            contribute to developing responsive, user-friendly web applications as an entry-level
            developer.
          </motion.p>

          <motion.div className="hero__meta" variants={item}>
            <span className="chip">
              <FiMapPin /> {profile.location}
            </span>
            <span className="chip">
              <span className="status-dot" /> Entry-level developer
            </span>
          </motion.div>

          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              Explore My Work <FiArrowRight />
            </a>
            <a
              href={profile.resumeFile}
              download="DHAMODHARAN_S_Resume.pdf"
              className="btn btn-ghost"
            >
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me <FiMail />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              View GitHub <FiGithub />
            </a>
          </motion.div>

          <motion.div className="hero__stack" variants={item} aria-label="Core technology stack">
            <span className="hero__stack-label">Stack</span>
            {stack.map((technology) => (
              <span key={technology} className="hero__stack-item">
                {technology}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          ref={visualRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__terminal">
            <div className="terminal" aria-label="Developer profile code snippet">
              <div className="terminal__bar">
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__title">developer.profile — zsh</span>
              </div>
              <div className="terminal__body">
                <span className="ln">
                  <span className="c">// profile.json</span>
                </span>
                <span className="ln">
                  <span className="k">const</span> developer = {'{'}
                </span>
                <span className="ln">
                  {'  '}name: <span className="v">&quot;Dhamodharan&quot;</span>,
                </span>
                <span className="ln">
                  {'  '}role: <span className="v">&quot;Full Stack Developer&quot;</span>,
                </span>
                <span className="ln">
                  {'  '}stack: [<span className="s">&quot;Java&quot;</span>,{' '}
                  <span className="s">&quot;Spring Boot&quot;</span>,{' '}
                  <span className="s">&quot;React.js&quot;</span>],
                </span>
                <span className="ln">
                  {'  '}education: <span className="v">&quot;M.Sc. IT — 2026&quot;</span>,
                </span>
                <span className="ln">
                  {'  '}location: <span className="v">&quot;Villupuram, TN&quot;</span>,
                </span>
                <span className="ln">
                  {'  '}status: <span className="k">&quot;SYSTEM ONLINE&quot;</span>
                </span>
                <span className="ln">{'};'}</span>
                <span className="ln">
                  <span className="k">▶</span> <span className="terminal__cursor" />
                </span>
              </div>
            </div>
          </div>

          <div className="hero__stage">
            <motion.div className="hero__parallax" style={{ x: parallaxX, y: parallaxY }}>
              <div className="hero__aura" />
              <div className="hero__orbit hero__orbit--1" />
              <div className="hero__orbit hero__orbit--2" />
              <div className="hero__orbit hero__orbit--3" />
            </motion.div>

            <div className="hero__canvas">
              <ErrorBoundary fallback={<HoloFallback />}>
                <Suspense fallback={<HoloFallback />}>
                  <HeroScene active={inView} reducedMotion={Boolean(reduceMotion)} />
                </Suspense>
              </ErrorBoundary>
            </div>

            <div className="hero__hud hero__hud--tl">
              NEURAL CORE <span>// 001</span>
              <br />
              RENDER: WEBGL
            </div>
            <div className="hero__hud hero__hud--br">
              SIGNAL <span>●</span> STABLE
              <br />
              11.94°N / 79.49°E
            </div>

            <div className="hero__chips">
              <span className="tech-chip tech-chip--react" aria-hidden="true">
                <SiReact /> React
              </span>
              <span className="tech-chip tech-chip--java" aria-hidden="true">
                <FaJava /> Java
              </span>
              <span className="tech-chip tech-chip--spring" aria-hidden="true">
                <SiSpringboot /> Spring Boot
              </span>
              <span className="tech-chip tech-chip--mysql" aria-hidden="true">
                <SiMysql /> MySQL
              </span>
              <span className="tech-chip tech-chip--js" aria-hidden="true">
                <SiJavascript /> JavaScript
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll to explore</span>
        <i />
      </div>
      <div className="hero__rail" aria-hidden="true">
        PORTFOLIO // 2026
      </div>
    </section>
  )
}
