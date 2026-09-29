import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import CapabilitiesSplit from '../components/CapabilitiesSplit'
import StatementSection from '../components/StatementSection'
import Services from '../components/Services'
import ProcessFlow from '../components/ProcessFlow'
import CtaBanner from '../components/CtaBanner'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Porzi Tech GmbH – SPS-Programmierung & Automation | Pfäffikon SZ',
    'Porzi Tech GmbH: Ihr Spezialist für SPS-Programmierung, Steuerungsbau und Anlagenservice in der Zentralschweiz. Seit 1991 – jetzt kontaktieren.',
  )

  return (
    <>
      <Hero />
      <Marquee />
      <CapabilitiesSplit />
      <StatementSection />
      <Services />
      <ProcessFlow />
      <CtaBanner />
    </>
  )
}
