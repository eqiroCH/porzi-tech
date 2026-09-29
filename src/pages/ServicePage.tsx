import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import DetailSection from '../components/DetailSection'
import ProcessFlow from '../components/ProcessFlow'
import CtaBanner from '../components/CtaBanner'
import { usePageMeta } from '../hooks/usePageMeta'
import { serviceAreas, type ServiceArea } from '../lib/site'
import { springSnappy } from '../lib/motion'

const waveColorByVariant: Record<ServiceArea['variant'], string | null> = {
  editorial: 'var(--color-surface)',
  dark: null,
  bold: 'var(--color-bg)',
}

function RelatedServices({ current }: { current: string }) {
  const reduce = useReducedMotion()
  const others = serviceAreas.filter((s) => s.slug !== current)

  return (
    <section className="relative py-[clamp(64px,8vw,104px)]" style={{ background: 'var(--color-surface)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
          <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Weitere Leistungen
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {others.map((s) => (
            <motion.div key={s.slug} whileHover={reduce ? {} : { y: -4, transition: springSnappy }}>
              <Link
                to={s.path}
                className="group flex h-full flex-col gap-3 rounded-2xl p-7 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors duration-200"
              >
                <span className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--color-tech)]">
                  {s.tag}
                </span>
                <span className="font-black text-[1.35rem] tracking-[-0.03em] leading-tight text-[var(--color-text)]">
                  {s.title}
                </span>
                <span className="text-[0.88rem] leading-relaxed text-[var(--color-text-muted)]">{s.lead}</span>
                <span className="mt-auto pt-2 inline-flex items-center gap-2 text-[0.84rem] font-bold text-[var(--color-accent)]">
                  Mehr erfahren
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicePage({ service }: { service: ServiceArea }) {
  usePageMeta(service.metaTitle, service.metaDescription)

  return (
    <>
      <PageHeader
        overline={service.navLabel}
        title={service.title}
        lead={service.intro}
        waveColor={waveColorByVariant[service.variant]}
      />
      <DetailSection
        id={service.slug}
        tag={service.tag}
        sectionNumber={service.sectionNumber}
        title={service.detailTitle}
        lead={service.lead}
        tags={service.tags}
        variant={service.variant}
        items={service.items}
        seamlessTop={waveColorByVariant[service.variant] === null}
      />
      <ProcessFlow />
      <RelatedServices current={service.slug} />
      <CtaBanner />
    </>
  )
}
