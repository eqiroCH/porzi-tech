import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Kontakt() {
  usePageMeta(
    'Kontakt | Porzi Tech GmbH, Pfäffikon SZ',
    'Kontaktieren Sie Porzi Tech GmbH: Churerstrasse 160A, 8808 Pfäffikon SZ. Telefon 055 525 98 08, info@porzi-tech.ch. Mo–Fr 07:30–17:00.',
  )

  return (
    <>
      <PageHeader
        overline="Kontakt"
        title="Kontakt & Anfahrt"
        lead="Ob Störungsfall, Umbau oder Neuprojekt — wir beraten präzise und unverbindlich."
        waveColor="var(--color-surface)"
      />
      <Contact />
    </>
  )
}
