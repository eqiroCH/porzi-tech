import { motion } from 'framer-motion'

const voices = [
  {
    quote: 'Die Zusammenarbeit war strukturiert, schnell und technisch auf den Punkt. Genau das, was wir im Betrieb brauchen.',
    source: 'Produktionsbetrieb, Zentralschweiz',
    category: 'Industrie & Automation',
  },
  {
    quote: 'Bei Störungen zählt Reaktionszeit. PorziTech arbeitet lösungsorientiert und transparent — das schätzen wir sehr.',
    source: 'Lebensmitteltechnik, Region SZ',
    category: 'Anlagenservice',
  },
  {
    quote: 'Auch in der Fahrzeugtechnik fühlen wir uns ehrlich beraten und sauber betreut. Kein Aufpreis, keine Überraschungen.',
    source: 'Privatkunde, Pfäffikon SZ',
    category: 'Fahrzeugtechnik',
  },
]

export default function ReferenceVoices() {
  return (
    <section className="relative py-[clamp(72px,10vw,120px)] overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-4 h-[2px] bg-[var(--color-tech)]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-tech)]">
              Stimmen aus der Praxis
            </span>
          </div>
          <h2
            className="font-black tracking-[-0.045em] text-[var(--color-text)] leading-[0.95]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          >
            Vertrauen entsteht
            <br />
            durch Ergebnisse.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {voices.map((voice, i) => (
            <motion.article
              key={voice.source}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-7 flex flex-col"
              style={{ background: 'white', border: '1px solid var(--color-border)' }}
            >
              {/* Quote mark */}
              <div
                className="text-[3rem] font-black leading-none mb-3 select-none"
                style={{ color: 'rgba(200,92,8,0.18)' }}
              >
                "
              </div>

              <p className="text-[0.93rem] text-[var(--color-text)] leading-[1.7] mb-6 flex-1">
                {voice.quote}
              </p>

              <div className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] font-black text-[var(--color-accent)] mb-0.5">
                  {voice.category}
                </div>
                <div className="text-[0.78rem] text-[var(--color-text-muted)] font-semibold">
                  {voice.source}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
