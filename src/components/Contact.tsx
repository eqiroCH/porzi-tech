import { motion, useReducedMotion } from 'framer-motion'
import { springSnappy } from '../lib/motion'

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    content: <>Churerstrasse 160A<br/>8808 Pfäffikon SZ</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Geschäftszeiten',
    content: <>Mo – Fr: 07:30 – 17:00<br/><span className="text-gray-400">Sa – So: Geschlossen</span></>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: 'Handelsregister',
    content: <>CHE-137.297.616<br/><span className="text-gray-400">HR Schwyz</span></>,
  },
]

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="kontakt" className="relative py-[clamp(72px,10vw,120px)] overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }}/>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">Kontakt</span>
        </motion.div>

        <div style={{ overflow: 'hidden' }} className="mb-4">
          <motion.h2
            className="font-black text-[var(--color-text)] tracking-[-0.045em] leading-[0.95]"
            style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)' }}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Sprechen Sie direkt mit uns.
          </motion.h2>
        </div>

        <motion.p
          className="text-[var(--color-text-muted)] text-[0.95rem] mb-12 max-w-[490px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Wir sind Mo - Fr von 07:30 bis 17:00 Uhr erreichbar - per Telefon oder E-Mail.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Phone */}
          <motion.a
            href="tel:+41555259808"
            className="flex items-center gap-5 p-6 rounded-2xl bg-accent text-white hover:bg-accent-dark transition-colors border border-transparent"
            whileHover={reduce ? {} : { y: -3, transition: springSnappy }}
          >
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.19 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <div className="text-[0.68rem] font-black text-white/70 uppercase tracking-widest mb-1">Anrufen</div>
              <div className="text-white font-black text-[1.25rem] tracking-tight leading-none">055 525 98 08</div>
            </div>
            <span className="ml-auto text-white/60 text-xl">→</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@porzi-tech.ch"
            className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:border-accent/30 hover:bg-accent/[0.02] transition-colors"
            whileHover={reduce ? {} : { y: -3, transition: springSnappy }}
          >
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div className="text-[0.68rem] font-black text-[var(--color-text-muted)] uppercase tracking-widest mb-1">E-Mail senden</div>
              <div className="text-accent font-bold text-[1.05rem] tracking-tight leading-none">info@porzi-tech.ch</div>
            </div>
            <span className="ml-auto text-[var(--color-text-muted)] text-xl">→</span>
          </motion.a>
        </motion.div>

        {/* Detail cards + map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-tech)]/30 transition-colors"
                whileHover={reduce ? {} : { y: -3, transition: springSnappy }}
              >
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-text-muted)] mb-4">
                  {item.icon}
                </div>
                <div className="text-[0.65rem] font-black text-[var(--color-text-muted)] uppercase tracking-widest mb-2">{item.label}</div>
                <div className="text-[0.88rem] text-[var(--color-text)]/85 leading-relaxed">{item.content}</div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white"
            style={{ minHeight: 320 }}
            whileHover={reduce ? {} : { borderColor: 'rgba(201,106,15,0.3)', transition: springSnappy }}
          >
            <span aria-hidden className="absolute top-4 left-4 z-10 w-5 h-5 border-l border-t border-accent/30 rounded-tl-sm pointer-events-none"/>
            <span aria-hidden className="absolute top-4 right-4 z-10 w-5 h-5 border-r border-t border-accent/30 rounded-tr-sm pointer-events-none"/>
            <span aria-hidden className="absolute bottom-4 left-4 z-10 w-5 h-5 border-l border-b border-accent/30 rounded-bl-sm pointer-events-none"/>
            <span aria-hidden className="absolute bottom-4 right-4 z-10 w-5 h-5 border-r border-b border-accent/30 rounded-br-sm pointer-events-none"/>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.5!2d8.7835!3d47.2005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab1c1c4c5d0e9%3A0x0!2sChurerstrase+160a%2C+8808+Pf%C3%A4ffikon!5e0!3m2!1sde!2sch!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Porzi Tech GmbH"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
