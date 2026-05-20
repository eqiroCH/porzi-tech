import { motion } from 'framer-motion'

const stats = [
  { value: '35+', label: 'Jahre Erfahrung', note: 'Seit 1991' },
  { value: '100%', label: 'Schweizer Betrieb', note: 'Pfäffikon SZ' },
  { value: '4', label: 'Kernleistungen', note: 'Aus einer Hand' },
  { value: '24/7', label: 'Servicefokus', note: 'Reaktionszeit' },
]

export default function TrustProof() {
  return (
    <section className="relative py-[clamp(72px,10vw,120px)]" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Dark premium card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: '#0A1622',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Top stripe */}
          <div className="h-[3px] bg-[#C85C08]" />

          <div className="p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-4 h-[2px] bg-[#C85C08]" />
                  <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#C85C08]">
                    Vertrauensbeweise
                  </span>
                </div>
                <h2
                  className="font-black tracking-[-0.045em] text-white leading-[0.95]"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
                >
                  Verlässlichkeit,
                  <br />
                  die man spürt.
                </h2>
              </div>
              <p className="text-[0.92rem] text-white/50 max-w-[42ch] leading-relaxed">
                Seit über drei Jahrzehnten bauen Produktionsbetriebe und Privatkunden auf PorziTech — weil saubere Arbeit langfristige Partnerschaften schafft.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl p-5 md:p-6"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="font-black tracking-[-0.04em] text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[0.8rem] font-semibold text-white/70 mb-0.5">{s.label}</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35">{s.note}</div>
                </motion.div>
              ))}
            </div>

            {/* Bottom trust line */}
            <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap gap-6">
                {['SPS & Automation', 'Steuerungsbau', 'Anlagenservice', 'Fahrzeugtechnik'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85C08]" />
                    <span className="text-[0.72rem] uppercase tracking-[0.12em] font-semibold text-white/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.14em] font-black text-white/28">
                Pfäffikon SZ · Schweiz
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
