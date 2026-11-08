import { Link } from 'react-router'
import { useLang } from '../lib/i18n'
import { agbUrl, contact, servicePaths } from '../lib/site'
import Logo from './Logo'

const heading = 'mb-4 font-display text-small font-bold uppercase tracking-[0.16em] text-on-night-soft/70'
const item = 'link text-on-night-soft hover:text-on-night'

export default function Footer() {
  const { c } = useLang()
  const f = c.footer
  const year = new Date().getFullYear()

  return (
    <footer className="on-night border-t border-white/10 bg-night text-on-night">
      <div className="frame py-[clamp(3.5rem,2.5rem+4vw,6rem)]">
        <div className="grid gap-x-[var(--gutter)] gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label={c.ui.home} className="inline-block">
              <Logo tone="dark" layout="stacked" className="h-[88px] w-auto" />
            </Link>
            <p className="mt-6 max-w-[32ch] text-small leading-relaxed text-on-night-soft">{f.tagline}</p>
          </div>

          <nav aria-label={f.services}>
            <p className={heading}>{f.services}</p>
            <ul className="space-y-2.5 font-display">
              {c.services.map((s) => (
                <li key={s.slug}>
                  <Link to={servicePaths[s.slug]} className={item}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.company}>
            <p className={heading}>{f.company}</p>
            <ul className="space-y-2.5 font-display">
              <li><Link to="/ueber-uns" className={item}>{c.nav.about}</Link></li>
              <li><Link to="/kontakt" className={item}>{c.nav.contact}</Link></li>
            </ul>
          </nav>

          <div>
            <p className={heading}>{f.contact}</p>
            <address className="not-italic leading-relaxed text-on-night-soft">
              {contact.company}<br />
              {contact.street}<br />
              {contact.city}
            </address>
            <p className="mt-4 flex flex-col gap-1.5 font-display">
              <a href={contact.phoneHref} className={item}>{contact.phone}</a>
              <a href={contact.emailHref} className={item}>{contact.email}</a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-small text-on-night-soft/80 md:flex-row md:items-center md:justify-between">
          <p>© {year} {contact.company} · Pfäffikon SZ · {f.rights}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display">
            {agbUrl && (
              <li><a href={agbUrl} className={item} target="_blank" rel="noopener">{f.agb}</a></li>
            )}
            <li><Link to="/impressum" className={item}>{c.legalNav.impressum}</Link></li>
            <li><Link to="/datenschutz" className={item}>{c.legalNav.datenschutz}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
