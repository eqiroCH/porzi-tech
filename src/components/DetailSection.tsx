import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DetailItem {
  title: string
  description: string
}

interface DetailSectionProps {
  id: string
  tag: string
  sectionNumber: string
  title: string
  lead: string
  items: DetailItem[]
  tags?: string[]
  variant?: 'editorial' | 'dark' | 'bold'
}

const EASE = [0.22, 1, 0.36, 1] as const
const CLIP_EASE = [0.16, 1, 0.3, 1] as const

/* ── VARIANT: DARK ─────────────────────────────────────────── */
function DarkVariant({ id, tag, sectionNumber, title, lead, items, tags = [] }: DetailSectionProps) {
  return (
    <section id={id} className="relative overflow-hidden" style={{ background: '#09111E' }}>
      {/* Arch top transition from previous section */}
      <div className="relative h-20 overflow-hidden" style={{ color: '#09111E' }}>
        <svg viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none" className="absolute inset-0 w-full h-full"
          style={{ color: 'var(--color-surface)' }}>
          <path d="M0,0 L1440,0 L1440,80 Q720,0 0,80 Z" />
        </svg>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }}
      />

      {/* Big section number background art */}
      <div className="absolute right-4 top-0 font-black select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(10rem,22vw,26rem)', color: 'rgba(255,255,255,0.022)', letterSpacing: '-0.06em' }}
        aria-hidden
      >
        {sectionNumber}
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 py-[clamp(72px,10vw,120px)]">
        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <span className="block w-4 h-[2px] bg-[#C85C08]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#C85C08]">{tag}</span>
        </motion.div>

        {/* Headline + lead */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 mb-14">
          <div className="overflow-hidden">
            <motion.h2
              className="font-black text-white tracking-[-0.045em] leading-[0.93]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: CLIP_EASE }}
            >
              {title}
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.65 }}
            className="flex flex-col justify-end gap-4">
            <p className="text-[0.95rem] text-white/52 leading-[1.75]">{lead}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-[1.6rem] font-black leading-none select-none"
                style={{ color: 'rgba(200,92,8,0.4)', letterSpacing: '-0.04em' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <strong className="block font-bold text-[0.95rem] text-white/88 leading-snug">{item.title}</strong>
              <span className="text-[0.84rem] text-white/48 leading-relaxed">{item.description}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* S-wave bottom transition into next section */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '64px' }}>
          <path d="M0,0 C360,64 1080,0 1440,64 L1440,64 L0,64 Z" fill="var(--color-bg)"/>
        </svg>
      </div>
    </section>
  )
}

/* ── VARIANT: BOLD ─────────────────────────────────────────── */
function BoldVariant({ id, tag, sectionNumber, title, lead, items, tags = [] }: DetailSectionProps) {
  return (
    <section id={id} className="relative py-[clamp(72px,10vw,120px)] overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      {/* Giant watermark number — bleed off screen left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(14rem, 32vw, 36rem)', color: 'rgba(200,92,8,0.055)', letterSpacing: '-0.06em' }}
        aria-hidden>
        {sectionNumber}
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">{tag}</span>
        </motion.div>

        {/* Huge headline */}
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="font-black text-[var(--color-text)] tracking-[-0.05em] leading-[0.92]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7.5rem)' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: CLIP_EASE }}>
            {title}
          </motion.h2>
        </div>

        {/* Lead + tags */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.65 }}
          className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12 pb-10 border-b"
          style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-[1rem] text-[var(--color-text-muted)] max-w-[52ch] leading-[1.75] flex-1">{lead}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 shrink-0">
              {tags.map((t) => (
                <span key={t} className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'var(--color-surface)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* 2×2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: EASE }}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: 'white', border: '1px solid var(--color-border)' }}>
              <div className="text-[2.2rem] font-black leading-none select-none"
                style={{ color: 'rgba(200,92,8,0.12)', letterSpacing: '-0.04em' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="h-px" style={{ background: 'var(--color-border)' }} />
              <strong className="block font-bold text-[1rem] text-[var(--color-text)] leading-snug">{item.title}</strong>
              <span className="text-[0.875rem] text-[var(--color-text-muted)] leading-relaxed">{item.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── VARIANT: EDITORIAL (split panel + accordion) ──────────── */
function EditorialVariant({ id, tag, sectionNumber, title, lead, items, tags = [] }: DetailSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id={id} className="relative overflow-hidden"
      style={{ background: 'var(--color-surface)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

          {/* LEFT — chapter card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="py-[clamp(56px,8vw,96px)] pr-0 lg:pr-10 lg:border-r flex flex-col justify-between"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
                <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">{tag}</span>
              </div>
              <div className="font-black leading-none select-none mb-6"
                style={{ fontSize: 'clamp(5rem,10vw,10rem)', color: 'rgba(200,92,8,0.12)', letterSpacing: '-0.06em' }}
                aria-hidden>{sectionNumber}</div>
              <div className="overflow-hidden mb-5">
                <motion.h2
                  className="font-black text-[var(--color-text)] tracking-[-0.045em] leading-[0.93]"
                  style={{ fontSize: 'clamp(1.9rem,3.5vw,3.2rem)' }}
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: CLIP_EASE, delay: 0.1 }}>
                  {title}
                </motion.h2>
              </div>
              <p className="text-[0.875rem] text-[var(--color-text-muted)] leading-[1.75] mb-6">{lead}</p>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[0.62rem] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'white', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-8 text-[0.62rem] uppercase tracking-[0.2em] font-black opacity-30"
              style={{ color: 'var(--color-text-muted)' }}>
              {String(items.length).padStart(2, '0')} Leistungspunkte
            </div>
          </motion.div>

          {/* RIGHT — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="py-[clamp(56px,8vw,96px)] pl-0 lg:pl-10 flex flex-col"
          >
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="border-b"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 py-5 text-left group"
                  >
                    <span
                      className="text-[0.95rem] font-black shrink-0 leading-none"
                      style={{ color: isOpen ? 'var(--color-accent)' : 'rgba(200,92,8,0.28)', letterSpacing: '-0.02em', minWidth: '2.2rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="flex-1 font-bold text-[1rem] leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text)' }}
                    >
                      {item.title}
                    </span>
                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="shrink-0"
                      style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text-muted)', opacity: isOpen ? 1 : 0.5 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </button>

                  {/* Accordion body */}
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
                        <p
                          className="text-[0.875rem] leading-relaxed pb-5 pl-[3.2rem]"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Main export ───────────────────────────────────────────── */
export default function DetailSection(props: DetailSectionProps) {
  const { variant = 'editorial' } = props
  if (variant === 'dark')     return <DarkVariant {...props} />
  if (variant === 'bold')     return <BoldVariant {...props} />
  return <EditorialVariant {...props} />
}
