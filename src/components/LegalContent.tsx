import type { ReactNode } from 'react'

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <section className="relative py-[clamp(56px,8vw,96px)]" style={{ background: 'var(--color-bg)' }}>
      <div
        className="max-w-[820px] mx-auto px-6 md:px-10 space-y-10 text-[0.95rem] leading-relaxed"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {children}
      </div>
    </section>
  )
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-bold text-[1.1rem] tracking-[-0.01em] text-[var(--color-text)] mb-3">{title}</h2>
      {children}
    </div>
  )
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className="text-[var(--color-accent)] hover:underline"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
