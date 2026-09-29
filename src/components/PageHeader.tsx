import { motion } from 'framer-motion'
import { Link } from 'react-router'

interface PageHeaderProps {
  overline: string
  title: string
  lead?: string
  waveColor?: string | null
}

export default function PageHeader({ overline, title, lead, waveColor = 'var(--color-bg)' }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0B1718' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          right: '-120px',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(75,131,133,0.16) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 pt-[140px] pb-[clamp(64px,8vw,104px)]">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-2 mb-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em]"
        >
          <Link to="/" className="text-white/40 hover:text-white/80 transition-colors duration-200">
            Start
          </Link>
          <span className="text-white/25">/</span>
          <span className="text-accent-light">{overline}</span>
        </motion.nav>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-black text-white tracking-[-0.05em] leading-[0.95] max-w-[18ch]"
            style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.8rem)' }}
          >
            {title}
          </motion.h1>
        </div>

        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-[1.02rem] text-white/58 max-w-[58ch] leading-[1.7]"
          >
            {lead}
          </motion.p>
        )}
      </div>

      {waveColor && (
        <div className="absolute bottom-0 inset-x-0 pointer-events-none z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
            <path d="M0,56 L0,28 C240,56 480,0 720,28 C960,56 1200,8 1440,28 L1440,56 Z" fill={waveColor} />
          </svg>
        </div>
      )}
    </section>
  )
}
