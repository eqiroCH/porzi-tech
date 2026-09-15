import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CapabilitiesSplit from './components/CapabilitiesSplit'
import StatementSection from './components/StatementSection'
import Services from './components/Services'
import DetailSection from './components/DetailSection'
import ProcessFlow from './components/ProcessFlow'
import About from './components/About'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Legal from './components/Legal'
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

      <DetailSection
        id="automation"
        tag="SPS & Steuerungsbau"
        sectionNumber="01"
        title="SPS-Programmierung & Steuerungsbau"
        lead="Massgeschneiderte Steuerungslösungen für Produktionsanlagen — von der Planung über die Programmierung bis zur Inbetriebnahme."
        tags={['SPS-Programmierung', 'Elektroschema', 'Steuerungsbau', 'Inbetriebnahme']}
        variant="editorial"
        items={[
          { title: 'Elektroschema-Erstellung', description: 'Professionelle Dokumentation nach aktuellen EN-Normen — klar, nachvollziehbar und revisionsfähig.' },
          { title: 'SPS-Programmierung', description: 'Zuverlässige Software auf Siemens S7/S5-Plattformen — stabil, wartbar und praxisnah programmiert.' },
          { title: 'Steuerungsschrank-Fertigung', description: 'Normgerecht verdrahtet, geprüft und vollständig dokumentiert — bereit für den Einsatz vor Ort.' },
          { title: 'Inbetriebnahme vor Ort', description: 'Inbetriebnahme, Optimierung und Schulung direkt im Betrieb — damit Ihre Anlage läuft.' },
        ]}
      />

      <DetailSection
        id="anlagenservice"
        tag="Anlagenservice & Wartung"
        sectionNumber="02"
        title="Revisionen, Reparaturen & Umbauten"
        lead="Schneller, kompetenter Anlagenservice mit minimalen Ausfallzeiten — für Produktionsbetriebe, die auf Verlässlichkeit angewiesen sind."
        tags={['Revisionen', 'Reparaturen', 'Umbauten', 'Montagen']}
        variant="dark"
        items={[
          { title: 'Revisionen', description: 'Regelmässige Überprüfung und Wartung für eine lange Lebensdauer und hohe Verfügbarkeit.' },
          { title: 'Störungsreparaturen', description: 'Schnelle Fehlerbehebung und Instandsetzung — kurze Reaktionszeiten, direkte Kommunikation.' },
          { title: 'Umbauten & Modifikationen', description: 'Anpassung bestehender Anlagen an neue Anforderungen, Prozesse oder Normen.' },
          { title: 'Montagen', description: 'Fachgerechte Montage und Installation von Anlagenkomponenten und Steuerungseinheiten.' },
        ]}
      />

      <DetailSection
        id="fahrzeugtechnik"
        tag="Fahrzeugservice"
        sectionNumber="03"
        title="Fahrzeugdiagnose & Autoservice"
        lead="Präziser Fahrzeugservice mit transparenter Beratung und ehrlichen Kosten — für Privatpersonen, die saubere Arbeit schätzen."
        tags={['OBD-Diagnose', 'Reparaturen', 'Inspektionen', 'Beratung']}
        variant="bold"
        items={[
          { title: 'Professionelle Diagnose', description: 'OBD-II-Diagnose aller gängigen Fahrzeugmarken — präzise Fehleranalyse ohne Umwege.' },
          { title: 'Reparaturen', description: 'Zuverlässige Reparatur von Fahrzeugelektrik, Antrieb und allgemeiner Fahrzeugtechnik.' },
          { title: 'Service-Inspektionen', description: 'Regelmässige Wartung und Inspektion für die Sicherheit und Langlebigkeit Ihres Fahrzeugs.' },
          { title: 'Ehrliche Beratung', description: 'Transparent, direkt und ohne versteckte Kosten — wir erklären, was wirklich notwendig ist.' },
        ]}
      />

      <ProcessFlow />
      <About />
      <CtaBanner />
      <Contact />
      <Legal />
      <Footer />
    </>
  )
}

export default App
