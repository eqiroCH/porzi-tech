import { motion, useReducedMotion } from 'framer-motion'
import { springSnappy } from '../lib/motion'

const lanes = [
  {
    id: 'industrie',
    label: 'Bereich 01',
    title: 'Industrie & Automation',
    sub: 'Planung · Steuerung · Inbetriebnahme',
    text: 'Maßgeschneiderte SPS-Programmierung, professioneller Steuerungsbau und schneller Anlagenservice — für Produktionsprozesse, die laufen müssen.',
    cta: 'Automation & Steuerungsbau',
    href: '#automation',
    points: ['SPS-Programmierung & Elektroschema', 'Steuerungsschrank-Fertigung', 'Revisionen, Reparaturen & Umbauten', 'Inbetriebnahme vor Ort'],
    dark: true,
  },
  {
    id: 'fahrzeug',
    label: 'Bereich 02',
    title: 'Fahrzeugtechnik',
    sub: 'Diagnose · Reparatur · Service',
    text: 'Präziser Fahrzeugservice mit transparenter Beratung und ehrlichen Kosten — für Privatpersonen, die zuverlässige Arbeit schätzen.',
    cta: 'Fahrzeugtechnik',
    href: '#fahrzeugtechnik',
    points: ['Professionelle OBD-Diagnose', 'Reparaturen aller Art', 'Service-Inspektionen', 'Ehrliche, transparente Beratung'],
    dark: false,
  },
]

export default function CapabilitiesSplit() {
  const reduce = useReducedMotion()
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="leistungswelten" className="relative py-[clamp(72px,10vw,120px)]" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Zwei Leistungswelten
              </span>
            </div>
            <h2
              className="font-black tracking-[-0.045em] text-[var(--color-text)] leading-[0.95]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
            >
              Ein Team.
              <br />
              Zwei Kompetenzfelder.
            </h2>
          </div>
          <p className="text-[0.92rem] text-[var(--color-text-muted)] max-w-[38ch] sm:text-right leading-relaxed">
            Industrielle Automation und Fahrzeugtechnik — präzise ausgeführt, persönlich betreut.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {lanes.map((lane, i) => (
            <motion.article
              key={lane.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl p-8 md:p-10 flex flex-col"
              style={{
                background: lane.dark ? '#0F1C2E' : 'white',
                border: lane.dark ? '1px solid rgba(58,106,159,0.3)' : '1px solid var(--color-border)',
              }}
              whileHover={reduce ? {} : { y: -5, transition: springSnappy }}
            >
              <div className={`text-[0.68rem] font-black uppercase tracking-[0.22em] mb-5 ${lane.dark ? 'text-[#6A9FC8]' : 'text-[var(--color-tech)]'}`}>
                {lane.label}
              </div>

              <h3
                className={`font-black tracking-[-0.04em] leading-[1.0] mb-2 ${lane.dark ? 'text-white' : 'text-[var(--color-text)]'}`}
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)' }}
              >
                {lane.title}
              </h3>

              <p className={`text-[0.78rem] font-semibold tracking-[0.04em] mb-5 ${lane.dark ? 'text-[#C85C08]' : 'text-[var(--color-text-muted)]'}`}>
                {lane.sub}
              </p>

              <p className={`text-[0.93rem] leading-[1.7] mb-7 flex-1 ${lane.dark ? 'text-white/62' : 'text-[var(--color-text-muted)]'}`}>
                {lane.text}
              </p>

              {/* Divider */}
              <div className={`h-px mb-7 ${lane.dark ? 'bg-white/10' : 'bg-[var(--color-border)]'}`} />

              {/* Points */}
              <ul className="space-y-2.5 mb-8">
                {lane.points.map((pt) => (
                  <li key={pt} className={`flex items-center gap-3 text-[0.86rem] ${lane.dark ? 'text-white/80' : 'text-[var(--color-text)]'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill={lane.dark ? 'rgba(200,92,8,0.18)' : 'rgba(200,92,8,0.1)'} />
                      <path d="M4 7l2 2 4-4" stroke="#C85C08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>

              <a
                href={lane.href}
                onClick={(e) => scrollTo(e, lane.href)}
                className={`inline-flex items-center gap-2 text-[0.84rem] font-bold transition-all duration-200 ${
                  lane.dark
                    ? 'text-[#C85C08] hover:text-[#E8872A]'
                    : 'text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]'
                }`}
              >
                Mehr zu {lane.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
