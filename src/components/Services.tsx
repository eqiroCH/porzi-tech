import { useInView } from '../hooks/useInView'

interface ServiceCardProps {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ href, icon, title, description, delay }: ServiceCardProps) {
  const { ref, isVisible } = useInView()

  const scrollTo = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <a
      ref={ref}
      href={href}
      onClick={scrollTo}
      className={`flex flex-col p-8 bg-white border border-gray-200 rounded-2xl transition-all duration-500 hover:border-accent hover:-translate-y-1 hover:shadow-xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 flex items-center justify-center bg-accent/[0.08] rounded-xl text-accent mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-[0.95rem] text-gray-500 leading-relaxed flex-1">{description}</p>
      <span className="mt-5 text-sm font-semibold text-accent">Mehr erfahren →</span>
    </a>
  )
}

const AutomationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="26" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="6" y="26" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="26" y="26" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="14" cy="14" r="3" fill="currentColor"/>
    <circle cx="34" cy="34" r="3" fill="currentColor"/>
    <line x1="17" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <line x1="14" y1="22" x2="14" y2="26" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
  </svg>
)

const AnlagenIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <path d="M18 6L18 12M30 6L30 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 22L22 28L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IndustrieIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M8 20H40" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="14" y="26" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="26" y="26" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const FahrzeugIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <path d="M10 30V22C10 20 11 18 13 17L17 12H31L35 17C37 18 38 20 38 22V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="30" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="15" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="33" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default function Services() {
  const { ref, isVisible } = useInView()

  return (
    <section id="dienstleistungen" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            Was wir tun
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary mb-5">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Ein breites Spektrum an technischen Lösungen – von der Industrieautomation bis zum Fahrzeugservice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard href="#automation" icon={<AutomationIcon />} title="Automation & Software" description="SPS-Programmierung und Elektroschema-Erstellung für Sondermaschinen aller Art." delay={0} />
          <ServiceCard href="#anlagenservice" icon={<AnlagenIcon />} title="Anlagenservice" description="Revisionen, Reparaturen, Umbauten und Montagen an bestehenden Produktionsanlagen." delay={100} />
          <ServiceCard href="#automation" icon={<IndustrieIcon />} title="Industrietechnik" description="Steuerungen und Automationsprodukte für Industrie und Lebensmittelverarbeitung." delay={200} />
          <ServiceCard href="#fahrzeugtechnik" icon={<FahrzeugIcon />} title="Fahrzeugtechnik" description="Professionelle Reparatur- und Servicearbeiten an Personenwagen." delay={300} />
        </div>
      </div>
    </section>
  )
}
