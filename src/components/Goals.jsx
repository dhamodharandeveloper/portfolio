import { motion } from 'framer-motion'
import { Rocket, Code2, Palette, Zap, Briefcase, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { goals } from '../data/siteData'

const iconMap = {
  rocket: Rocket,
  code: Code2,
  palette: Palette,
  zap: Zap,
  briefcase: Briefcase,
  trending: TrendingUp,
}

export default function Goals() {
  return (
    <section className="section" id="goals">
      <SectionHeading title="CURRENT_MISSIONS" subtitle="mission_control // 6 objectives active" />
      <div className="goals-grid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {goals.map((goal, i) => {
          const Icon = iconMap[goal.icon] || Rocket
          return (
            <motion.div
              className="goal-card"
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="goal-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <span className="goal-card__tag">MISSION_{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="goal-card__title">{goal.title}</h3>
                <div className="goal-card__status">
                  <span className="dot" /> In Progress
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}