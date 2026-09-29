import PageHeader from '../components/PageHeader'
import About from '../components/About'
import StatementSection from '../components/StatementSection'
import CtaBanner from '../components/CtaBanner'
import { usePageMeta } from '../hooks/usePageMeta'

export default function UeberUns() {
  usePageMeta(
    'Über uns – seit 1991 in Pfäffikon SZ | Porzi Tech GmbH',
    'Von Flex-Control zur Porzi Tech GmbH: über 35 Jahre Erfahrung in Steuerungsbau, Automation und Fahrzeugtechnik aus Pfäffikon SZ.',
  )

  return (
    <>
      <PageHeader
        overline="Über uns"
        title="Über drei Jahrzehnte Präzision."
        lead="Von Flex-Control zur Porzi Tech GmbH — seit 1991 betreuen wir Industriebetriebe und Privatkunden aus Pfäffikon SZ."
        waveColor="white"
      />
      <About />
      <StatementSection />
      <CtaBanner />
    </>
  )
}
