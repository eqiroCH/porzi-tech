import { motion, useReducedMotion } from 'framer-motion'
import { springSnappy } from '../lib/motion'

const timeline = [
  { year: '1991', title: 'Gründung Flex-Control', text: 'Start im Steuerungsbau und Software-Erstellung in Pfäffikon SZ', active: false },
  { year: '2000+', title: 'Wachstum & Expertise', text: 'Ausbau der Kompetenzen in Industrieautomation und SPS-Programmierung', active: false },
  { year: '2020', title: 'Porzi Tech GmbH', text: 'Neues Kapitel mit erweitertem Leistungsspektrum und neuem Namen', active: false },
  { year: 'Heute', title: 'Ihr kompetenter Partner', text: 'Automation, Anlagenservice und Fahrzeugtechnik aus einer Hand', active: true },
]

export default function About() {
  const reduce = useReducedMotion()

  return (
    <section id="ueber-uns" className="relative py-[clamp(72px,10vw,120px)] overflow-hidden" style={{ background: 'white' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">Über uns</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left – quote + bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <div aria-hidden className="font-black leading-none mb-4 select-none" style={{ fontSize: '5rem', color: 'rgba(200,92,8,0.15)' }}>"</div>
              <p
                className="font-semibold leading-[1.45] mb-8"
                style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)', color: 'var(--color-text)' }}
              >
                Seit über drei Jahrzehnten leben wir Präzision und Verlässlichkeit — weil unsere Kunden es verdienen.
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(200,92,8,0.08)',
                    border: '1px solid rgba(200,92,8,0.2)',
                  }}
                >
                  <span className="font-black text-lg tracking-tight" style={{ color: 'var(--color-accent)' }}>FP</span>
                </div>
                <div>
                  <div className="font-semibold text-[0.9rem]" style={{ color: 'var(--color-text)' }}>Fabio Porzi</div>
                  <div className="text-[0.78rem]" style={{ color: 'var(--color-text-muted)' }}>Geschäftsführer, Porzi Tech GmbH</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="h-px mb-10"
              style={{ background: 'var(--color-border)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="space-y-5 text-[0.92rem] leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <p>
                Bereits 1991 gründete Fabio Porzi das Unternehmen{' '}
                <strong className="font-semibold" style={{ color: 'var(--color-text)' }}>Flex-Control</strong> in Pfäffikon SZ,
                spezialisiert auf Steuerungsbau und Software-Erstellung. Während fast 30 Jahren baute
                er ein tiefes Fachwissen auf und betreute zahlreiche Industriekunden aus
                verschiedensten Branchen.
              </p>
              <p>
                2020 folgte der nächste Schritt: Die Gründung der{' '}
                <strong className="font-semibold" style={{ color: 'var(--color-text)' }}>Porzi Tech GmbH</strong>. Die bewährten
                Kompetenzen in Automation und Steuerungsbau werden fortgeführt und um zusätzliche
                Dienstleistungsbereiche — Anlagenservice und Fahrzeugtechnik — erweitert.
              </p>
            </motion.div>
          </div>

          {/* Right – timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-2 bottom-0 w-px origin-top"
              style={{ background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border) 60%, transparent)' }}
            />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: item.active ? 'var(--color-accent)' : 'var(--color-border)',
                      background: item.active ? 'var(--color-accent)' : 'white',
                      boxShadow: item.active ? '0 0 0 4px rgba(200,92,8,0.15)' : 'none',
                    }}
                    whileHover={reduce ? {} : { scale: 1.25 }}
                    transition={springSnappy}
                  />
                  {item.active && !reduce && (
                    <motion.div
                      aria-hidden
                      className="absolute -left-[2.4rem] top-[0.75px] w-3.5 h-3.5 rounded-full"
                      style={{ background: 'rgba(200,92,8,0.15)' }}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  <div className="text-[0.68rem] font-black uppercase tracking-[0.14em] mb-1.5" style={{ color: 'var(--color-accent)' }}>
                    {item.year}
                  </div>
                  <div className="font-semibold mb-1.5 text-[0.95rem]" style={{ color: 'var(--color-text)' }}>
                    {item.title}
                  </div>
                  <div className="text-[0.85rem] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
