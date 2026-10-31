import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { skillCount, skills } from '../data/resume.js'

const layout = {
  frontend: 'skill-slot--wide',
  design: 'skill-slot--wide',
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Technical Skills"
          title="The stack behind the system"
          subtitle="Every technology below comes directly from the resume — grouped by discipline, with official technology marks and no invented proficiency scores."
          side={
            <>
              <strong>{String(skillCount).padStart(2, '0')} technologies</strong>
              RESUME-SOURCED
            </>
          }
        />

        <div className="skills__grid">
          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.id}
              delay={Math.min(groupIndex * 0.05, 0.25)}
              className={layout[group.id] ?? ''}
            >
              <TiltCard className="skill-card glass frame" max={5}>
                <div className="skill-card__head">
                  <span className="code">/ {group.code}</span>
                  <span className="count">{String(group.skills.length).padStart(2, '0')}</span>
                </div>
                <h3 className="skill-card__title">{group.label}</h3>
                <span className="skill-card__bar" aria-hidden="true" />

                <div className="skill-items">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.Icon
                    return (
                      <div className="skill-item" key={skill.name}>
                        <span
                          className="skill-item__icon"
                          style={{ animationDelay: `${(groupIndex * 0.3 + skillIndex * 0.22).toFixed(2)}s` }}
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                        <span className="skill-item__name">
                          {skill.name}
                          {skill.detail && (
                            <span className="skill-item__detail">{skill.detail}</span>
                          )}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="skills__foot">
            <span>Tooling listed exactly as provided in the resume — no percentage ratings.</span>
            <span>{skillCount} modules // online</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
