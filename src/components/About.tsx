import { useInView } from '../hooks/useInView'

const timeline = [
  { year: '1991', title: 'Gründung Flex-Control', text: 'Start im Steuerungsbau und Software-Erstellung in Pfäffikon SZ' },
  { year: '2000+', title: 'Wachstum & Expertise', text: 'Ausbau der Kompetenzen in Industrieautomation und SPS-Programmierung' },
  { year: '2020', title: 'Gründung Porzi Tech GmbH', text: 'Neues Kapitel mit erweitertem Leistungsspektrum' },
  { year: 'Heute', title: 'Ihr kompetenter Partner', text: 'Automation, Anlagenservice und Fahrzeugtechnik aus einer Hand', active: true },
]

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useInView()
  const { ref: timelineRef, isVisible: timelineVisible } = useInView()

  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              Über uns
            </span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-primary mb-6">
              Über 35 Jahre Erfahrung<br />im Steuerungsbau
            </h2>
            <p className="text-lg leading-relaxed mb-5">
              Hinter Porzi Tech steht Geschäftsführer <strong className="text-primary">Fabio Porzi</strong> – ein Fachmann mit
              jahrzehntelanger Erfahrung in der Automatisierungstechnik.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Bereits 1991 gründete Fabio Porzi das Unternehmen <strong className="text-primary">Flex-Control</strong> in Pfäffikon SZ,
              welches sich auf Steuerungsbau und Software-Erstellung spezialisierte. Während fast
              30 Jahren baute er ein tiefes Fachwissen auf und betreute zahlreiche Industriekunden
              aus verschiedensten Branchen.
            </p>
            <p className="text-gray-500 leading-relaxed">
              2020 folgte der nächste Schritt: Die Gründung der <strong className="text-primary">Porzi Tech GmbH</strong>.
              Mit dem neuen Unternehmen werden die bewährten Kompetenzen in Automation
              und Steuerungsbau fortgeführt und um zusätzliche Dienstleistungsbereiche
              erweitert – darunter umfassender Anlagenservice und Fahrzeugtechnik.
            </p>
          </div>

          <div
            ref={timelineRef}
            className={`transition-all duration-700 delay-200 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />
              {timeline.map((item, i) => (
                <div key={i} className="relative pb-10 last:pb-0">
                  <div className={`absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 transition-all
                    ${item.active
                      ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(232,135,42,0.2)]'
                      : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  <div className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-1">
                    {item.year}
                  </div>
                  <strong className="block text-primary mb-1">{item.title}</strong>
                  <span className="text-sm text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
