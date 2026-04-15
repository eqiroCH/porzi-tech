import { useInView } from '../hooks/useInView'

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    content: <>Churerstrasse 160A<br/>8808 Pfäffikon SZ</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Telefon',
    content: <a href="tel:+41555259808" className="text-accent font-medium hover:text-accent-dark transition-colors">055 525 98 08</a>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Geschäftszeiten',
    content: <>Mo – Fr: 07:30 – 17:00<br/>Sa – So: Geschlossen</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: 'Handelsregister',
    content: <>CHE-137.297.616<br/>HR Schwyz</>,
  },
]

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: cardsRef, isVisible: cardsVisible } = useInView()

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            Kontakt
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary mb-5">
            Sprechen Sie mit uns
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Wir freuen uns auf Ihre Anfrage – ob Industrieprojekt oder Fahrzeugservice.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-accent transition-colors"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                  {item.icon}
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-primary mb-1">{item.label}</strong>
                  <p className="text-[0.95rem] text-gray-500 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-full min-h-[480px] rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.5!2d8.7835!3d47.2005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab1c1c4c5d0e9%3A0x0!2sChurerstrase+160a%2C+8808+Pf%C3%A4ffikon!5e0!3m2!1sde!2sch!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Porzi Tech GmbH"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
