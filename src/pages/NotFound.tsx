import { Link } from 'react-router'
import { PageHeader } from '../components/ui'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLang } from '../lib/i18n'

export default function NotFound() {
  const { c } = useLang()
  usePageMeta(c.notFound.meta.title)

  return (
    <>
      <PageHeader overline="404" title={c.notFound.title} lead={c.notFound.text} />
      <section className="py-[clamp(4rem,3rem+5vw,8rem)]">
        <div className="frame flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to="/" className="btn">{c.notFound.home}</Link>
          <Link to="/kontakt" className="link font-display font-bold text-accent-strong">{c.nav.contact}</Link>
        </div>
      </section>
    </>
  )
}
