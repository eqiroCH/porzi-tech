import { useLang } from '../lib/i18n'
import { contact } from '../lib/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { Arrow, ContactActions, Overline } from '../components/ui'

/** Google Maps, shown directly. The link below opens the place in Google Maps. */
function MapPanel() {
  const { c } = useLang()
  const k = c.contactPage
  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2 sm:aspect-[16/9] lg:aspect-auto lg:h-[460px]">
        <iframe
          src={contact.mapsEmbed}
          title={k.mapFrameTitle}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="group mt-4 inline-flex items-center gap-2 font-display font-bold text-accent-strong">
        <span className="link">{k.mapOpen}</span>
        <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  )
}

export default function Kontakt() {
  const { c } = useLang()
  const k = c.contactPage
  usePageMeta(k.meta.title, k.meta.description)

  const facts = [
    { label: k.address, lines: [contact.company, contact.street, contact.city] },
    { label: k.hours, lines: k.hoursLines },
    { label: k.register, lines: [contact.uid, contact.register] },
  ]

  return (
    <>
      <section className="pb-[var(--section)] pt-[clamp(4rem,3rem+5vw,8rem)]">
        <div className="frame">
          <div className="grid-12 gap-y-6">
            <div className="col-span-12 lg:col-span-8">
              <div data-reveal>
                <Overline>{k.overline}</Overline>
              </div>
              <h1 data-reveal style={{ ['--d' as string]: 1 }} className="text-head">
                {k.title}
              </h1>
              <p data-reveal style={{ ['--d' as string]: 2 }} className="mt-6 max-w-[52ch] text-lead leading-[1.35] text-ink-soft">
                {k.reach}
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16" data-reveal style={{ ['--d' as string]: 3 }}>
            <ContactActions />
          </div>

          <div className="mt-[clamp(3.5rem,2.5rem+4vw,6rem)] grid-12 gap-y-12">
            <dl className="col-span-12 grid gap-x-[var(--gutter)] gap-y-8 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {facts.map((f, i) => (
                <div key={i} data-reveal style={{ ['--d' as string]: i }} className="border-t-2 border-ink pt-5">
                  <dt className="font-display text-small font-bold uppercase tracking-[0.14em] text-accent-strong">{f.label}</dt>
                  <dd className="mt-3 space-y-0.5">
                    {f.lines.map((l, j) => (
                      <span key={j} className="block">{l}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal style={{ ['--d' as string]: 1 }}>
              <h2 className="sr-only">{k.mapTitle}</h2>
              <MapPanel />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
