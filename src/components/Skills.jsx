import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/siteData'

function SkillBar({ level, delay }) {
  return (
    <div
      className="skill-bar"
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="skill-bar__fill"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: level / 100 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading title="SYSTEM_SKILLS" subtitle="analyzing_skillset // module_core" />
      <div className="skills-grid row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-lg-4">
        {skills.map((skill, i) => (
          <motion.article
            className="skill-card"
            key={skill.id}
            style={{ '--c': skill.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-card__top">
              <div className="skill-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                  <path d={skill.logo} />
                </svg>
              </div>
              <span className="skill-card__pct">{skill.level}%</span>
            </div>

            <h3 className="skill-card__name">{skill.name}</h3>

            <SkillBar level={skill.level} delay={i * 0.12} />

            <div className="skill-card__code" aria-hidden="true">
              <span className="sy">&gt; </span>
              {skill.code}
            </div>

            <div className="skill-card__lines">
              <span>
                STATUS: <span className="st">{skill.status}</span>
              </span>
              <span>
                SYSTEM: <span className="sy">ONLINE</span>
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}