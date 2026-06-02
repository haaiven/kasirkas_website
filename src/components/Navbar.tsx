import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Fitur', href: '/#features' },
  { label: 'Solusi', href: '/solutions' },
  { label: 'Harga', href: '/pricing' },
  { label: 'Tentang', href: '/about' },
  { label: 'Kontak', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])
  const isHome = location.pathname === '/'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && isHome) {
      e.preventDefault()
      const el = document.getElementById(href.replace('/#', ''))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#e2e8f0]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-32">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src="/kasirkas-logo.png" alt="KasirKas" className="h-20 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-[#64748b] hover:text-[#0891b2] rounded-md transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-[#0891b2]/20 hover:shadow-lg">
                Coba Gratis
              </Link>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[#64748b] hover:text-[#0891b2] transition-colors" aria-label="Toggle menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-lg font-medium text-[#334155] hover:text-[#0891b2] rounded-lg transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
              <Link to="/contact" className="block w-full bg-gradient-to-r from-[#0e7490] to-[#0891b2] text-white px-5 py-3 rounded-full text-center text-sm font-medium">
                Coba Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
