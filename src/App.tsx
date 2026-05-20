import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CapabilitiesSplit from './components/CapabilitiesSplit'
import StatementSection from './components/StatementSection'
import Services from './components/Services'
import DetailSection from './components/DetailSection'
import ProcessFlow from './components/ProcessFlow'
import ReferenceVoices from './components/ReferenceVoices'
import About from './components/About'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <CapabilitiesSplit />
      <StatementSection />
      <Services />

      {/* 01 — Dark: navy bg, white text, glass cards, diagonal cut edges */}
      <DetailSection
        id="anlagenservice"
        tag="Anlagenservice & Wartung"
        sectionNumber="02"
        title="Revisionen, Reparaturen & Umbauten"
        lead="Schneller, kompetenter Anlagenservice mit minimalen Ausfallzeiten — fuer Produktionsbetriebe, die auf Verlaesslichkeit angewiesen sind."
        tags={['Revisionen', 'Reparaturen', 'Umbauten', 'Montagen']}
        variant="dark"
        items={[
          { title: 'Revisionen', description: 'Regelmaessige Ueberpruefung und Wartung fuer eine lange Lebensdauer und hohe Verfuegbarkeit.' },
          { title: 'Stoerungsreparaturen', description: 'Schnelle Fehlerbehebung und Instandsetzung — kurze Reaktionszeiten, direkte Kommunikation.' },
          { title: 'Umbauten & Modifikationen', description: 'Anpassung bestehender Anlagen an neue Anforderungen, Prozesse oder Normen.' },
          { title: 'Montagen', description: 'Fachgerechte Montage und Installation von Anlagenkomponenten und Steuerungseinheiten.' },
        ]}
      />

      {/* 03 — Bold: huge watermark number, 2x2 card grid */}
      <DetailSection
        id="fahrzeugtechnik"
        tag="Fahrzeugservice"
        sectionNumber="03"
        title="Fahrzeugdiagnose & Autoservice"
        lead="Praeziser Fahrzeugservice mit transparenter Beratung und ehrlichen Kosten — fuer Privatpersonen, die saubere Arbeit schaetzen."
        tags={['OBD-Diagnose', 'Reparaturen', 'Inspektionen', 'Beratung']}
        variant="bold"
        items={[
          { title: 'Professionelle Diagnose', description: 'OBD-II-Diagnose aller gaengigen Fahrzeugmarken — praezise Fehleranalyse ohne Umwege.' },
          { title: 'Reparaturen', description: 'Zuverlaessige Reparatur von Fahrzeugelektrik, Antrieb und allgemeiner Fahrzeugtechnik.' },
          { title: 'Service-Inspektionen', description: 'Regelmaessige Wartung und Inspektion fuer die Sicherheit und Langlebigkeit Ihres Fahrzeugs.' },
          { title: 'Ehrliche Beratung', description: 'Transparent, direkt und ohne versteckte Kosten — wir erklaeren, was wirklich notwendig ist.' },
        ]}
      />

      <ProcessFlow />
      <About />
      <ReferenceVoices />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  )
}

export default App
