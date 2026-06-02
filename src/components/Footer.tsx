import { Link } from 'react-router'
import { Terminal } from 'lucide-react'

const footerLinks = {
  Produk: [
    { label: 'Fitur', href: '/#features' },
    { label: 'Harga', href: '/pricing' },
    { label: 'Integrasi', href: '/#features' },
    { label: 'Update', href: '/about' },
  ],
  Solusi: [
    { label: 'Retail', href: '/solutions' },
    { label: 'F&B', href: '/solutions' },
    { label: 'Layanan', href: '/solutions' },
    { label: 'Online', href: '/solutions' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Karir', href: '/about' },
    { label: 'Blog', href: '/about' },
    { label: 'Partner', href: '/about' },
  ],
  Dukungan: [
    { label: 'Pusat Bantuan', href: '/contact' },
    { label: 'Kontak', href: '/contact' },
    { label: 'WhatsApp', href: '/contact' },
    { label: 'Status', href: '/about' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/kasirkas-logo.png" alt="KasirKas" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-[#64748b] leading-relaxed mb-6 max-w-xs">
              Aplikasi kasir POS modern untuk bisnis ritel, F&B, dan layanan. Kelola transaksi, stok, dan laporan dalam satu platform.
            </p>
            <div className="bg-[#f1f5f9] rounded-lg p-4 flex items-center gap-3 border border-[#e2e8f0]">
              <Terminal className="w-4 h-4 text-[#0891b2] shrink-0" />
              <input type="email" placeholder="Email untuk berlangganan"
                className="bg-transparent border-none outline-none text-sm text-[#0f172a] placeholder:text-[#94a3b8] flex-1" />
              <button className="bg-gradient-to-r from-[#0e7490] to-[#0891b2] text-white text-xs px-4 py-2 rounded-full transition-all shrink-0">
                Kirim
              </button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.href} className="text-sm text-[#64748b] hover:text-[#0891b2] transition-colors">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#e2e8f0] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#94a3b8]">&copy; {new Date().getFullYear()} KasirKas. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-[#94a3b8] hover:text-[#0891b2] transition-colors">Kebijakan Privasi</Link>
            <Link to="/about" className="text-xs text-[#94a3b8] hover:text-[#0891b2] transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
