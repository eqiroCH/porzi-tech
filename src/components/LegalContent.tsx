import type { ReactNode } from 'react'

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <section className="py-[clamp(4rem,3rem+5vw,8rem)]">
      <div className="frame">
        <div className="max-w-[68ch] space-y-12">{children}</div>
      </div>
    </section>
  )
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t-2 border-ink pt-5">
      <h2 className="mb-4 text-[clamp(1.25rem,1.1rem+0.6vw,1.6rem)] leading-[1.15] tracking-[-0.02em]">{title}</h2>
      <div className="space-y-4 text-ink-soft">{children}</div>
    </div>
  )
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a href={href} className="link text-accent-strong" {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}
