import { motion, useReducedMotion } from 'framer-motion'
import { springBouncy, springSnappy } from '../lib/motion'

const contactTiles = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2.5 2.5h3l1.5 3.5-1.5 1.5c.9 1.8 2.2 3.1 4 4l1.5-1.5 3.5 1.5v3a.5.5 0 01-.5.5C7 15.5 2.5 11 2 2.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Telefon',
    value: '055 525 98 08',
    href: 'tel:+41555259808',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 7l7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'E-Mail',
    value: 'info@porzi-tech.ch',
    href: 'mailto:info@porzi-tech.ch',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Öffnungszeiten',
    value: 'Mo–Fr 07:30–17:00',
    href: '#kontakt',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2C6.24 2 4 4.24 4 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    label: 'Standort',
    value: 'Pfäffikon SZ',
    href: '#kontakt',
  },
]

export default function CtaBanner() {
  const reduce = useReducedMotion()

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden" style={{ background: '#09111E' }}>
      {/* Arch top transition */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,0 L1440,0 L1440,60 Q720,0 0,60 Z" fill="var(--color-surface)"/>
        </svg>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }}
      />
      {/* Orange glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,92,8,0.14) 0%, transparent 70%)' }}
      />

      <div className="relative z-20 max-w-[1320px] mx-auto px-6 md:px-10 pt-24 pb-[clamp(72px,10vw,120px)]">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="block w-4 h-[2px] bg-[#C85C08]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#C85C08]">
            Jetzt Kontakt aufnehmen
          </span>
          <span className="block w-4 h-[2px] bg-[#C85C08]" />
        </motion.div>

        {/* Main headline — always visible, no clip/y-offset */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-5"
        >
          <h2
            className="font-black text-white tracking-[-0.05em] leading-[0.92]"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 8.5rem)' }}
          >
            Lass uns
          </h2>
          <h2
            className="font-black tracking-[-0.05em] leading-[0.92]"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 8.5rem)', color: '#C85C08' }}
          >
            sprechen.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[0.95rem] text-white/50 max-w-[46ch] mx-auto leading-relaxed mb-10"
        >
          Ob Störungsfall, Umbau oder Neuprojekt — wir beraten präzise und unverbindlich.
        </motion.p>

        {/* Contact tiles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.65 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {contactTiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              onClick={tile.href.startsWith('#') ? (e) => scrollTo(e as React.MouseEvent<HTMLAnchorElement>, tile.href) : undefined}
              className="group flex flex-col gap-3 p-5 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = 'rgba(200,92,8,0.12)'; el.style.borderColor = 'rgba(200,92,8,0.35)' }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.05)'; el.style.borderColor = 'rgba(255,255,255,0.08)' }}
            >
              <div className="text-white/38 group-hover:text-[#C85C08] transition-colors duration-200">
                {tile.icon}
              </div>
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.18em] font-black text-white/25 mb-0.5">{tile.label}</div>
                <div className="text-[0.84rem] font-semibold text-white/72 leading-snug">{tile.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <motion.a
            href="#kontakt"
            onClick={(e) => scrollTo(e, '#kontakt')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C85C08] text-white font-bold rounded-lg text-[0.95rem]"
            whileHover={reduce ? {} : { scale: 1.04, boxShadow: '0 16px 48px rgba(200,92,8,0.42)' }}
            whileTap={{ scale: 0.97 }}
            transition={springBouncy}
          >
            Anfrage starten
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a
            href="tel:+41555259808"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/72 font-semibold rounded-lg text-[0.95rem]"
            whileHover={reduce ? {} : { borderColor: 'rgba(255,255,255,0.32)', color: 'rgba(255,255,255,0.92)' }}
            whileTap={{ scale: 0.98 }}
            transition={springSnappy}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h2.5l1.5 3.5L4.5 7c1 2 2.5 3.5 4.5 4.5l1.5-1.5L14 11.5v2.5C14 14 7 14 0 7S0 0 2 0z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            055 525 98 08
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
