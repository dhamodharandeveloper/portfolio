import { FiBookOpen, FiCode, FiMail, FiMapPin } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'
import { milestones, profile, stats } from '../data/resume.js'

function Portrait() {
  return (
    <div className="profile-avatar__photo">
      <img
        src="/profile-dhamodharan.jpg"
        alt="Portrait of Dhamodharan"
        width="1000"
        height="1000"
        loading="lazy"
        decoding="async"
      />
      <span className="profile-avatar__scanlines" aria-hidden="true" />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title="Developer profile & origin story"
          subtitle="A resume-backed snapshot of who I am, what I build, and the academic path that shaped my approach to software."
          side={
            <>
              <strong>M.Sc. IT // 2026</strong>
              VILLUPURAM, IN
            </>
          }
        />

        <div className="about__grid">
          <Reveal>
            <div className="profile-card glass frame">
              <div className="profile-card__scan" aria-hidden="true" />
              <div className="profile-avatar">
                <span className="profile-avatar__ring profile-avatar__ring--1" aria-hidden="true" />
                <span className="profile-avatar__ring profile-avatar__ring--2" aria-hidden="true" />
                <Portrait />
              </div>

              <div className="profile-id">ID // DEV-2026</div>
              <h3 className="profile-name">DHAMODHARAN</h3>
              <p className="profile-role">{profile.role}</p>

              <ul className="profile-meta">
                <li>
                  <FiMapPin /> {profile.location}
                </li>
                <li>
                  <FiMail /> {profile.email}
                </li>
                <li>
                  <FiBookOpen /> M.Sc. IT — Arignar Anna Govt. Arts &amp; Science College
                </li>
                <li>
                  <FiCode /> Aspiring Java Full Stack Developer
                </li>
              </ul>

              <div className="profile-focus">
                <span className="tag">Java</span>
                <span className="tag">Spring Boot</span>
                <span className="tag">React.js</span>
                <span className="tag">MySQL</span>
              </div>

              <div className="profile-status">
                <span className="status-dot" /> System online
              </div>
            </div>
          </Reveal>

          <div className="about__right">
            <Reveal delay={0.08}>
              <div className="summary-card glass frame">
                <span className="summary-card__mark" aria-hidden="true">
                  &ldquo;
                </span>
                <div className="summary-card__label">Professional Summary</div>
                <p className="summary-card__text">{profile.summary}</p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="milestones glass">
                <div className="milestones__head">
                  <span>Developer timeline</span>
                  <span>04 milestones</span>
                </div>
                <ul>
                  {milestones.map((milestone) => (
                    <li className="milestone" key={`${milestone.year}-${milestone.title}`}>
                      <span className="milestone__year">{milestone.year}</span>
                      <span className="milestone__rail" aria-hidden="true">
                        <span className="milestone__dot" />
                      </span>
                      <div>
                        <h4 className="milestone__title">{milestone.title}</h4>
                        <p className="milestone__detail">{milestone.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.05 * index}>
              <div className="stat-card glass">
                <div className="stat-card__value">
                  <Counter value={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="stat-card__label">{stat.label}</div>
                <span className="stat-card__line" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
