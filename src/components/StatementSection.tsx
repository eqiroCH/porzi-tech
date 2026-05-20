import { motion } from 'framer-motion'

const CLIP_EASE = [0.16, 1, 0.3, 1] as const
const EASE = [0.22, 1, 0.36, 1] as const

const facts = [
  { value: '35+',  label: 'Jahre Erfahrung',  fs: 'clamp(2.8rem,6vw,7rem)', flex: '1' },
  { value: '1991', label: 'Gegründet',         fs: 'clamp(2.8rem,6vw,7rem)', flex: '1' },
  { value: '2',    label: 'Kompetenzfelder',   fs: 'clamp(2.8rem,6vw,7rem)', flex: '1' },
  { value: 'CH',   label: 'Standort Schweiz',  fs: 'clamp(2.8rem,6vw,7rem)', flex: '1' },
]

export default function StatementSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#09111E' }}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Orange glow */}
      <div className="absolute pointer-events-none"
        style={{ top: '-80px', left: '-100px', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(200,92,8,0.12) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 pt-[clamp(72px,10vw,110px)] pb-[clamp(56px,8vw,90px)]">
        {/* Overline + tagline row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="block w-4 h-[2px] bg-[#C85C08]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#C85C08]">
              Unser Versprechen
            </span>
          </div>
          {/* Tagline — small, elegant */}
          <p className="text-[0.9rem] font-semibold text-white/38 tracking-[-0.01em] italic">
            "Kein Kompromiss. Nur Präzision."
          </p>
        </motion.div>

        {/* Animated orange rule */}
        <motion.div
          className="mb-12"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE }}
          style={{ height: '1px', background: 'rgba(200,92,8,0.4)' }}
        />

        {/* STATS — the main typographic event */}
        <div className="flex flex-wrap gap-y-8">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: CLIP_EASE, delay: i * 0.1 }}
              className="flex flex-col gap-3 py-6 pr-8"
              style={{
                flex: f.flex,
                minWidth: 0,
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <div
                className="font-black text-white leading-none tracking-[-0.05em]"
                style={{ fontSize: f.fs }}
              >
                {f.value}
              </div>
              <div className="text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-white/35">
                {f.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated orange rule */}
        <motion.div
          className="mb-10"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
          style={{ height: '1px', background: 'rgba(200,92,8,0.4)' }}
        />

        {/* Context paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="text-[0.95rem] text-white/44 max-w-[58ch] leading-[1.8]"
        >
          Seit über drei Jahrzehnten steht PorziTech für Technik, die hält —
          saubere Arbeit und ehrliche Beratung für Industriebetriebe und
          Privatkunden in der Zentralschweiz.
        </motion.p>
      </div>

      {/* Wave transition into Services */}
      <div className="relative overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,56 L0,28 C240,56 480,0 720,28 C960,56 1200,8 1440,28 L1440,56 Z"
            fill="var(--color-surface)"/>
        </svg>
      </div>
    </section>
  )
}
