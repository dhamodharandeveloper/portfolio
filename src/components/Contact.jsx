import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiInfo,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/resume.js'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')
  const toastTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const showToast = (message) => {
    setToast(message)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(''), 3200)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name to continue.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Add a short message before transmitting.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    const subject = form.subject.trim() || `Portfolio contact from ${form.name.trim()}`
    const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    showToast('Opening your email client — nothing was sent by this site.')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      showToast('Email copied to clipboard.')
    } catch {
      try {
        const input = document.createElement('textarea')
        input.value = profile.email
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        showToast('Email copied to clipboard.')
      } catch {
        showToast(`Email: ${profile.email}`)
      }
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Contact"
          title="Open a secure channel"
          subtitle="Direct contact details from the resume. Use the form to compose a message in your own email client — there is no hidden backend."
          side={
            <>
              <strong>Response channel</strong>
              SDHAMO10@GMAIL.COM
            </>
          }
        />

        <div className="contact__grid">
          <Reveal>
            <div>
              <p className="contact__lead">
                Have an entry-level opportunity, a project idea, or a question about my work? Reach
                out directly — the fastest route is email or a call.
              </p>

              <div className="contact__channel">
                <span className="prompt">&gt;</span> channel: {profile.email}{' '}
                <span className="cursor" aria-hidden="true" />
              </div>

              <div className="contact-cards">
                <button type="button" className="contact-card" onClick={copyEmail}>
                  <span className="contact-card__icon" aria-hidden="true">
                    <FiMail />
                  </span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">Email</span>
                    <span className="contact-card__value">{profile.email}</span>
                  </span>
                  <span className="contact-card__hint">
                    <FiCopy /> Copy
                  </span>
                </button>

                <a className="contact-card" href={`tel:${profile.phoneHref}`}>
                  <span className="contact-card__icon" aria-hidden="true">
                    <FiPhone />
                  </span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">Phone</span>
                    <span className="contact-card__value">{profile.phone}</span>
                  </span>
                  <span className="contact-card__hint">Call</span>
                </a>

                <div className="contact-card">
                  <span className="contact-card__icon" aria-hidden="true">
                    <FiMapPin />
                  </span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">Location</span>
                    <span className="contact-card__value">{profile.address}</span>
                  </span>
                  <span className="contact-card__hint">Base</span>
                </div>
              </div>

              <div className="socials">
                <a
                  className="social-btn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin />
                </a>
                <a
                  className="social-btn"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                >
                  <FiGithub />
                </a>
                <a
                  className="social-btn"
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram profile"
                >
                  <FiInstagram />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form glass frame" onSubmit={handleSubmit} noValidate>
              <div className="form__head">
                <span>Secure message terminal</span>
                <span>UI only // no backend</span>
              </div>

              <div className="form__row">
                <div className={`field ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="contact-name">
                    Name <em>*</em>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span className="field__error" id="name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={`field ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="contact-email">
                    Email <em>*</em>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span className="field__error" id="email-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={`field ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="contact-message">
                  Message <em>*</em>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span className="field__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Transmit Message <FiSend />
              </button>

              <p className="form__note">
                <FiInfo />
                <span>
                  This form is a front-end interface only. No backend is connected and nothing is
                  sent automatically — submitting opens your default email client with the message
                  pre-filled.
                </span>
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            role="status"
            initial={{ opacity: 0, y: 16, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <FiCheckCircle /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
