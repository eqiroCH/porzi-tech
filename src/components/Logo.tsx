import { useId } from 'react'

type Tone = 'light' | 'dark'

interface LogoMarkProps {
  tone?: Tone
  className?: string
}

/** Vector recreation of the Porzi Tech hexagon mark. `tone` = background it sits on. */
export function LogoMark({ tone = 'light', className }: LogoMarkProps) {
  const id = useId().replace(/:/g, '')
  const onDark = tone === 'dark'
  const teal = onDark ? '#6FA5A6' : '#4B8385'
  const letters = onDark ? '#9CC6C6' : '#4B8385'
  const lineOuter = onDark ? 'rgba(111,165,166,0.12)' : '#203232'
  const highlight = onDark ? '#E4F1F1' : '#FFFFFF'

  return (
    <svg viewBox="44 0 600 290" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-hex`} gradientUnits="userSpaceOnUse" x1="186" y1="0" x2="501" y2="0">
          <stop offset="0.25" stopColor={teal} />
          <stop offset="0.5" stopColor={highlight} />
          <stop offset="0.75" stopColor={teal} />
        </linearGradient>
        <linearGradient id={`${id}-left`} gradientUnits="userSpaceOnUse" x1="54" y1="0" x2="215" y2="0">
          <stop offset="0" stopColor={lineOuter} />
          <stop offset="1" stopColor={teal} />
        </linearGradient>
        <linearGradient id={`${id}-right`} gradientUnits="userSpaceOnUse" x1="634" y1="0" x2="472" y2="0">
          <stop offset="0" stopColor={lineOuter} />
          <stop offset="1" stopColor={teal} />
        </linearGradient>
      </defs>

      <path d="M263 8 H424 L501 143 L424 278 H263 L186 143 Z" stroke={`url(#${id}-hex)`} strokeWidth="17" strokeLinejoin="miter" />

      <g stroke={`url(#${id}-left)`} strokeWidth="16">
        <path d="M110 100 H215" />
        <path d="M54 143 H190" />
        <path d="M110 188 H215" />
      </g>
      <g stroke={`url(#${id}-right)`} strokeWidth="16">
        <path d="M472 100 H577" />
        <path d="M497 143 H634" />
        <path d="M472 188 H577" />
      </g>

      <g stroke={letters} strokeWidth="14">
        <path d="M276 186 V121 A26 22 0 1 1 302 143 H276" />
        <path d="M341 100 H418 M380 100 V186" />
      </g>
    </svg>
  )
}

interface LogoProps {
  tone?: Tone
  className?: string
}

export default function Logo({ tone = 'light', className = '' }: LogoProps) {
  const onDark = tone === 'dark'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark tone={tone} className="h-[30px] w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className="text-[1.02rem] font-semibold tracking-[0.01em] transition-colors duration-300"
          style={{ color: onDark ? 'rgba(255,255,255,0.94)' : 'var(--color-accent)' }}
        >
          Porzi Tech
        </span>
        <span
          className="mt-[3px] text-[0.56rem] font-semibold uppercase tracking-[0.28em] transition-colors duration-300"
          style={{ color: onDark ? 'rgba(156,198,198,0.7)' : 'var(--color-text-muted)' }}
        >
          GmbH
        </span>
      </span>
    </span>
  )
}
