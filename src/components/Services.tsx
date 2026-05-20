import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const services = [
  {
    num: '01',
    title: 'SPS-Programmierung & Steuerungsbau',
    desc: 'Massgeschneiderte Steuerungsloesungen fuer Produktionsanlagen — von der Planung ueber die Programmierung bis zur Inbetriebnahme.',
    tags: ['SPS-Programmierung', 'Elektroschema', 'Steuerungsbau', 'Inbetriebnahme'],
    features: [
      { label: 'Elektroschema-Erstellung', note: 'Professionelle Dokumentation nach aktuellen EN-Normen.' },
      { label: 'SPS-Programmierung', note: 'Zuverlaessige Software auf Siemens S7/S5-Plattformen.' },
      { label: 'Steuerungsschrank-Fertigung', note: 'Normgerecht verdrahtet, vollstaendig dokumentiert.' },
      { label: 'Inbetriebnahme vor Ort', note: 'Inbetriebnahme, Optimierung & Schulung direkt im Betrieb.' },
    ],
  },
  {
    num: '02',
    title: 'Anlagenservice & Revisionen',
    desc: 'Schneller Service, Wartungsvertraege und fachgerechte Umbauten — damit Ihre Anlage laeuft.',
    tags: ['Wartung', 'Reparatur', 'Umbauten', 'Vor-Ort-Service'],
    features: [
      { label: 'Revisionen', note: 'Regelmaessige Ueberpruefung fuer hohe Verfuegbarkeit.' },
      { label: 'Stoerungsreparaturen', note: 'Schnelle Fehlerbehebung, kurze Reaktionszeiten.' },
      { label: 'Umbauten & Modifikationen', note: 'Anpassung an neue Anforderungen und Prozesse.' },
      { label: 'Montagen', note: 'Fachgerechte Installation von Anlagenkomponenten.' },
    ],
  },
  {
    num: '03',
    title: 'Fahrzeugdiagnose & Autoservice',
    desc: 'Professionelle OBD-Diagnose, Reparaturen und Inspektionen — transparent, schnell und ehrlich.',
    tags: ['OBD-Diagnose', 'Reparatur', 'Inspektion', 'Fahrzeugelektrik'],
    features: [
      { label: 'OBD-II Diagnose', note: 'Alle gaengigen Marken, praezise Fehleranalyse.' },
      { label: 'Reparaturen', note: 'Fahrzeugelektrik, Antrieb und allgemeine Technik.' },
      { label: 'Service-Inspektionen', note: 'Wartung fuer Sicherheit und Langlebigkeit.' },
      { label: 'Ehrliche Beratung', note: 'Transparent, direkt, ohne versteckte Kosten.' },
    ],
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="dienstleistungen" className="relative py-[clamp(72px,10vw,120px)] overflow-hidden"
      style={{ background: 'var(--color-surface)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">Leistungen</span>
            </div>
            <h2 className="font-black tracking-[-0.045em] text-[var(--color-text)] leading-[0.95]"
              style={{ fontSize: 'clamp(2.2rem,5vw,4.2rem)' }}>
              Services mit
              <br />messbarem Nutzen
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-[0.92rem] max-w-[40ch] md:text-right leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}>
            Klicken Sie auf einen Bereich um Details zu sehen.
          </motion.p>
        </div>

        {/* Accordion list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--color-border)', background: 'white' }}
        >
          {services.map((s, i) => {
            const isOpen = openIndex === i
            return (
              <div key={s.num} style={{ borderBottom: i < services.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                {/* Row header — clickable */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 text-left group transition-colors duration-200"
                  style={{ background: isOpen ? 'rgba(200,92,8,0.03)' : 'transparent' }}
                >
                  {/* Number */}
                  <div className="text-[2rem] font-black shrink-0 leading-none select-none"
                    style={{ color: isOpen ? 'rgba(200,92,8,0.35)' : 'rgba(200,92,8,0.18)', letterSpacing: '-0.04em', minWidth: '3.2rem' }}>
                    {s.num}
                  </div>

                  {/* Title + tags */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[1.08rem] md:text-[1.15rem] leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text)' }}>
                      {s.title}
                    </h3>
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--color-surface)', color: 'var(--color-text-muted)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: isOpen ? 'var(--color-accent)' : 'var(--color-surface)',
                      color: isOpen ? 'white' : 'var(--color-text-muted)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        {/* Description */}
                        <p className="text-[0.9rem] leading-relaxed mb-5 max-w-[60ch]"
                          style={{ color: 'var(--color-text-muted)' }}>
                          {s.desc}
                        </p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                          style={{ background: 'var(--color-border)' }}>
                          {s.features.map((f, fi) => (
                            <motion.div
                              key={fi}
                              initial={reduce ? {} : { opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: fi * 0.06, duration: 0.4 }}
                              className="flex gap-3 p-4"
                              style={{ background: 'var(--color-surface)' }}
                            >
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                                <circle cx="7" cy="7" r="6" fill="rgba(200,92,8,0.1)"/>
                                <path d="M4 7l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <div>
                                <div className="text-[0.84rem] font-bold text-[var(--color-text)] mb-0.5">{f.label}</div>
                                <div className="text-[0.78rem] text-[var(--color-text-muted)] leading-relaxed">{f.note}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
