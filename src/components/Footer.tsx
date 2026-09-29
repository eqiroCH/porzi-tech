import { Link } from 'react-router'
import { serviceAreas, legalNav } from '../lib/site'
import Logo from './Logo'

const companyLinks = [
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

const linkClass = 'text-[0.875rem] text-white/50 hover:text-white/85 transition-colors duration-200'
const headingClass = 'text-[0.65rem] uppercase tracking-[0.2em] font-black text-white/30 mb-4'

export default function Footer() {
  return (
    <footer style={{ background: '#0B1718', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Porzi Tech – Startseite" className="inline-block mb-5">
              <Logo tone="dark" />
            </Link>
            <p className="text-[0.875rem] text-white/45 leading-relaxed max-w-[34ch]">
              Industrielle Automation und Fahrzeugtechnik aus Pfäffikon SZ. Schweizer Qualität seit 1991.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className={headingClass}>Leistungen</div>
            <ul className="space-y-2">
              {serviceAreas.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className={linkClass}>{s.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className={headingClass}>Unternehmen</div>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className={headingClass}>Kontakt</div>
            <address className="not-italic space-y-2">
              <div className="text-[0.875rem] text-white/60 leading-relaxed">
                Porzi Tech GmbH<br />
                Churerstrasse 160A<br />
                8808 Pfäffikon SZ
              </div>
              <a href="tel:+41555259808" className={`block mt-3 ${linkClass}`}>
                055 525 98 08
              </a>
              <a href="mailto:info@porzi-tech.ch" className={`block ${linkClass}`}>
                info@porzi-tech.ch
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[0.72rem] text-white/28">
            © {new Date().getFullYear()} Porzi Tech GmbH · Pfäffikon SZ · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-4">
            {legalNav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.72rem] text-white/28 hover:text-white/55 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
