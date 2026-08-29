import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, Send, CheckCircle2, Radio } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { socials, profile } from '../data/siteData'

const channelMeta = {
  github: { icon: Github, color: '#c9d1d9', url: socials.github.url, value: 'github.com/dhamodharan63' },
  linkedin: { icon: Linkedin, color: '#0a66c2', url: socials.linkedin.url, value: '/in/dhamodharan-s' },
  instagram: { icon: Instagram, color: '#e1306c', url: socials.instagram.url, value: '@its.me.dhamodharan' },
  email: { icon: Mail, color: '#00e5ff', url: socials.email.url, value: 'sdhamo10@gmail.com' },
}

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'NAME REQUIRED (MIN 2 CHARACTERS)'
  if (!form.email.trim()) {
    errors.email = 'EMAIL REQUIRED'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'INVALID EMAIL FORMAT'
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'MESSAGE REQUIRED (MIN 10 CHARACTERS)'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // ── Backend hook ─────────────────────────────────────────
    // Connect an email service / backend here, e.g.:
    // sendMessage({ name: form.name, email: form.email, message: form.message })
    //   .then(() => setSent(true))
    //   .catch(() => setErrors({ ... }));
    setSent(true)
    setForm(initialForm)
  }

  return (
    <section className="section" id="contact">
      <SectionHeading title="ESTABLISH_CONNECTION" subtitle="open_channel // direct_link::available" />

      <motion.div
        className="tech-wall"
        style={{ padding: '60px 36px', textAlign: 'center', marginBottom: 64 }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="github-card__title" style={{ margin: '0 auto 18px', width: 'fit-content' }}>
          &gt; OPPORTUNITY_PROTOCOL
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 3.4vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '0.06em',
            color: '#eafff7',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          OPEN TO <span style={{ color: 'var(--neon-green)' }}>FRONTEND</span> /{' '}
          <span style={{ color: 'var(--neon-cyan)' }}>WEB</span>{' '}
          <span style={{ color: 'var(--deep-purple)', display: 'inline-block' }}>DEVELOPMENT</span>
        </h3>
        <p
          style={{
            margin: '18px auto 34px',
            maxWidth: 560,
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-code)',
            lineHeight: 1.9,
          }}
        >
          I am currently open to opportunities in Frontend Development, Web Development, Web
          Design, and related development roles.
        </p>
        <a className="btn" href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity — Let's Connect")}`}>
          <Radio size={17} /> Start A Conversation
        </a>
      </motion.div>

      <div className="contact-grid row g-3 g-lg-4">
        <div className="contact-channels col-12 col-lg-5">
          {Object.entries(channelMeta).map(([key, meta], i) => {
            const Icon = meta.icon
            return (
              <motion.a
                key={key}
                className="contact-channel"
                style={{ '--ch': meta.color }}
                href={meta.url}
                target={key === 'email' ? undefined : '_blank'}
                rel={key === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={`Connect via ${key}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                whileHover={{ x: 6 }}
              >
                <div className="contact-channel__icon">
                  <Icon />
                </div>
                <div>
                  <div className="contact-channel__label">{key.toUpperCase()}</div>
                  <div className="contact-channel__value">{meta.value}</div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.form
          className="contact-form col-12 col-lg-7"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="cf-name">
              <span>&gt;</span> Name
            </label>
            <input
              id="cf-name"
              name="name"
              className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
              type="text"
              autoComplete="name"
              placeholder="YOUR_NAME..."
              value={form.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <div className="contact-form__error">{errors.name}</div>}
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="cf-email">
              <span>&gt;</span> Email
            </label>
            <input
              id="cf-email"
              name="email"
              className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
              type="email"
              autoComplete="email"
              placeholder="YOU@EMAIL.COM"
              value={form.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <div className="contact-form__error">{errors.email}</div>}
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="cf-message">
              <span>&gt;</span> Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              className={`contact-form__input ${errors.message ? 'contact-form__input--error' : ''}`}
              placeholder="TRANSMISSION_TEXT..."
              value={form.message}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <div className="contact-form__error">{errors.message}</div>}
          </div>

          <button className="btn btn--cyan btn--block" type="submit">
            <Send size={16} /> Send Message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.div
                className="contact-form__success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircle2 size={18} /> TRANSMISSION RECEIVED — I WILL RESPOND SOON.
              </motion.div>
            )}
          </AnimatePresence>

          <p className="contact-form__hint">// BACKEND_LINK: slot ready for email service integration</p>
        </motion.form>
      </div>
    </section>
  )
}