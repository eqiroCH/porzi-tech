import { Link } from 'react-router'
import { useLang } from '../lib/i18n'
import { servicePaths, type ServiceSlug } from '../lib/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { Arrow, CtaBand, HexPicture, Overline, PageHeader, Steps } from '../components/ui'

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const { c, lang } = useLang()
  const s = c.services.find((x) => x.slug === slug)!
  const others = c.services.filter((x) => x.slug !== slug)
  usePageMeta(s.meta.title, s.meta.description)

  return (
    <>
      <PageHeader overline={s.navLabel} title={s.title} lead={s.intro} pic={s.picture} />

      {/* What we do */}
      <section className="py-[var(--section)]">
        <div className="frame grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4" data-reveal>
            <Overline>{c.servicePage.scope}</Overline>
            <p className="max-w-[28ch] font-display text-lead font-bold leading-[1.25] tracking-[-0.02em]">{s.lead}</p>
          </div>
          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {s.items.map((it, i) => (
              <li
                key={i}
                data-reveal
                style={{ ['--d' as string]: i }}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-ink/15 py-8 first:border-t-2 first:border-ink sm:grid-cols-[4rem_1fr_1.3fr] sm:gap-x-8"
              >
                <span className="font-display text-small font-bold tabular-nums text-accent-strong">0{i + 1}</span>
                <h3 className="text-[clamp(1.25rem,1.1rem+0.6vw,1.6rem)] leading-[1.15] tracking-[-0.02em]">
                  {it.title}
                  {it.aka && <span lang={lang === 'de' ? 'en' : 'de'} className="mt-2 block font-text text-small font-normal italic tracking-normal text-ink-soft">{it.aka}</span>}
                </h3>
                <p className="col-start-2 mt-3 text-ink-soft sm:col-start-3 sm:mt-0">{it.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries, where the brief names them */}
      {s.industries.length > 0 && (
        <section className="bg-paper-2 py-[clamp(4rem,3rem+5vw,8rem)]">
          <div className="frame grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-4" data-reveal>
              <Overline>{c.servicePage.industries}</Overline>
            </div>
            <ul className="col-span-12 grid gap-x-[var(--gutter)] sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {s.industries.map((ind, i) => (
                <li key={i} data-reveal style={{ ['--d' as string]: i }} className="flex items-baseline gap-3 border-t border-ink/20 py-5 font-display font-medium">
                  <span className="hex-dot text-accent" aria-hidden />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Steps />

      {/* The other two fields */}
      <section className="border-t border-ink/10 py-[clamp(4rem,3rem+5vw,8rem)]">
        <div className="frame">
          <div data-reveal>
            <Overline>{c.ui.otherServices}</Overline>
          </div>
          <ul className="grid gap-[var(--gutter)] md:grid-cols-2">
            {others.map((o, i) => (
              <li key={o.slug} data-reveal style={{ ['--d' as string]: i }}>
                <Link
                  to={servicePaths[o.slug]}
                  className="group grid h-full grid-cols-[minmax(0,1fr)_7rem] items-center gap-6 bg-paper-2 p-6 transition-colors duration-200 hover:bg-tint-5 sm:grid-cols-[minmax(0,1fr)_9rem] md:p-8"
                >
                  <span>
                    <span className="block text-lead font-display font-bold tracking-[-0.02em]">{o.navLabel}</span>
                    <span className="mt-3 block text-small leading-relaxed text-ink-soft">{o.lead}</span>
                    <span className="mt-5 inline-flex items-center gap-2 font-display font-bold text-accent-strong">
                      <span className="link">{c.ui.more}</span>
                      <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </span>
                  <HexPicture pic={o.picture} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
