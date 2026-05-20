const navLinks = [
  { href: '#leistungswelten', label: 'Leistungen' },
  { href: '#automation', label: 'Automation' },
  { href: '#fahrzeugtechnik', label: 'Fahrzeugtechnik' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#09111E', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-10">
          {/* Brand */}
          <div>
            <div className="text-[1.4rem] font-black tracking-[-0.03em] mb-3">
              <span className="text-white">PORZI</span>
              <span style={{ color: '#C85C08' }}>TECH</span>
            </div>
            <p className="text-[0.875rem] text-white/45 leading-relaxed max-w-[34ch]">
              Industrielle Automation und Fahrzeugtechnik aus Pfäffikon SZ. Schweizer Qualität seit 1991.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-[0.65rem] uppercase tracking-[0.2em] font-black text-white/30 mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => scrollTo(e, l.href)}
                    className="text-[0.875rem] text-white/50 hover:text-white/85 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.65rem] uppercase tracking-[0.2em] font-black text-white/30 mb-4">
              Kontakt
            </div>
            <address className="not-italic space-y-2">
              <div className="text-[0.875rem] text-white/60 leading-relaxed">
                PorziTech GmbH<br />
                Industriestrasse 12<br />
                8808 Pfäffikon SZ
              </div>
              <a href="tel:+41552200000" className="block text-[0.875rem] text-white/50 hover:text-white/85 transition-colors duration-200 mt-3">
                +41 55 220 00 00
              </a>
              <a href="mailto:info@porzitech.ch" className="block text-[0.875rem] text-white/50 hover:text-white/85 transition-colors duration-200">
                info@porzitech.ch
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[0.72rem] text-white/28">
            © {new Date().getFullYear()} PorziTech GmbH · Pfäffikon SZ · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-4">
            {['Impressum', 'Datenschutz'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.72rem] text-white/28 hover:text-white/55 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
