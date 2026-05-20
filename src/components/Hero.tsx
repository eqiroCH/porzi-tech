import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springBouncy, springSnappy } from '../lib/motion'

const kpis = [
  { value: '35+', label: 'Jahre Erfahrung' },
  { value: '1991', label: 'Gegründet' },
  { value: 'CH', label: 'Schweizer Betrieb' },
]

function HeroMark() {
  return (
    <svg
      viewBox="0 0 460 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Industrie-Block */}
      <rect x="24" y="28" width="168" height="130" rx="10" fill="#111D30" stroke="#3A6A9F" strokeOpacity="0.5" strokeWidth="1.5"/>
      <text x="38" y="56" fontFamily="ui-monospace,monospace" fontSize="8.5" fill="#6A9FC8" letterSpacing="2" fontWeight="700">INDUSTRIE</text>
      <text x="38" y="80" fontFamily="ui-monospace,monospace" fontSize="14" fill="#FFFFFF" fillOpacity="0.88">SPS &amp;</text>
      <text x="38" y="100" fontFamily="ui-monospace,monospace" fontSize="14" fill="#FFFFFF" fillOpacity="0.88">AUTOMATION</text>
      <text x="38" y="120" fontFamily="ui-monospace,monospace" fontSize="10" fill="#FFFFFF" fillOpacity="0.38">Steuerungsbau</text>
      <circle cx="175" cy="44" r="5" fill="#C85C08" fillOpacity="0.9"/>

      {/* Fahrzeug-Block */}
      <rect x="268" y="224" width="168" height="130" rx="10" fill="#111D30" stroke="#C85C08" strokeOpacity="0.55" strokeWidth="1.5"/>
      <text x="282" y="252" fontFamily="ui-monospace,monospace" fontSize="8.5" fill="#C85C08" letterSpacing="2" fontWeight="700">FAHRZEUG</text>
      <text x="282" y="276" fontFamily="ui-monospace,monospace" fontSize="14" fill="#FFFFFF" fillOpacity="0.88">DIAGNOSE &amp;</text>
      <text x="282" y="296" fontFamily="ui-monospace,monospace" fontSize="14" fill="#FFFFFF" fillOpacity="0.88">SERVICE</text>
      <text x="282" y="316" fontFamily="ui-monospace,monospace" fontSize="10" fill="#FFFFFF" fillOpacity="0.38">Personenwagen</text>

      {/* Zentral-Node */}
      <rect x="156" y="134" width="148" height="112" rx="14" fill="#1A2C46" stroke="#C85C08" strokeOpacity="0.65" strokeWidth="2"/>
      <text x="230" y="170" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill="#C8885A" letterSpacing="2.5" fontWeight="700">PORZITECH</text>
      <rect x="176" y="178" width="108" height="1.5" fill="#FFFFFF" fillOpacity="0.1"/>
      <text x="230" y="196" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#FFFFFF" fillOpacity="0.45">Pfäffikon SZ · seit 1991</text>
      <circle cx="230" cy="218" r="5" fill="#4ADE80" fillOpacity="0.85"/>
      <path d="M227 218 L223 214 M233 218 L237 214" stroke="#4ADE80" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Connecting lines */}
      <path d="M192 134 L150 92" stroke="#3A6A9F" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M268 200 L312 252" stroke="#C85C08" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M156 190 L68 190" stroke="#3A6A9F" strokeOpacity="0.4" strokeWidth="1.5"/>
      <path d="M304 190 L392 190" stroke="#C85C08" strokeOpacity="0.4" strokeWidth="1.5"/>

      <circle cx="68" cy="190" r="7" fill="#3A6A9F" fillOpacity="0.8"/>
      <text x="68" y="213" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7" fill="#6A9FC8" fillOpacity="0.75">INPUT</text>
      <circle cx="392" cy="190" r="7" fill="#C85C08" fillOpacity="0.85"/>
      <text x="392" y="213" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7" fill="#C85C08" fillOpacity="0.75">OUTPUT</text>

      {/* Corner markers */}
      <path d="M14 42 L14 14 L42 14" stroke="#C85C08" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M446 42 L446 14 L418 14" stroke="#C85C08" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 338 L14 366 L42 366" stroke="#C85C08" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M446 338 L446 366 L418 366" stroke="#C85C08" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90])
  const smoothY = useSpring(rawY, { stiffness: 70, damping: 22 })

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: '#09111E' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow — top-right orange */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px',
          right: '-120px',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(200,92,8,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Glow — bottom-left blue */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px',
          left: '-80px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(43,92,142,0.14) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 pt-[100px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-10 xl:gap-16 items-center">

          {/* LEFT — Text */}
          <div>
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-5 h-[2px] bg-[#C85C08]" />
              <span className="text-[0.72rem] font-black uppercase tracking-[0.22em] text-white/55">
                Seit 1991 · Pfäffikon SZ
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-black tracking-[-0.05em] text-white leading-[0.93]"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 8rem)' }}
              >
                Technik
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.19 }}
                className="font-black tracking-[-0.05em] text-white leading-[0.93]"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 8rem)' }}
              >
                die
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="font-black tracking-[-0.05em] leading-[0.93]"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 8rem)', color: '#C85C08' }}
              >
                Bestand hat.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.04rem] text-white/60 max-w-[52ch] leading-[1.7] mb-8"
            >
              PorziTech verbindet industrielle Steuerungskompetenz mit präzisem Fahrzeugservice.
              Zwei Leistungswelten — ein Qualitätsversprechen aus Pfäffikon SZ.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.55 }}
            >
              <motion.a
                href="#kontakt"
                onClick={(e) => scrollTo(e, '#kontakt')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C85C08] text-white font-bold rounded-lg text-[0.9rem]"
                whileHover={reduce ? {} : { scale: 1.03, boxShadow: '0 14px 44px rgba(200,92,8,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={springBouncy}
              >
                Projekt besprechen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
              <motion.a
                href="#leistungswelten"
                onClick={(e) => scrollTo(e, '#leistungswelten')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/18 text-white/75 font-semibold rounded-lg text-[0.9rem]"
                whileHover={reduce ? {} : { borderColor: 'rgba(255,255,255,0.38)', color: 'rgba(255,255,255,0.95)' }}
                whileTap={{ scale: 0.98 }}
                transition={springSnappy}
              >
                Leistungen entdecken
              </motion.a>
            </motion.div>

            {/* KPIs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-8 border-t border-white/[0.07]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.7 }}
            >
              {kpis.map((k, i) => (
                <div key={k.label} className="flex flex-col gap-1">
                  <div className="text-[2rem] font-black tracking-[-0.04em] text-white leading-none">
                    {k.value}
                  </div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] font-semibold text-white/40">
                    {k.label}
                  </div>
                  {i < kpis.length - 1 && (
                    <div className="hidden sm:block absolute w-px h-8 bg-white/[0.07]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            className="hidden lg:block"
            style={{ y: smoothY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-4"
              style={{
                background: 'rgba(17,29,48,0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(7,12,22,0.5)',
              }}
            >
              <div className="rounded-xl overflow-hidden">
                <HeroMark />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Wave transition into Marquee */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-20" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,56 L0,28 C240,56 480,0 720,28 C960,56 1200,8 1440,28 L1440,56 Z" fill="var(--color-surface)"/>
        </svg>
      </div>
    </section>
  )
}
