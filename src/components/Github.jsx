import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github as GithubIcon, GitBranch, Star, Users, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/siteData'

const loadState = {
  loading: 'loading',
  ok: 'ok',
  error: 'error',
}

const cellLevels = (function seededLevels() {
  let seed = 7
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  return Array.from({ length: 52 * 7 }, () => {
    const r = next()
    if (r > 0.85) return 5
    if (r > 0.7) return 4
    if (r > 0.5) return 3
    return 2
  })
})()

const levelClass = {
  1: 'github-cell',
  2: 'github-cell',
  3: 'github-cell github-cell--low',
  4: 'github-cell github-cell--mid',
  5: 'github-cell github-cell--high',
}

export default function Github() {
  const [state, setState] = useState(loadState.loading)
  const [user, setUser] = useState(null)
  const [langs, setLangs] = useState(null)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    ;(async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.github}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${profile.github}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
          }),
        ])

        if (cancelled) return
        if (!userRes.ok || !repoRes.ok) throw new Error('fetch failed')

        const userData = await userRes.json()
        const repos = await repoRes.json()

        if (cancelled) return
        setUser({
          name: userData.name || profile.github,
          login: userData.login,
          bio: userData.bio,
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          avatar: userData.avatar_url,
        })

        const langTotals = {}
        for (const repo of repos) {
          if (!repo.language) continue
          langTotals[repo.language] = (langTotals[repo.language] || 0) + 1
        }
        const total = Object.values(langTotals).reduce((a, b) => a + b, 0) || 1
        const top = Object.entries(langTotals)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([lang, count]) => ({ lang, pct: Math.round((count / total) * 100) }))

        setLangs(top)
        setState(loadState.ok)
      } catch (err) {
        if (err.name === 'AbortError') return
        if (!cancelled) setState(loadState.error)
      }
    })()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  const statCards = useMemo(() => {
    const base = {
      repos: state === loadState.ok ? user?.repos : null,
      followers: state === loadState.ok ? user?.followers : null,
      following: state === loadState.ok ? user?.following : null,
    }
    return [
      { icon: GitBranch, label: 'REPOSITORIES', value: base.repos, hint: 'public repos' },
      { icon: Users, label: 'FOLLOWERS', value: base.followers, hint: 'github network' },
      { icon: Star, label: 'FOLLOWING', value: base.following, hint: 'dev community' },
    ]
  }, [state, user])

  return (
    <section className="section" id="github">
      <SectionHeading title="GITHUB_ACTIVITY" subtitle="linking_github_api // user_dhamodharan63" />

      <div className="github-top">
        <motion.div
          className="github-profile"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="github-profile__avatar" aria-hidden="true">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt=""
                width={64}
                height={64}
                style={{ borderRadius: 12 }}
                loading="lazy"
              />
            ) : (
              <GithubIcon size={28} />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div className="github-profile__handle">@dhamodharan63</div>
            <div className="github-profile__name">
              {state === loadState.ok ? user?.name || 'DHAMODHARAN' : 'DHAMODHARAN'}
            </div>
            <p className="github-profile__bio">
              {state === loadState.ok && user?.bio
                ? user.bio
                : state === loadState.error
                  ? 'gh:// CONNECTION OFFLINE — LIVE DATA UNAVAILABLE'
                  : 'FETCHING PROFILE DATA...'}
            </p>
            <div className="github-profile__stats">
              {statCards.map((s) => (
                <div className="github-stat" key={s.label}>
                  <span className="github-stat__val">{s.value ?? '--'}</span>
                  <span className="github-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
            <a
              className="btn btn--purple"
              style={{ marginTop: 18 }}
              href="https://github.com/dhamodharan63"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={16} /> View GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          className="github-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="github-card__head">
            <div className="github-card__title">
              <Code2 size={15} /> Most Used Tech
            </div>
            <span className="github-card__live" aria-hidden="true" />
          </div>
          {(state === loadState.loading || state === loadState.error) && (
            <div className="github-card__foot" style={{ marginTop: 0 }}>
              {state === loadState.loading ? 'SCANNING REPOSITORIES...' : 'DATA OFFLINE — FALLBACK MODE'}
            </div>
          )}
          <div className="github-langs">
            {(langs || [
              { lang: 'HTML', pct: 50 },
              { lang: 'CSS', pct: 30 },
              { lang: 'JavaScript', pct: 20 },
            ]).map((l, i) => (
              <div className="github-lang" key={`${l.lang}-${i}`}>
                <div className="github-lang__top">
                  <span className="github-lang__name">{l.lang}</span>
                  <span className="github-lang__pct">{l.pct}%</span>
                </div>
                <div className="github-lang__bar">
                  <motion.div
                    className="github-lang__bar-fill"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: l.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="github-grid">
        {statCards.map((s, i) => (
          <motion.div
            className="github-card"
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="github-card__head">
              <div className="github-card__title">
                <s.icon size={15} /> {s.label}
              </div>
              <span className="github-card__live" />
            </div>
            <div className="github-card__big">
              {s.value ?? (
                <span style={{ color: 'var(--text-faint)', fontSize: '1.2rem' }}>
                  {state === loadState.error ? 'OFFLINE' : 'LOADING'}
                </span>
              )}
            </div>
            <div className="github-card__foot">{s.hint}</div>
          </motion.div>
        ))}

        <motion.div
          className="github-card github-graph"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="github-card__head">
            <div className="github-card__title">
              <GitBranch size={15} /> Contribution Activity
            </div>
            <span className="github-card__live" />
          </div>
          <div
            className="github-graph__cells"
            role="img"
            aria-label="Contribution activity placeholder graph"
          >
            {cellLevels.map((level, i) => (
              <span key={i} className={levelClass[level] ?? 'github-cell'} />
            ))}
          </div>
          <div className="github-graph__legend">
            <span>LESS</span>
            <span className="github-cell" />
            <span className="github-cell github-cell--low" />
            <span className="github-cell github-cell--mid" />
            <span className="github-cell github-cell--high" />
            <span className="github-cell github-cell--very" />
            <span>MORE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}