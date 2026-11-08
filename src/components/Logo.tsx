import { useId } from 'react'
import {
  BARS,
  BAR_STROKE,
  BRAND,
  BRAND_ON_DARK,
  GRADIENT_DARK,
  GRADIENT_LIGHT,
  HEX,
  HEX_STROKE,
  PT,
  WORDMARK,
} from './logoPaths'

type Tone = 'light' | 'dark'

interface LogoProps {
  /** The ground the logo sits on */
  tone?: Tone
  /** inline: mark left, name right (header). stacked: the logo as drawn, name under the mark. mark: no name. */
  layout?: 'inline' | 'stacked' | 'mark'
  className?: string
  title?: string
}

/**
 * The Porzi Tech GmbH logo, drawn from the client's files.
 * On dark grounds the outer ends of the bars fade into the ground instead of turning black.
 */
export default function Logo({ tone = 'light', layout = 'inline', className, title }: LogoProps) {
  const id = useId().replace(/:/g, '')
  const stops = tone === 'dark' ? GRADIENT_DARK : GRADIENT_LIGHT
  const ink = tone === 'dark' ? BRAND_ON_DARK : BRAND

  const mark = (
    <>
      <g fill="none" stroke={`url(#${id})`}>
        <path d={HEX} strokeWidth={HEX_STROKE} strokeMiterlimit={10} />
        <path d={BARS} strokeWidth={BAR_STROKE} />
      </g>
      <path d={PT} fill={ink} />
    </>
  )

  // viewBoxes in the PDF's point space
  const box =
    layout === 'stacked' ? '34 26 172.6 104' : layout === 'mark' ? '49 26 142.6 73' : '49 26 391 73'

  return (
    <svg
      viewBox={box}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="50.88" y1="0" x2="189.72" y2="0">
          {stops.map(([o, c]) => (
            <stop key={o} offset={o} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      {mark}
      {layout === 'stacked' && <path d={WORDMARK} fill={ink} />}
      {layout === 'inline' && (
        // Name to the right of the mark, its cap height about a third of the mark
        <path d={WORDMARK} fill={ink} transform="translate(204 62.52) scale(1.42) translate(-38.03 -118.11)" />
      )}
    </svg>
  )
}
