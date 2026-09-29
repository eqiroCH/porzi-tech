export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceArea {
  slug: string
  path: string
  navLabel: string
  tag: string
  sectionNumber: string
  title: string
  detailTitle: string
  lead: string
  intro: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  variant: 'editorial' | 'dark' | 'bold'
  items: ServiceItem[]
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'automation',
    path: '/automation',
    navLabel: 'Automation',
    tag: 'SPS & Steuerungsbau',
    sectionNumber: '01',
    title: 'SPS-Programmierung & Steuerungsbau',
    detailTitle: 'Von der Planung bis zur laufenden Anlage.',
    lead: 'Massgeschneiderte Steuerungslösungen für Produktionsanlagen — von der Planung über die Programmierung bis zur Inbetriebnahme.',
    intro: 'Von der Elektroplanung bis zur laufenden Anlage: Steuerungslösungen auf Siemens-Plattformen, normgerecht dokumentiert und vor Ort in Betrieb genommen.',
    metaTitle: 'SPS-Programmierung & Steuerungsbau | Porzi Tech GmbH',
    metaDescription: 'SPS-Programmierung (Siemens S7/S5), Elektroschema, Steuerungsschrank-Fertigung und Inbetriebnahme vor Ort – Porzi Tech GmbH, Pfäffikon SZ.',
    tags: ['SPS-Programmierung', 'Elektroschema', 'Steuerungsbau', 'Inbetriebnahme'],
    variant: 'editorial',
    items: [
      { title: 'Elektroschema-Erstellung', description: 'Professionelle Dokumentation nach aktuellen EN-Normen — klar, nachvollziehbar und revisionsfähig.' },
      { title: 'SPS-Programmierung', description: 'Zuverlässige Software auf Siemens S7/S5-Plattformen — stabil, wartbar und praxisnah programmiert.' },
      { title: 'Steuerungsschrank-Fertigung', description: 'Normgerecht verdrahtet, geprüft und vollständig dokumentiert — bereit für den Einsatz vor Ort.' },
      { title: 'Inbetriebnahme vor Ort', description: 'Inbetriebnahme, Optimierung und Schulung direkt im Betrieb — damit Ihre Anlage läuft.' },
    ],
  },
  {
    slug: 'anlagenservice',
    path: '/anlagenservice',
    navLabel: 'Anlagenservice',
    tag: 'Anlagenservice & Wartung',
    sectionNumber: '02',
    title: 'Revisionen, Reparaturen & Umbauten',
    detailTitle: 'Damit Ihre Anlage läuft.',
    lead: 'Schneller, kompetenter Anlagenservice mit minimalen Ausfallzeiten — für Produktionsbetriebe, die auf Verlässlichkeit angewiesen sind.',
    intro: 'Wenn eine Anlage steht, zählt jede Stunde. Wir sorgen mit Revisionen, schneller Störungsbehebung und sauberen Umbauten für hohe Verfügbarkeit.',
    metaTitle: 'Anlagenservice, Revisionen & Umbauten | Porzi Tech GmbH',
    metaDescription: 'Revisionen, Störungsreparaturen, Umbauten und Montagen von Produktionsanlagen in der Zentralschweiz – Porzi Tech GmbH, Pfäffikon SZ.',
    tags: ['Revisionen', 'Reparaturen', 'Umbauten', 'Montagen'],
    variant: 'dark',
    items: [
      { title: 'Revisionen', description: 'Regelmässige Überprüfung und Wartung für eine lange Lebensdauer und hohe Verfügbarkeit.' },
      { title: 'Störungsreparaturen', description: 'Schnelle Fehlerbehebung und Instandsetzung — kurze Reaktionszeiten, direkte Kommunikation.' },
      { title: 'Umbauten & Modifikationen', description: 'Anpassung bestehender Anlagen an neue Anforderungen, Prozesse oder Normen.' },
      { title: 'Montagen', description: 'Fachgerechte Montage und Installation von Anlagenkomponenten und Steuerungseinheiten.' },
    ],
  },
  {
    slug: 'fahrzeugtechnik',
    path: '/fahrzeugtechnik',
    navLabel: 'Fahrzeugtechnik',
    tag: 'Fahrzeugservice',
    sectionNumber: '03',
    title: 'Fahrzeugdiagnose & Autoservice',
    detailTitle: 'Diagnose statt Rätselraten.',
    lead: 'Präziser Fahrzeugservice mit transparenter Beratung und ehrlichen Kosten — für Privatpersonen, die saubere Arbeit schätzen.',
    intro: 'Diagnose, Reparatur und Service für Personenwagen aller gängigen Marken — mit klarer Kommunikation, was wirklich nötig ist.',
    metaTitle: 'Fahrzeugdiagnose & Autoservice | Porzi Tech GmbH',
    metaDescription: 'OBD-II-Diagnose, Reparaturen, Service-Inspektionen und ehrliche Beratung für Personenwagen – Porzi Tech GmbH, Pfäffikon SZ.',
    tags: ['OBD-Diagnose', 'Reparaturen', 'Inspektionen', 'Beratung'],
    variant: 'bold',
    items: [
      { title: 'Professionelle Diagnose', description: 'OBD-II-Diagnose aller gängigen Fahrzeugmarken — präzise Fehleranalyse ohne Umwege.' },
      { title: 'Reparaturen', description: 'Zuverlässige Reparatur von Fahrzeugelektrik, Antrieb und allgemeiner Fahrzeugtechnik.' },
      { title: 'Service-Inspektionen', description: 'Regelmässige Wartung und Inspektion für die Sicherheit und Langlebigkeit Ihres Fahrzeugs.' },
      { title: 'Ehrliche Beratung', description: 'Transparent, direkt und ohne versteckte Kosten — wir erklären, was wirklich notwendig ist.' },
    ],
  },
]

export const mainNav = [
  ...serviceAreas.map((s) => ({ to: s.path, label: s.navLabel })),
  { to: '/ueber-uns', label: 'Über uns' },
]

export const legalNav = [
  { to: '/impressum', label: 'Impressum' },
  { to: '/datenschutz', label: 'Datenschutz' },
]
