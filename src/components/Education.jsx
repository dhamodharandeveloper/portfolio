import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { FiAward, FiMapPin } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/resume.js'

export default function Education() {
  const listRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 78%', 'end 62%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  return (
    <section id="education" className="section education">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Education"
          title="Academic trajectory"
          subtitle="Four qualifications spanning computer science fundamentals, advanced IT study, and school-level foundations."
          side={
            <>
              <strong>04 qualifications</strong>
              2019 — 2026
            </>
          }
        />

        <div className="edu__list" ref={listRef}>
          <div className="edu__line" aria-hidden="true">
            <motion.div
              className="edu__line-fill"
              style={{ scaleY: reduceMotion ? 1 : lineScale }}
            />
          </div>

          {education.map((item, index) => (
            <Reveal key={`${item.year}-${item.short}`} delay={index * 0.06}>
              <article className="edu__item">
                <div className="edu__year">
                  {item.year}
                  <small>{item.short}</small>
                </div>

                <div className="edu__node-col" aria-hidden="true">
                  <span className={`edu__node ${item.current ? 'is-current' : ''}`} />
                </div>

                <div className="edu__card glass frame">
                  <div className="edu__card-top">
                    <span className="edu__short">
                      {item.short}
                      {item.current && <span className="edu__latest">LATEST</span>}
                      <span className="edu__year-inline">{item.year}</span>
                    </span>
                    <span className="edu__score">
                      <FiAward /> <b>{item.score}</b>
                    </span>
                  </div>
                  <h3 className="edu__degree">{item.degree}</h3>
                  <p className="edu__institution">
                    <FiMapPin /> {item.institution}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
