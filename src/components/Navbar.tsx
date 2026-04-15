import { useState, useEffect } from 'react'

const links = [
  { href: '#dienstleistungen', label: 'Dienstleistungen' },
  { href: '#automation', label: 'Automation' },
  { href: '#anlagenservice', label: 'Anlagenservice' },
  { href: '#fahrzeugtechnik', label: 'Fahrzeugtechnik' },
  { href: '#ueber-uns', label: 'Über uns' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/5
        ${scrolled ? 'bg-primary/98 shadow-[0_4px_30px_rgba(0,0,0,0.15)]' : 'bg-primary/95'}
        backdrop-blur-xl`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-[1.35rem] font-extrabold tracking-tight"
        >
          <span className="text-white">PORZI</span>
          <span className="text-accent">TECH</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === link.href.slice(1)
                    ? 'text-white bg-white/[0.08]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              onClick={(e) => handleClick(e, '#kontakt')}
              className="ml-1 px-5 py-2 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-dark transition-colors"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[72px] inset-x-0 bg-primary/[0.98] backdrop-blur-xl border-b border-white/5
          transition-all duration-300
          ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => handleClick(e, '#kontakt')}
            className="mt-2 px-4 py-3 rounded-lg bg-accent text-white font-semibold text-center hover:bg-accent-dark transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  )
}
