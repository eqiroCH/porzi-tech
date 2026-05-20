import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Anfrage & Analyse',
    desc: 'Kurze Kontaktaufnahme — wir klären Ihr Anliegen rasch und ohne Umwege.',
  },
  {
    num: '02',
    title: 'Konzept & Offerte',
    desc: 'Transparente Offerte mit klarem Leistungsumfang. Keine versteckten Kosten.',
  },
  {
    num: '03',
    title: 'Umsetzung',
    desc: 'Fachgerechte Ausführung mit direkter Kommunikation — termingerecht und sauber.',
  },
  {
    num: '04',
    title: 'Übergabe & Support',
    desc: 'Vollständige Dokumentation und verlässliche Nachbetreuung aus einer Hand.',
  },
]

export default function ProcessFlow() {
  return (
    <section id="ablauf" className="relative py-[clamp(72px,10vw,120px)] overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              So arbeiten wir
            </span>
          </div>
          <h2
            className="font-black tracking-[-0.045em] text-[var(--color-text)] leading-[0.95]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          >
            Klarer Ablauf.
            <br />
            Saubere Umsetzung.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 md:p-7"
              style={{ background: 'white', border: '1px solid var(--color-border)' }}
            >
              {/* Large watermark number */}
              <div
                className="text-[5rem] font-black leading-none mb-2 select-none"
                style={{ color: 'rgba(200,92,8,0.1)', letterSpacing: '-0.05em' }}
              >
                {step.num}
              </div>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: 'var(--color-border)' }} />

              <h3 className="text-[1rem] font-bold mb-2 leading-snug" style={{ color: 'var(--color-text)' }}>
                {step.title}
              </h3>
              <p className="text-[0.875rem] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {step.desc}
              </p>

              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 -right-3 w-6 h-6 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M6 3l2 2-2 2" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
