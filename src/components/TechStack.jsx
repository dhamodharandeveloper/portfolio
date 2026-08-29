import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { techStack } from '../data/siteData'

const chipColors = {
  h: '#ff6b4a',
  c: '#38bdf8',
  j: '#facc15',
  b: '#a855f7',
}

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <SectionHeading title="TECH_STACK" subtitle="technology_wall // loaded_4" />
      <motion.div
        className="tech-wall"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tech-wall__status">
          <span>SYSTEM STATUS: ONLINE</span>
          <span>TECH STACK: ACTIVE</span>
          <span>BUILD: READY</span>
        </div>
        <div className="tech-wall__row">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-chip"
              style={{ '--tc': chipColors[tech.className] || '#00ff9d' }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}