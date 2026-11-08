import type { PictureKey, ServiceSlug } from './site'

/**
 * All wording on the site, in German and English.
 * German follows the client's brief ("Webseiten Anpassung Porzi Tech GmbH", 11.08.2026).
 * English is a draft for the client to check: he offered to do the technical translation himself.
 */

export type Lang = 'de' | 'en'

export interface Meta {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  text: string
  /** Second name shown under the title, e.g. the English trade term */
  aka?: string
}

export interface ServiceCopy {
  slug: ServiceSlug
  navLabel: string
  title: string
  /** One sentence for overview cards */
  lead: string
  /** Paragraph in the page header */
  intro: string
  picture: PictureKey
  items: ServiceItem[]
  industries: string[]
  meta: Meta
}

export interface Content {
  ui: {
    skip: string
    mainNav: string
    home: string
    menu: string
    close: string
    language: string
    more: string
    allServices: string
    otherServices: string
    call: string
    writeEmail: string
  }
  nav: { about: string; contact: string }
  alts: Record<PictureKey, string>
  home: {
    meta: Meta
    eyebrow: string
    title: string
    text: string
    primary: string
    secondary: string
    servicesTitle: string
    servicesText: string
    industriesTitle: string
    industriesText: string
    historyYear: string
    historyTitle: string
    historyText: string
    historyLink: string
  }
  services: ServiceCopy[]
  servicePage: { scope: string; industries: string }
  steps: { title: string; items: { title: string; text: string }[] }
  cta: { title: string; text: string }
  status: {
    open: (until: string) => string
    closingSoon: (minutes: number) => string
    lunch: (at: string) => string
    laterToday: (at: string) => string
    tomorrow: (at: string) => string
    onDay: (day: string, at: string) => string
    days: string[]
  }
  about: {
    meta: Meta
    overline: string
    title: string
    lead: string
    name: string
    role: string
    photoPending: string
    paragraphs: string[]
    timelineTitle: string
    timeline: { year: string; title: string; lines: string[] }[]
  }
  contactPage: {
    meta: Meta
    overline: string
    title: string
    reach: string
    address: string
    hours: string
    hoursLines: string[]
    register: string
    mapTitle: string
    mapNote: string
    mapLoad: string
    mapOpen: string
    mapFrameTitle: string
  }
  footer: {
    tagline: string
    services: string
    company: string
    contact: string
    rights: string
    agb: string
  }
  legalNav: { impressum: string; datenschutz: string }
  notFound: { meta: Meta; title: string; text: string; home: string }
}

