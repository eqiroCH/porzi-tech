export default function Footer() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0c1f33] pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          <div>
            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="inline-block text-xl font-extrabold mb-4">
              <span className="text-white">PORZI</span>
              <span className="text-accent">TECH</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-[320px]">
              Ihr kompetenter Partner für Industrieautomation, Anlagenservice und Fahrzeugtechnik in Pfäffikon SZ.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Dienstleistungen</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#automation" onClick={(e) => scrollTo(e, '#automation')} className="text-white/50 text-sm hover:text-accent-light transition-colors">Automation & Software</a></li>
              <li><a href="#anlagenservice" onClick={(e) => scrollTo(e, '#anlagenservice')} className="text-white/50 text-sm hover:text-accent-light transition-colors">Anlagenservice</a></li>
              <li><a href="#fahrzeugtechnik" onClick={(e) => scrollTo(e, '#fahrzeugtechnik')} className="text-white/50 text-sm hover:text-accent-light transition-colors">Fahrzeugtechnik</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Unternehmen</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#ueber-uns" onClick={(e) => scrollTo(e, '#ueber-uns')} className="text-white/50 text-sm hover:text-accent-light transition-colors">Über uns</a></li>
              <li><a href="#kontakt" onClick={(e) => scrollTo(e, '#kontakt')} className="text-white/50 text-sm hover:text-accent-light transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Kontakt</h4>
            <ul className="flex flex-col gap-2 text-white/50 text-sm">
              <li>Churerstrasse 160A</li>
              <li>8808 Pfäffikon SZ</li>
              <li><a href="tel:+41555259808" className="hover:text-accent-light transition-colors">055 525 98 08</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-5 text-center">
          <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} Porzi Tech GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
