import { useLang } from '../lib/i18n'
import { usePageMeta } from '../hooks/usePageMeta'
import { CtaBand, Overline, PageHeader } from '../components/ui'

/**
 * Portrait of Fabio Porzi. The photo is still to come ("FP (Foto)" in the brief):
 * until then the hexagon shows his initials. To add it, put the file in /public/media
 * and set PORTRAIT to its path.
 */
const PORTRAIT: string | null = null

function Portrait() {
  const { c } = useLang()
  if (PORTRAIT) {
    return (
      <div className="hex">
        <div data-shutter className="h-full w-full">
          <img src={PORTRAIT} alt={c.about.name} loading="lazy" decoding="async" style={{ objectPosition: '50% 25%' }} />
        </div>
      </div>
    )
  }
  return (
    <div className="hex grid place-items-center bg-accent" role="img" aria-label={`${c.about.name}, ${c.about.photoPending}`}>
      <span className="font-display text-[clamp(4rem,2rem+8vw,8rem)] font-bold tracking-[-0.04em] text-white/90" aria-hidden>
        FP
      </span>
    </div>
  )
}

export default function UeberUns() {
  const { c } = useLang()
  const a = c.about
  usePageMeta(a.meta.title, a.meta.description)

  return (
    <>
      <PageHeader overline={a.overline} title={a.title} lead={a.lead} />

      {/* Fabio Porzi */}
      <section className="py-[var(--section)]">
        <div className="frame grid-12 items-start gap-y-12">
          <figure className="col-span-12 sm:col-span-7 lg:col-span-4" data-reveal>
            <Portrait />
            <figcaption className="mt-6">
              <span className="block font-display text-lead font-bold tracking-[-0.02em]">{a.name}</span>
              <span className="mt-1 block text-ink-soft">{a.role}</span>
            </figcaption>
          </figure>
          <div className="col-span-12 space-y-6 lg:col-span-6 lg:col-start-6 lg:pt-4">
            {a.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ ['--d' as string]: i + 1 }}
                className={i === 0 ? 'font-display text-lead font-medium leading-[1.35] tracking-[-0.015em]' : 'max-w-[58ch] text-ink-soft'}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper-2 py-[var(--section)]">
        <div className="frame">
          <div data-reveal>
            <Overline>{a.timelineTitle}</Overline>
          </div>
          <ol className="mt-6">
            {a.timeline.map((t, i) => (
              <li
                key={i}
                data-reveal
                className="grid-12 gap-y-3 border-t border-ink/20 py-8 first:border-t-2 first:border-ink md:py-10"
              >
                <span className="col-span-12 font-display text-[clamp(2.25rem,1.6rem+2.6vw,4rem)] font-bold leading-none tracking-[-0.04em] text-accent tabular-nums md:col-span-3">
                  {t.year}
                </span>
                <h3 className="col-span-12 text-lead md:col-span-4">{t.title}</h3>
                <div className="col-span-12 space-y-2 text-ink-soft md:col-span-5">
                  {t.lines.map((l, j) => (
                    <p key={j}>{l}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
