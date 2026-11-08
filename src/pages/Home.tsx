import { Link } from 'react-router'
import { useLang } from '../lib/i18n'
import { servicePaths } from '../lib/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { CtaBand, HexPicture, Overline, Steps, TextLink, Arrow } from '../components/ui'

function Hero() {
  const { c } = useLang()
  const h = c.home
  return (
    <section className="on-night relative overflow-hidden bg-night text-on-night">
      <div className="frame grid-12 items-center gap-y-14 pb-[clamp(4rem,3rem+6vw,9rem)] pt-[clamp(3.5rem,2.5rem+5vw,7.5rem)]">
        <div className="col-span-12 lg:col-span-6">
          <div data-reveal>
            <Overline tone="dark">{h.eyebrow}</Overline>
          </div>
          <h1 data-reveal style={{ ['--d' as string]: 1 }} className="text-[clamp(3rem,1.6rem+5.6vw,6.5rem)] text-on-night">
            {h.title}
          </h1>
          <p data-reveal style={{ ['--d' as string]: 2 }} className="mt-8 max-w-[48ch] text-on-night-soft">
            {h.text}
          </p>
          <div data-reveal style={{ ['--d' as string]: 3 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/kontakt" className="btn">{h.primary}</Link>
            <TextLink to="/ueber-uns" tone="dark">{h.secondary}</TextLink>
          </div>
        </div>

        {/* Two hexagons, set as in a honeycomb: the controller, and the wiring behind it */}
        <div className="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[1.37]">
            <HexPicture pic="s71500" eager drift className="!absolute left-0 top-0 w-[55.5%]" />
            <HexPicture pic="klemmen" eager delay={2} className="!absolute left-[44.5%] top-[34.5%] w-[55.5%]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceOverview() {
  const { c } = useLang()
  return (
    <section className="py-[var(--section)]">
      <div className="frame">
        <div className="grid-12 gap-y-6">
          <div className="col-span-12 lg:col-span-7" data-reveal>
            <Overline>{c.ui.allServices}</Overline>
            <h2 className="text-head">{c.home.servicesTitle}</h2>
          </div>
          <p className="col-span-12 max-w-[44ch] text-ink-soft lg:col-span-4 lg:col-start-9 lg:self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            {c.home.servicesText}
          </p>
        </div>

        <ul className="mt-[clamp(3rem,2rem+4vw,6rem)] grid gap-x-[var(--gutter)] gap-y-16 md:grid-cols-3">
          {c.services.map((s, i) => (
            <li key={s.slug} data-reveal style={{ ['--d' as string]: i }} className="flex flex-col">
              <Link to={servicePaths[s.slug]} className="group flex flex-1 flex-col" aria-label={`${s.navLabel}: ${c.ui.more}`}>
                <HexPicture pic={s.picture} className="w-[78%] transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]" delay={i} />
                <span className="mt-8 font-display text-small font-bold tabular-nums text-accent-strong">0{i + 1}</span>
                <h3 className="mt-2 text-lead">{s.navLabel}</h3>
                <p className="mt-4 text-ink-soft">{s.lead}</p>
                <ul className="mt-6 space-y-2 border-t border-ink/15 pt-5 font-display text-small font-medium text-ink">
                  {s.items.map((it) => (
                    <li key={it.title} className="flex items-baseline gap-2.5">
                      <span className="hex-dot text-accent" aria-hidden />
                      {it.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-display font-bold text-accent-strong">
                  <span className="link">{c.ui.more}</span>
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Industries() {
  const { c } = useLang()
  const withIndustries = c.services.filter((s) => s.industries.length > 0)
  return (
    <section className="bg-paper-2 py-[var(--section)]">
      <div className="frame grid-12 gap-y-12">
        <div className="col-span-12 lg:col-span-4" data-reveal>
          <Overline>{c.home.industriesTitle}</Overline>
          <p className="max-w-[30ch] text-lead leading-[1.3] font-display font-bold tracking-[-0.02em]">{c.home.industriesText}</p>
        </div>
        {withIndustries.map((s, i) => (
          <div key={s.slug} className="col-span-12 sm:col-span-6 lg:col-span-4" data-reveal style={{ ['--d' as string]: i + 1 }}>
            <h3 className="border-b-2 border-ink pb-4 text-lead">
              <Link to={servicePaths[s.slug]} className="link">{s.navLabel}</Link>
            </h3>
            <ul className="divide-y divide-ink/15">
              {s.industries.map((ind) => (
                <li key={ind} className="flex items-baseline gap-3 py-4">
                  <span className="hex-dot text-accent" aria-hidden />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function History() {
  const { c } = useLang()
  const h = c.home
  return (
    <section className="overflow-hidden pt-[var(--section)]">
      <div className="frame grid-12 items-center gap-y-12">
        <div className="col-span-12 md:col-span-5" aria-hidden>
          <p data-reveal className="font-display text-display font-bold leading-[0.8] tracking-[-0.06em] text-accent">
            {h.historyYear}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7" data-reveal style={{ ['--d' as string]: 1 }}>
          <h2 className="text-head">{h.historyTitle}</h2>
          <p className="mt-6 max-w-[46ch] text-ink-soft">{h.historyText}</p>
          <div className="mt-8">
            <TextLink to="/ueber-uns">{h.historyLink}</TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { c } = useLang()
  usePageMeta(c.home.meta.title, c.home.meta.description)

  return (
    <>
      <Hero />
      <ServiceOverview />
      <Industries />
      <History />
      <Steps />
      <CtaBand />
    </>
  )
}
