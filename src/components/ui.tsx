import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { pictures, contact, type PictureKey } from '../lib/site'
import { useLang } from '../lib/i18n'
import { useOpenStatus } from '../hooks/useOpenStatus'

/** A photograph inside the Porzi Tech hexagon. */
export function HexPicture({
  pic,
  className = '',
  eager = false,
  drift = false,
  delay = 0,
}: {
  pic: PictureKey
  className?: string
  eager?: boolean
  drift?: boolean
  delay?: number
}) {
  const { c } = useLang()
  const p = pictures[pic]
  return (
    <div className={`hex ${className}`}>
      {/* The shutter sits inside, so its clip-path does not replace the hexagon's */}
      <div data-shutter className="h-full w-full" style={{ ['--d' as string]: delay }}>
        <img
          src={p.src}
          width={p.width}
          height={p.height}
          alt={c.alts[pic]}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={drift ? 'drift' : undefined}
          style={{ objectPosition: p.focus }}
        />
      </div>
    </div>
  )
}

/** Small label above a heading: a hexagon dot and a word. */
export function Overline({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p
      className={`mb-5 flex items-center gap-2.5 font-display text-small font-bold uppercase tracking-[0.16em] ${
        tone === 'dark' ? 'text-accent-pale' : 'text-accent-strong'
      }`}
    >
      <span className="hex-dot" aria-hidden />
      {children}
    </p>
  )
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden className={className}>
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  )
}

/** Header for inner pages: dark ground, title left, optional picture in a hexagon right. */
export function PageHeader({
  overline,
  title,
  lead,
  pic,
}: {
  overline: string
  title: string
  lead?: string
  pic?: PictureKey
}) {
  return (
    <section className="on-night relative overflow-hidden bg-night text-on-night">
      <div className="frame grid-12 items-center gap-y-12 py-[clamp(4rem,3rem+5vw,8rem)]">
        <div className={pic ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-9'}>
          <div data-reveal>
            <Overline tone="dark">{overline}</Overline>
          </div>
          <h1 data-reveal style={{ ['--d' as string]: 1 }} className="text-head text-on-night">
            {title}
          </h1>
          {lead && (
            <p data-reveal style={{ ['--d' as string]: 2 }} className="mt-7 max-w-[56ch] text-lead leading-[1.35] text-on-night-soft">
              {lead}
            </p>
          )}
        </div>
        {pic && (
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-8">
            <HexPicture pic={pic} eager drift />
          </div>
        )}
      </div>
    </section>
  )
}

/** The four steps from enquiry to handover. */
export function Steps() {
  const { c } = useLang()
  return (
    <section className="py-[var(--section)]">
      <div className="frame">
        <div data-reveal>
          <Overline>{c.steps.title}</Overline>
        </div>
        <ol className="mt-4 grid gap-x-[var(--gutter)] gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {c.steps.items.map((s, i) => (
            <li key={s.title} data-reveal style={{ ['--d' as string]: i }} className="border-t-2 border-ink pt-6">
              <span className="font-display text-small font-bold tabular-nums text-accent-strong">0{i + 1}</span>
              <h3 className="mt-3 text-lead">{s.title}</h3>
              <p className="mt-4 max-w-[34ch] text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Phone and email as two big targets, with the live office status. */
export function ContactActions({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { c } = useLang()
  const status = useOpenStatus()
  const dark = tone === 'dark'
  const cell = `group flex min-h-[7.5rem] flex-col justify-between gap-6 p-6 md:p-8 transition-colors duration-200`
  return (
    <div>
      <div className="grid gap-[3px] sm:grid-cols-2">
        <a href={contact.phoneHref} className={`${cell} bg-accent text-white hover:bg-accent-strong`}>
          <span className="flex items-center justify-between font-display text-small font-bold uppercase tracking-[0.14em] text-white/80">
            {c.ui.call}
            <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
          <span className="font-display text-lead font-bold tracking-[-0.02em]">{contact.phone}</span>
        </a>
        <a
          href={contact.emailHref}
          className={`${cell} ${dark ? 'bg-night-2 text-on-night hover:bg-tint-1' : 'bg-paper-2 text-ink hover:bg-tint-5'}`}
        >
          <span
            className={`flex items-center justify-between font-display text-small font-bold uppercase tracking-[0.14em] ${
              dark ? 'text-on-night-soft' : 'text-ink-soft'
            }`}
          >
            {c.ui.writeEmail}
            <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
          <span className="break-words font-display text-lead font-bold tracking-[-0.02em]">{contact.email}</span>
        </a>
      </div>
      <p className={`mt-5 flex items-center gap-2.5 font-display text-small font-medium ${dark ? 'text-on-night-soft' : 'text-ink-soft'}`} aria-live="polite">
        <span className={`hex-dot ${status.open ? 'text-[#3FB27F]' : dark ? 'text-on-night-soft/60' : 'text-ink-soft/60'}`} aria-hidden />
        {status.text}
      </p>
    </div>
  )
}

/** Closing band on most pages. */
export function CtaBand() {
  const { c } = useLang()
  return (
    <section className="on-night bg-night py-[var(--section)] text-on-night">
      <div className="frame grid-12 gap-y-10">
        <div className="col-span-12 xl:col-span-5" data-reveal>
          <h2 className="text-head text-on-night">{c.cta.title}</h2>
          <p className="mt-6 max-w-[40ch] text-on-night-soft">{c.cta.text}</p>
        </div>
        <div className="col-span-12 xl:col-span-7 xl:self-end" data-reveal style={{ ['--d' as string]: 1 }}>
          <ContactActions tone="dark" />
        </div>
      </div>
    </section>
  )
}

export function TextLink({ to, children, tone = 'light' }: { to: string; children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-display font-bold ${tone === 'dark' ? 'text-accent-pale' : 'text-accent-strong'}`}
    >
      <span className="link">{children}</span>
      <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}
