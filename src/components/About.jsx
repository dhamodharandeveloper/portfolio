import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const terminalLines = [
  { parts: [{ t: '> ', c: 'c-green' }], text: 'const developer = {' },
  { indent: 2, parts: [{ t: 'name', c: 'c-purple' }, { t: ': ', c: 'c-dim' }, { t: '"DHAMODHARAN"', c: 'c-string' }, { t: ',', c: 'c-dim' }] },
  { indent: 2, parts: [{ t: 'passion', c: 'c-purple' }, { t: ': ', c: 'c-dim' }, { t: '"Frontend Development"', c: 'c-string' }, { t: ',', c: 'c-dim' }] },
  { indent: 2, parts: [{ t: 'skills', c: 'c-purple' }, { t: ': ', c: 'c-dim' }, { t: '["HTML", "CSS", "JS", "Bootstrap"]', c: 'c-string' }, { t: ',', c: 'c-dim' }] },
  { indent: 2, parts: [{ t: 'expertise', c: 'c-purple' }, { t: ': ', c: 'c-dim' }, { t: '["Web Dev", "Web Design", "Graphic Design"]', c: 'c-string' }, { t: ';', c: 'c-dim' }] },
  { parts: [{ t: '}', c: 'c-white' }] },
  { parts: [{ t: '// ', c: 'c-dim' }, { t: 'transforming ideas into digital experiences', c: 'c-dim' }] },
  { parts: [{ t: '// ', c: 'c-dim' }, { t: 'continuous growth: ', c: 'c-dim' }, { t: 'true', c: 'c-purple' }] },
]

const profileRows = [
  { key: 'NAME', val: 'DHAMODHARAN' },
  { key: 'ROLE', val: 'FRONTEND DEVELOPER' },
  { key: 'STATUS', val: 'OPEN TO WORK' },
  { key: 'LOCATION', val: 'TAMIL NADU, INDIA' },
  { key: 'EXPERIENCE', val: 'DEVELOPING' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading title="ABOUT_ME.EXE" subtitle="decode_developer_profile // bio v2.6" />

      <div className="about-grid row g-3 g-lg-4">
        <motion.div
          className="terminal col-12 col-lg-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--r" />
            <span className="terminal__dot terminal__dot--y" />
            <span className="terminal__dot terminal__dot--g" />
            <span className="terminal__title">about_me.exe — zsh</span>
          </div>
          <div className="terminal__body">
            {terminalLines.map((line, i) => (
              <motion.div
                className="terminal__line"
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.3 }}
              >
                {' '.repeat(line.indent ?? 0)}
                {line.parts.map((p, j) => (
                  <span key={j} className={p.c}>
                    {p.t}
                  </span>
                ))}
              </motion.div>
            ))}
            <motion.div
              className="terminal__line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + terminalLines.length * 0.09 + 0.2 }}
            >
              <span className="c-green">&gt;</span>
              <span className="terminal__cursor" aria-hidden="true" />
            </motion.div>
          </div>
          <div
            className="terminal__body"
            style={{ borderTop: '1px solid rgba(0,255,157,0.14)', paddingTop: 18 }}
          >
            <motion.p
              className="terminal__line"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="c-green">I am a passionate</span> Frontend Developer with a strong
              interest in creating <span className="c-cyan">responsive, user-friendly, and professional</span>{' '}
              websites.
            </motion.p>
            <motion.p
              className="terminal__line"
              style={{ marginTop: 14 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              I have experience working with <span className="c-purple">HTML, CSS, JavaScript, and Bootstrap</span>,
              along with skills in <span className="c-purple">Web Development, Web Design, and Graphic Design</span>.
            </motion.p>
            <motion.p
              className="terminal__line"
              style={{ marginTop: 14 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I enjoy transforming ideas into <span className="c-cyan">clean, engaging, and visually appealing</span>{' '}
              digital experiences.
            </motion.p>
            <motion.p
              className="terminal__line"
              style={{ marginTop: 14 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
            >
              I am continuously developing my technical skills and exploring new technologies to
              improve my capabilities as a developer.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="profile-card col-12 col-lg-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="profile-card__head">
            <div className="profile-avatar">
              DH
              <span className="profile-avatar__status" aria-hidden="true" />
            </div>
            <div>
              <div className="profile-card__hud-name">DHAMODHARAN_01</div>
              <div className="profile-card__hud-role">Frontend Developer_</div>
            </div>
          </div>

          <div className="profile-card__data">
            {profileRows.map((row, i) => (
              <motion.div
                className="profile-row"
                key={row.key}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.09 }}
              >
                <span className="profile-row__key">{row.key}</span>
                <span className="profile-row__val">{row.val}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="profile-card__foot"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span>
              <span className="ok">[✓]</span> PROFILE VERIFIED
            </span>
            <span>
              <span className="sys">[✓]</span> SYSTEM: ONLINE
            </span>
            <span>
              <span className="ok">[✓]</span> READY FOR OPPORTUNITIES
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}