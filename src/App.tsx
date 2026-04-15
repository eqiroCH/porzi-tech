import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import DetailSection from './components/DetailSection'
import About from './components/About'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

const AutomationVisual = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="20" y="20" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <rect x="70" y="20" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2"/>
    <rect x="20" y="70" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2"/>
    <rect x="70" y="70" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <line x1="50" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="35" y1="50" x2="35" y2="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="85" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="50" y1="85" x2="70" y2="85" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
    <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.15"/>
    <circle cx="60" cy="60" r="4" fill="currentColor"/>
  </svg>
)

const ServiceVisual = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M60 20V100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3"/>
    <rect x="30" y="30" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M42 55L54 67L78 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="30" cy="30" r="5" fill="currentColor" opacity="0.2"/>
    <circle cx="90" cy="30" r="5" fill="currentColor" opacity="0.2"/>
    <circle cx="30" cy="90" r="5" fill="currentColor" opacity="0.2"/>
    <circle cx="90" cy="90" r="5" fill="currentColor" opacity="0.2"/>
  </svg>
)

const VehicleVisual = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M25 70V58C25 54 27 50 30 48L38 38H82L90 48C93 50 95 54 95 58V70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="70" width="84" height="18" rx="4" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="38" cy="88" r="9" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="38" cy="88" r="4" fill="currentColor" opacity="0.3"/>
    <circle cx="82" cy="88" r="9" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="82" cy="88" r="4" fill="currentColor" opacity="0.3"/>
    <line x1="45" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      <DetailSection
        id="automation"
        tag="Kernkompetenz"
        title="Automation & SPS-Software"
        lead="Massgeschneiderte Steuerungslösungen für Ihre Produktionsanlagen – von der Planung bis zur Inbetriebnahme."
        visual={<AutomationVisual />}
        items={[
          { title: 'Elektroschema-Erstellung', description: 'Professionelle Projektierung und Dokumentation elektrischer Anlagen nach aktuellen Normen.' },
          { title: 'SPS-Programmierung', description: 'Entwicklung zuverlässiger Steuerungssoftware für Sondermaschinen aller Art.' },
          { title: 'Steuerungsbau', description: 'Herstellung von Schaltschränken und Steuerungskomponenten für Industrie und Lebensmittelverarbeitung.' },
          { title: 'Inbetriebnahme', description: 'Komplette Inbetriebnahme und Optimierung Ihrer Anlagen vor Ort.' },
        ]}
      />

      <DetailSection
        id="anlagenservice"
        tag="Zuverlässig & effizient"
        title="Anlagenservice"
        lead="Wir halten Ihre Produktionsanlagen am Laufen – mit schnellem, kompetentem Service und minimalen Stillstandzeiten."
        visual={<ServiceVisual />}
        reverse
        alt
        items={[
          { title: 'Revisionen', description: 'Regelmässige Überprüfung und Wartung für eine lange Lebensdauer Ihrer Anlagen.' },
          { title: 'Reparaturen', description: 'Schnelle Fehlerbehebung und Instandsetzung bei Störungen und Ausfällen.' },
          { title: 'Umbauten & Modifikationen', description: 'Anpassung bestehender Anlagen an neue Anforderungen und Prozesse.' },
          { title: 'Montagen', description: 'Fachgerechte Montage und Installation von Anlagenkomponenten.' },
        ]}
      />

      <DetailSection
        id="fahrzeugtechnik"
        tag="Für Privatpersonen"
        title="Fahrzeugtechnik"
        lead="Neben der Industrietechnik bieten wir auch professionellen Autoservice für Ihren Personenwagen."
        visual={<VehicleVisual />}
        items={[
          { title: 'Reparaturen', description: 'Zuverlässige Diagnose und Reparatur aller gängigen Fahrzeugmarken.' },
          { title: 'Service-Inspektionen', description: 'Regelmässige Wartung und Inspektion für die Sicherheit Ihres Fahrzeugs.' },
          { title: 'Persönliche Beratung', description: 'Ehrliche, transparente Beratung ohne versteckte Kosten.' },
        ]}
      />

      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  )
}

export default App
