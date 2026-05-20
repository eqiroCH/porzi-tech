import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { springSnappy } from '../lib/motion'

const links = [
  { href: '#leistungswelten', label: 'Leistungen' },
  { href: '#automation', label: 'Automation' },
  { href: '#fahrzeugtechnik', label: 'Fahrzeug' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber-uns', label: 'Über uns' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(245,243,240,0.94)' : 'rgba(9,17,30,0)',
          borderBottomColor: scrolled ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.05)' : 'none',
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl"
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="text-[1.1rem] font-black tracking-[-0.02em] flex items-center gap-0.5"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
          >
            <motion.span
              animate={{ color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.95)' }}
              transition={{ duration: 0.35 }}
            >
              PORZI
            </motion.span>
            <motion.span
              animate={{ color: '#C85C08' }}
            >
              TECH
            </motion.span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href} className="relative">
                  <motion.a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="relative block px-3.5 py-2 rounded-lg text-[0.84rem] font-medium z-10"
                    animate={{
                      color: isActive
                        ? scrolled ? 'var(--color-text)' : 'white'
                        : scrolled ? 'var(--color-text-muted)' : 'rgba(255,255,255,0.62)',
                    }}
                    whileHover={{ color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.95)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="pointer-events-none absolute inset-0 z-0 rounded-lg"
                        style={{
                          background: scrolled ? 'var(--color-surface)' : 'rgba(255,255,255,0.1)',
                          border: scrolled ? '1px solid var(--color-border)' : '1px solid rgba(255,255,255,0.12)',
                        }}
                        transition={springSnappy}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.a>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#kontakt"
              onClick={(e) => scrollTo(e, '#kontakt')}
              className="inline-flex items-center gap-2 px-4.5 py-2 bg-[#C85C08] text-white font-bold rounded-lg text-[0.82rem]"
              whileHover={reduce ? {} : { scale: 1.04, boxShadow: '0 8px 28px rgba(200,92,8,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
            >
              Kontakt
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </div>

          {/* Burger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5.5 h-[2px] rounded-full"
              style={{ background: scrolled ? 'var(--color-text)' : 'white' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5.5 h-[2px] rounded-full"
              style={{ background: scrolled ? 'var(--color-text)' : 'white' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5.5 h-[2px] rounded-full"
              style={{ background: scrolled ? 'var(--color-text)' : 'white' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] inset-x-0 z-40 border-b"
            style={{
              background: 'rgba(245,243,240,0.97)',
              borderColor: 'var(--color-border)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <nav className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block px-3 py-3 rounded-lg text-[0.96rem] font-semibold transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => scrollTo(e, '#kontakt')}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-[#C85C08] text-white font-bold rounded-lg text-[0.9rem]"
              >
                Kontakt aufnehmen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