const de: Content = {
  ui: {
    skip: 'Zum Inhalt',
    mainNav: 'Hauptnavigation',
    home: 'Porzi Tech GmbH, zur Startseite',
    menu: 'Menü',
    close: 'Schliessen',
    language: 'Sprache',
    more: 'Mehr erfahren',
    allServices: 'Leistungen',
    otherServices: 'Weitere Bereiche',
    call: 'Anrufen',
    writeEmail: 'E-Mail senden',
  },
  nav: { about: 'Über uns', contact: 'Kontakt' },
  alts: {
    simaticS5: 'Siemens Simatic S5-100U mit CPU 103, eine Steuerung der S5-Generation',
    pg730: 'Siemens Programmiergerät PG 730 für Simatic S5',
    s71500: 'Siemens Simatic S7-1500 in einem Steuerungsschrank',
    klemmen: 'Verdrahtete Reihenklemmen in einem Schaltschrank',
    tig: 'TIG-Schweissbrenner mit hellem Lichtbogen an einer Blechnaht',
    tigWorkshop: 'Schweisser beim TIG-Schweissen an einer Werkbank',
    weldSeam: 'Umlaufende Schweissnaht an einem Edelstahlrohr',
    seedamm: 'Blick von der Luegete über Pfäffikon SZ zum Seedamm und Zürichsee',
  },
  home: {
    meta: {
      title: 'Porzi Tech GmbH – Automation, Anlagenservice & Schweisstechnik | Pfäffikon SZ',
      description:
        'Porzi Tech GmbH, Pfäffikon SZ: SPS-Programmierung und Steuerungsbau, Anlagenservice und Retrofit, Sonderanlagenbau für die Schweisstechnik. Seit 1991.',
    },
    eyebrow: 'Pfäffikon SZ · seit 1991',
    title: 'Steuerungen, die laufen.',
    text:
      'Automation, Anlagenservice und Schweisstechnik aus einer Hand: Wir planen, programmieren und bauen Steuerungen, halten Produktionsanlagen in Betrieb und bauen Sonderanlagen für die Schweissmechanisierung.',
    primary: 'Anfrage stellen',
    secondary: 'Über uns',
    servicesTitle: 'Drei Bereiche, ein Ansprechpartner.',
    servicesText: 'Vom Elektroschema bis zum Schweissbrenner: Wir planen, bauen, montieren und betreuen selbst.',
    industriesTitle: 'Branchen',
    industriesText: 'In diesen Branchen sind wir vorwiegend tätig.',
    historyYear: '1991',
    historyTitle: 'Über 30 Jahre Steuerungsbau.',
    historyText:
      'Fabio Porzi gründete 1991 die Flex-Control in Wollerau SZ. Seit 2020 führt die Porzi Tech GmbH dieses Wissen fort und hat es um Anlagenservice und Schweisstechnik erweitert.',
    historyLink: 'Unsere Geschichte',
  },
  services: [
    {
      slug: 'automation',
      navLabel: 'Automation',
      title: 'SPS-Programmierung & Steuerungsbau',
      lead: 'Steuerungen für Produktionsanlagen: geplant, programmiert, gebaut, montiert und vor Ort in Betrieb genommen.',
      intro:
        'Steuerungen auf Siemens S7 und, wo sie noch läuft, auf S5. Normgerecht dokumentiert, bei Ihnen vor Ort montiert und in Betrieb genommen.',
      picture: 's71500',
      items: [
        { title: 'Elektroschema', text: 'Dokumentation nach aktuellen EN-Normen, so gezeichnet, dass auch in zehn Jahren jemand damit arbeiten kann.' },
        { title: 'SPS-Programmierung', text: 'Software für Siemens S7 und S5: stabil, wartbar und für die Leute geschrieben, die an der Anlage stehen.' },
        { title: 'Steuerungsschränke', text: 'Normgerecht verdrahtet, geprüft und vollständig dokumentiert, bereit für den Einbau vor Ort.' },
        { title: 'Montage & Installation vor Ort', text: 'Wir montieren und installieren die Steuerung direkt in Ihrem Betrieb, sauber verlegt und beschriftet.' },
        { title: 'Inbetriebnahme', text: 'Inbetriebnahme, Optimierung und Schulung bei Ihnen vor Ort, bis die Anlage läuft.' },
      ],
      industries: ['Wasseraufbereitung für Schwimmbäder', 'Lebensmittelindustrie', 'Transport- und Förderanlagen', 'Sonderanlagen'],
      meta: {
        title: 'Automation: SPS-Programmierung & Steuerungsbau | Porzi Tech GmbH',
        description:
          'SPS-Programmierung (Siemens S7/S5), Elektroschema, Steuerungsschränke, Montage und Inbetriebnahme vor Ort – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
    {
      slug: 'anlagenservice',
      navLabel: 'Anlagenservice',
      title: 'Revisionen, Reparaturen & Retrofit',
      lead: 'Anlagenservice mit kurzen Ausfallzeiten, für Betriebe, die sich keinen Stillstand leisten können.',
      intro:
        'Wenn eine Anlage steht, zählt jede Stunde. Revisionen, schnelle Störungsbehebung, Umbauten und Retrofit halten sie verfügbar und sparsam.',
      picture: 'pg730',
      items: [
        { title: 'Revisionen', text: 'Regelmässige Überprüfung und Wartung für eine lange Lebensdauer und hohe Verfügbarkeit.' },
        { title: 'Störungsreparaturen', text: 'Fehler finden und beheben, mit kurzer Reaktionszeit und direkter Kommunikation.' },
        { title: 'Umbauten & Retrofit', text: 'Bestehende Anlagen modernisieren statt ersetzen und an neue Anforderungen, Prozesse oder Normen anpassen, auch ältere S5-Steuerungen.' },
        { title: 'Energieeffizienz-Optimierung', text: 'Wir prüfen, wo Ihre Anlage unnötig Energie braucht, und passen Steuerung und Abläufe an.' },
        { title: 'Montagen', text: 'Fachgerechte Montage und Installation von Anlagenteilen und Steuerungseinheiten.' },
      ],
      industries: [],
      meta: {
        title: 'Anlagenservice, Retrofit & Energieeffizienz | Porzi Tech GmbH',
        description:
          'Revisionen, Störungsreparaturen, Umbauten & Retrofit, Energieeffizienz-Optimierung und Montagen von Produktionsanlagen – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
    {
      slug: 'schweisstechnik',
      navLabel: 'Schweisstechnik',
      title: 'Anlagen- und Prototypenbau · Planung · Service',
      lead: 'Sonderanlagenbau für Schweissmechanisierung und Automatisierung, und TIG-Engspaltschweissbrenner aus eigener Herstellung.',
      intro:
        'Sonderanlagenbau für Schweissmechanisierung und Automatisierung. Herstellung von TIG-Engspaltschweissbrennern für das Rotorschweissen von Gasturbinen.',
      picture: 'tig',
      items: [
        { title: 'Planung & Projektierung', text: 'Vom Pflichtenheft bis zum Konzept: Wir legen die Anlage so aus, dass sie zu Ihrem Werkstück und Ihrem Prozess passt.' },
        { title: 'Montage & Inbetriebnahme', text: 'Aufbau, Verdrahtung und Inbetriebnahme der Anlage, bis die erste Naht sitzt.' },
        { title: 'Umbauten & Retrofit', text: 'Bestehende Schweissanlagen erweitern, modernisieren und mit neuer Steuerung ausrüsten.' },
        { title: 'Reparaturen & Service', text: 'Wartung und Reparatur von Schweissanlagen, damit die Produktion weiterläuft.' },
        { title: 'TIG-Engspaltschweissbrenner', aka: 'Narrow Gap TIG welding torch', text: 'Eigene Herstellung von TIG-Engspaltbrennern für das Rotorschweissen von Gasturbinen.' },
      ],
      industries: [
        'MSG-Schweissportale für Fahrzeugbau & Hebebühnen',
        'TIG-Engspaltbrenner für das Rotorschweissen von Gasturbinen',
        'Plasmaschweissmast für den Apparatebau',
      ],
      meta: {
        title: 'Schweisstechnik: Sonderanlagen & TIG-Engspaltbrenner | Porzi Tech GmbH',
        description:
          'Anlagen- und Prototypenbau für Schweissmechanisierung, TIG-Engspaltschweissbrenner für Gasturbinen-Rotoren, Planung, Montage und Service – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
  ],
  servicePage: { scope: 'Leistungen', industries: 'Branchen' },
  steps: {
    title: 'So arbeiten wir',
    items: [
      { title: 'Anfrage', text: 'Sie rufen an oder schreiben uns. Wir klären Ihr Anliegen rasch und fragen nach, was wir für eine Einschätzung brauchen.' },
      { title: 'Offerte', text: 'Sie erhalten eine Offerte mit klarem Leistungsumfang. Was nicht drinsteht, kostet nichts extra.' },
      { title: 'Umsetzung', text: 'Wir führen die Arbeit fachgerecht aus, halten Termine und sagen es Ihnen früh, wenn sich etwas ändert.' },
      { title: 'Übergabe', text: 'Sie bekommen eine vollständige Dokumentation. Und wenn später eine Frage auftaucht, rufen Sie dieselbe Nummer an.' },
    ],
  },
  cta: {
    title: 'Sprechen Sie direkt mit uns.',
    text: 'Ob Störung, Umbau oder neues Projekt: Rufen Sie an oder schreiben Sie uns.',
  },
  status: {
    open: (until) => `Jetzt erreichbar, bis ${until}.`,
    closingSoon: (m) => `Jetzt erreichbar, noch ${m} Minuten.`,
    lunch: (at) => `Mittagspause, ab ${at} wieder am Telefon.`,
    laterToday: (at) => `Heute ab ${at} wieder am Telefon.`,
    tomorrow: (at) => `Morgen ab ${at} wieder am Telefon.`,
    onDay: (day, at) => `${day} ab ${at} wieder am Telefon.`,
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  },
  about: {
    meta: {
      title: 'Über uns – seit 1991 im Steuerungsbau | Porzi Tech GmbH',
      description:
        'Von der Flex-Control in Wollerau zur Porzi Tech GmbH in Pfäffikon SZ: über 30 Jahre Steuerungsbau, Automation und Schweisstechnik.',
    },
    overline: 'Über uns',
    title: 'Seit 1991 im Steuerungsbau.',
    lead: 'Von der Flex-Control in Wollerau zur Porzi Tech GmbH in Pfäffikon SZ.',
    name: 'Fabio Porzi',
    role: 'Geschäftsführer, Porzi Tech GmbH',
    photoPending: 'Foto folgt',
    paragraphs: [
      'Bereits 1991 gründete Fabio Porzi das Unternehmen Flex-Control in Wollerau SZ, spezialisiert auf Steuerungsbau und Software-Erstellung. Während fast 30 Jahren baute er ein tiefes Fachwissen auf und betreute zahlreiche Industriekunden aus verschiedensten Branchen.',
      '2020 folgte der nächste Schritt: die Gründung der Porzi Tech GmbH. Die bewährten Kompetenzen in Automation und Steuerungsbau werden fortgeführt und um zusätzliche Dienstleistungsbereiche erweitert.',
    ],
    timelineTitle: 'Unsere Geschichte',
    timeline: [
      { year: '1991', title: 'Gründung Flex-Control', lines: ['Start im Steuerungsbau und in der Software-Erstellung in Wollerau SZ.'] },
      {
        year: '2000+',
        title: 'Wachstum & Expertise',
        lines: [
          'Ausbau der Kompetenzen in Industrieautomation und SPS-Programmierung.',
          'Einstieg in den Anlagen- und Prototypenbau für die Schweisstechnik.',
          'Herstellung von TIG-Engspaltschweissbrennern.',
        ],
      },
      { year: '2006', title: 'Umzug nach Pfäffikon SZ', lines: ['Die Flex-Control verlegt ihren Standort nach Pfäffikon SZ.'] },
      { year: '2020', title: 'Porzi Tech GmbH', lines: ['Ein neues Kapitel mit erweitertem Leistungsspektrum und neuem Namen.'] },
      { year: 'Heute', title: 'Ihr kompetenter Partner', lines: ['Automation, Anlagenservice und Schweisstechnik aus einer Hand.'] },
    ],
  },
  contactPage: {
    meta: {
      title: 'Kontakt | Porzi Tech GmbH, Pfäffikon SZ',
      description:
        'Porzi Tech GmbH, Churerstrasse 160A, 8808 Pfäffikon SZ. Telefon 055 525 98 08, info@porzi-tech.ch. Mo–Fr 08:00–12:00 und 13:00–17:30.',
    },
    overline: 'Kontakt',
    title: 'Sprechen Sie direkt mit uns.',
    reach: 'Wir sind Mo – Fr von 08:00 bis 17:30 Uhr erreichbar – per Telefon oder E-Mail.',
    address: 'Adresse',
    hours: 'Geschäftszeiten',
    hoursLines: ['Mo – Fr: 08:00 – 12:00', '13:00 – 17:30', 'Sa – So: Geschlossen'],
    register: 'Handelsregister',
    mapTitle: 'Anfahrt',
    mapNote: 'Die Karte stammt von Google Maps. Sie wird erst geladen, wenn Sie darauf klicken.',
    mapLoad: 'Karte laden',
    mapOpen: 'In Google Maps öffnen',
    mapFrameTitle: 'Karte: Porzi Tech GmbH, Churerstrasse 160A, Pfäffikon SZ',
  },
  footer: {
    tagline: 'Automation, Anlagenservice und Schweisstechnik aus Pfäffikon SZ. Seit 1991.',
    services: 'Leistungen',
    company: 'Unternehmen',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten',
    agb: 'AGB',
  },
  legalNav: { impressum: 'Impressum', datenschutz: 'Datenschutz' },
  notFound: {
    meta: { title: 'Seite nicht gefunden | Porzi Tech GmbH', description: '' },
    title: 'Seite nicht gefunden.',
    text: 'Die gewünschte Seite existiert nicht oder wurde verschoben.',
    home: 'Zur Startseite',
  },
}

const en: Content = {
  ui: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    home: 'Porzi Tech GmbH, home',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    more: 'Learn more',
    allServices: 'Services',
    otherServices: 'Other fields',
    call: 'Call us',
    writeEmail: 'Send an email',
  },
  nav: { about: 'About us', contact: 'Contact' },
  alts: {
    simaticS5: 'Siemens Simatic S5-100U with CPU 103, a controller of the S5 generation',
    pg730: 'Siemens PG 730 programming device for Simatic S5',
    s71500: 'Siemens Simatic S7-1500 in a control cabinet',
    klemmen: 'Wired terminal blocks in a control cabinet',
    tig: 'TIG welding torch with a bright arc on a sheet-metal seam',
    tigWorkshop: 'Welder TIG welding at a workbench',
    weldSeam: 'Circumferential weld seam on a stainless steel tube',
    seedamm: 'View from the Luegete over Pfäffikon SZ to the Seedamm and Lake Zurich',
  },
  home: {
    meta: {
      title: 'Porzi Tech GmbH – Automation, Plant Service & Welding Technology | Pfäffikon SZ',
      description:
        'Porzi Tech GmbH, Pfäffikon SZ, Switzerland: PLC programming and control panel building, plant service and retrofit, special-purpose machines for welding. Since 1991.',
    },
    eyebrow: 'Pfäffikon SZ · since 1991',
    title: 'Controls that keep running.',
    text:
      'Automation, plant service and welding technology from a single source: we design, program and build control systems, keep production plants running and build special-purpose machines for mechanised welding.',
    primary: 'Send an enquiry',
    secondary: 'About us',
    servicesTitle: 'Three fields, one point of contact.',
    servicesText: 'From the wiring diagram to the welding torch: we design, build, install and service it ourselves.',
    industriesTitle: 'Industries',
    industriesText: 'These are the industries we mainly work in.',
    historyYear: '1991',
    historyTitle: 'Over 30 years of control engineering.',
    historyText:
      'Fabio Porzi founded Flex-Control in Wollerau SZ in 1991. Since 2020, Porzi Tech GmbH has carried that knowledge forward and added plant service and welding technology.',
    historyLink: 'Our history',
  },
  services: [
    {
      slug: 'automation',
      navLabel: 'Automation',
      title: 'PLC Programming & Control Panel Building',
      lead: 'Control systems for production plants: designed, programmed, built, installed and commissioned on site.',
      intro:
        'Control systems on Siemens S7 and, where it is still running, on S5. Documented to current standards, installed and commissioned at your site.',
      picture: 's71500',
      items: [
        { title: 'Electrical schematics', text: 'Documentation to current EN standards, drawn so that someone can still work with it in ten years.' },
        { title: 'PLC programming', text: 'Software for Siemens S7 and S5: stable, maintainable and written for the people who operate the plant.' },
        { title: 'Control cabinets', text: 'Wired to standard, tested and fully documented, ready for installation on site.' },
        { title: 'On-site installation', text: 'We mount and install the control system directly at your plant, cleanly routed and labelled.' },
        { title: 'Commissioning', text: 'Commissioning, optimisation and training at your site, until the plant is running.' },
      ],
      industries: ['Water treatment for swimming pools', 'Food industry', 'Transport and conveyor systems', 'Special-purpose machines'],
      meta: {
        title: 'Automation: PLC Programming & Control Panels | Porzi Tech GmbH',
        description:
          'PLC programming (Siemens S7/S5), electrical schematics, control cabinets, on-site installation and commissioning – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
    {
      slug: 'anlagenservice',
      navLabel: 'Plant Service',
      title: 'Overhauls, Repairs & Retrofit',
      lead: 'Plant service with short downtimes, for operations that cannot afford a standstill.',
      intro:
        'When a plant stops, every hour counts. Overhauls, fast troubleshooting, modifications and retrofits keep it available and efficient.',
      picture: 'pg730',
      items: [
        { title: 'Overhauls', text: 'Regular inspection and maintenance for a long service life and high availability.' },
        { title: 'Breakdown repairs', text: 'Finding and fixing faults, with short response times and direct communication.' },
        { title: 'Modifications & retrofit', text: 'Modernising existing plants instead of replacing them, and adapting them to new requirements, processes or standards, including older S5 controls.' },
        { title: 'Energy efficiency optimisation', text: 'We check where your plant uses energy it does not need and adapt the controls and sequences.' },
        { title: 'Installation', text: 'Professional installation of plant components and control units.' },
      ],
      industries: [],
      meta: {
        title: 'Plant Service, Retrofit & Energy Efficiency | Porzi Tech GmbH',
        description:
          'Overhauls, breakdown repairs, modifications & retrofit, energy efficiency optimisation and installation of production plants – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
    {
      slug: 'schweisstechnik',
      navLabel: 'Welding Technology',
      title: 'Machine & Prototype Building · Engineering · Service',
      lead: 'Special-purpose machines for mechanised and automated welding, and narrow gap TIG welding torches of our own manufacture.',
      intro:
        'Special-purpose machine building for mechanised and automated welding. Manufacture of narrow gap TIG welding torches for gas turbine rotor welding.',
      picture: 'tig',
      items: [
        { title: 'Planning & engineering', text: 'From the specification to the concept: we design the machine to fit your workpiece and your process.' },
        { title: 'Installation & commissioning', text: 'Assembly, wiring and commissioning of the machine, until the first seam is right.' },
        { title: 'Modifications & retrofit', text: 'Extending and modernising existing welding machines and fitting them with new controls.' },
        { title: 'Repairs & service', text: 'Maintenance and repair of welding machines, so production keeps going.' },
        { title: 'Narrow gap TIG welding torch', aka: 'TIG-Engspaltschweissbrenner', text: 'Our own narrow gap TIG torches for gas turbine rotor welding.' },
      ],
      industries: [
        'MAG/MIG welding gantries for vehicle construction & vehicle lifts',
        'Narrow gap TIG torches for gas turbine rotor welding',
        'Plasma welding column for apparatus engineering',
      ],
      meta: {
        title: 'Welding Technology: Special Machines & Narrow Gap TIG Torches | Porzi Tech GmbH',
        description:
          'Machine and prototype building for mechanised welding, narrow gap TIG welding torches for gas turbine rotors, engineering, installation and service – Porzi Tech GmbH, Pfäffikon SZ.',
      },
    },
  ],
  servicePage: { scope: 'Services', industries: 'Industries' },
  steps: {
    title: 'How we work',
    items: [
      { title: 'Enquiry', text: 'You call or write to us. We clarify your request quickly and ask for what we need to make an assessment.' },
      { title: 'Quotation', text: 'You receive a quotation with a clear scope. Anything not in it costs nothing extra.' },
      { title: 'Execution', text: 'We carry out the work professionally, keep to deadlines and tell you early if anything changes.' },
      { title: 'Handover', text: 'You receive complete documentation. And if a question comes up later, you call the same number.' },
    ],
  },
  cta: {
    title: 'Talk to us directly.',
    text: 'Breakdown, modification or a new project: give us a call or send us an email.',
  },
  status: {
    open: (until) => `Available now, until ${until}.`,
    closingSoon: (m) => `Available now, for another ${m} minutes.`,
    lunch: (at) => `Lunch break, back on the phone at ${at}.`,
    laterToday: (at) => `Back on the phone today from ${at}.`,
    tomorrow: (at) => `Back on the phone tomorrow from ${at}.`,
    onDay: (day, at) => `Back on the phone on ${day} from ${at}.`,
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  about: {
    meta: {
      title: 'About us – control engineering since 1991 | Porzi Tech GmbH',
      description:
        'From Flex-Control in Wollerau to Porzi Tech GmbH in Pfäffikon SZ: over 30 years of control engineering, automation and welding technology.',
    },
    overline: 'About us',
    title: 'Control engineering since 1991.',
    lead: 'From Flex-Control in Wollerau to Porzi Tech GmbH in Pfäffikon SZ.',
    name: 'Fabio Porzi',
    role: 'Managing Director, Porzi Tech GmbH',
    photoPending: 'Photo to follow',
    paragraphs: [
      'Fabio Porzi founded Flex-Control in Wollerau SZ back in 1991, specialising in control panel building and software development. Over almost 30 years he built up deep expertise and looked after numerous industrial customers from a wide range of sectors.',
      'The next step followed in 2020: the founding of Porzi Tech GmbH. The proven skills in automation and control engineering carry on, extended by further service areas.',
    ],
    timelineTitle: 'Our history',
    timeline: [
      { year: '1991', title: 'Flex-Control founded', lines: ['Start in control panel building and software development in Wollerau SZ.'] },
      {
        year: '2000+',
        title: 'Growth & expertise',
        lines: [
          'Expanding our skills in industrial automation and PLC programming.',
          'Entry into machine and prototype building for welding technology.',
          'Manufacture of narrow gap TIG welding torches.',
        ],
      },
      { year: '2006', title: 'Move to Pfäffikon SZ', lines: ['Flex-Control moves to Pfäffikon SZ.'] },
      { year: '2020', title: 'Porzi Tech GmbH', lines: ['A new chapter with a wider range of services and a new name.'] },
      { year: 'Today', title: 'Your competent partner', lines: ['Automation, plant service and welding technology from a single source.'] },
    ],
  },
  contactPage: {
    meta: {
      title: 'Contact | Porzi Tech GmbH, Pfäffikon SZ',
      description:
        'Porzi Tech GmbH, Churerstrasse 160A, 8808 Pfäffikon SZ, Switzerland. Phone +41 55 525 98 08, info@porzi-tech.ch. Mon–Fri 08:00–12:00 and 13:00–17:30.',
    },
    overline: 'Contact',
    title: 'Talk to us directly.',
    reach: 'You can reach us Monday to Friday from 08:00 to 17:30, by phone or email.',
    address: 'Address',
    hours: 'Office hours',
    hoursLines: ['Mon – Fri: 08:00 – 12:00', '13:00 – 17:30', 'Sat – Sun: closed'],
    register: 'Commercial register',
    mapTitle: 'Directions',
    mapNote: 'The map is provided by Google Maps. It only loads once you click it.',
    mapLoad: 'Load map',
    mapOpen: 'Open in Google Maps',
    mapFrameTitle: 'Map: Porzi Tech GmbH, Churerstrasse 160A, Pfäffikon SZ',
  },
  footer: {
    tagline: 'Automation, plant service and welding technology from Pfäffikon SZ. Since 1991.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    rights: 'All rights reserved',
    agb: 'Terms (AGB)',
  },
  legalNav: { impressum: 'Legal notice', datenschutz: 'Privacy policy' },
  notFound: {
    meta: { title: 'Page not found | Porzi Tech GmbH', description: '' },
    title: 'Page not found.',
    text: 'The page you are looking for does not exist or has moved.',
    home: 'Back to the homepage',
  },
}

export const content: Record<Lang, Content> = { de, en }
