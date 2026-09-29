import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Seite nicht gefunden | Porzi Tech GmbH')

  return (
    <>
      <PageHeader
        overline="404"
        title="Seite nicht gefunden."
        lead="Die gewünschte Seite existiert nicht oder wurde verschoben."
      />
      <section className="py-[clamp(56px,8vw,96px)]" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark transition-colors text-white font-bold rounded-lg text-[0.9rem]"
          >
            Zur Startseite
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] bg-white text-[var(--color-text)] font-semibold rounded-lg text-[0.9rem]"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </>
  )
}
