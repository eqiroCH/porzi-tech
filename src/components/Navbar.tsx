import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useLang } from '../lib/i18n'
import { servicePaths } from '../lib/site'
import type { Lang } from '../lib/content'
import Logo from './Logo'

function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, c } = useLang()
  const opts: Lang[] = ['de', 'en']
  return (
    <div role="group" aria-label={c.ui.language} className={`flex items-center font-display text-small font-bold ${className}`}>
      {opts.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden className="px-1 text-ink-soft/50">/</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            lang={l}
            className={`min-h-[2.75rem] min-w-[2rem] uppercase tracking-[0.08em] transition-colors ${
              lang === l ? 'text-accent-strong' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  // The menu belongs to the page it was opened on, so it closes by itself on navigation
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const setOpen = (v: boolean) => setOpenOn(v ? pathname : null)
  const { c } = useLang()

  const links = [
    ...c.services.map((s) => ({ to: servicePaths[s.slug], label: s.navLabel })),
    { to: '/ueber-uns', label: c.nav.about },
  ]

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenOn(null)
        document.getElementById('menu-button')?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `link font-display font-medium ${isActive ? 'text-accent-strong decoration-current' : 'text-ink hover:text-accent-strong'}`

  return (
    <header className="relative z-30 border-b border-ink/10 bg-paper">
      <nav aria-label={c.ui.mainNav} className="frame flex h-[76px] items-center justify-between gap-6 md:h-[88px]">
        <Link to="/" aria-label={c.ui.home} className="shrink-0">
          <Logo layout="inline" className="h-[32px] w-auto md:h-[40px]" />
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
          <li>
            <Link to="/kontakt" className="btn !min-h-[2.75rem] !px-6">{c.nav.contact}</Link>
          </li>
          <li>
            <LangSwitch />
          </li>
        </ul>

        <div className="flex items-center gap-4 xl:hidden">
          <LangSwitch />
          <button
            id="menu-button"
            type="button"
            className="link min-h-[2.75rem] font-display font-bold text-ink"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(!open)}
          >
            {open ? c.ui.close : c.ui.menu}
          </button>
        </div>
      </nav>

      <div id="menu" hidden={!open} className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper pb-8 shadow-[0_24px_40px_-24px_rgba(15,29,30,0.35)] xl:hidden">
        <ul className="frame flex flex-col pt-2">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `block py-3 font-display text-lead font-bold tracking-[-0.02em] ${isActive ? 'text-accent-strong' : 'text-ink'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-5">
            <Link to="/kontakt" className="btn w-full">{c.nav.contact}</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
