import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { springSnappy } from '../lib/motion'
import { mainNav } from '../lib/site'
import Logo from './Logo'

const MotionLink = motion.create(Link)

export default function Navbar() {
  const [scrolledPastTop, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const isKontakt = pathname === '/kontakt'
  const scrolled = scrolledPastTop || menuOpen

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(244,246,245,0.94)' : 'rgba(11,23,24,0)',
          borderBottomColor: scrolled ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.05)' : 'none',
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl"
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <MotionLink
            to="/"
            onClick={closeMenu}
            aria-label="Porzi Tech – Startseite"
            className="flex items-center"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
          >
            <Logo tone={scrolled ? 'light' : 'dark'} />
          </MotionLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {mainNav.map((link) => {
              const isActive = pathname.startsWith(link.to)
              return (
                <li key={link.to} className="relative">
                  <MotionLink
                    to={link.to}
                    aria-current={isActive ? 'page' : undefined}
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
                  </MotionLink>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MotionLink
              to="/kontakt"
              aria-current={isKontakt ? 'page' : undefined}
              className="inline-flex items-center gap-2 px-4.5 py-2 bg-accent hover:bg-accent-dark transition-colors text-white font-bold rounded-lg text-[0.82rem]"
              whileHover={reduce ? {} : { scale: 1.04, boxShadow: '0 8px 28px rgba(75,131,133,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
            >
              Kontakt
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </MotionLink>
          </div>

          {/* Burger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
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
              background: 'rgba(244,246,245,0.97)',
              borderColor: 'var(--color-border)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <nav className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col gap-1">
              {mainNav.map((link) => {
                const isActive = pathname.startsWith(link.to)
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className="block px-3 py-3 rounded-lg text-[0.96rem] font-semibold transition-colors"
                    style={{
                      color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                      background: isActive ? 'var(--color-surface)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to="/kontakt"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-dark transition-colors text-white font-bold rounded-lg text-[0.9rem]"
              >
                Kontakt aufnehmen
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
