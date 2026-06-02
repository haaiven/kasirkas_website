import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { Check } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  { name: 'Starter', price: 'Gratis', period: 'selamanya', description: 'Cocok untuk usaha baru, satu toko, satu kasir.', features: ['Transaksi tak terbatas', 'Manajemen produk dasar', 'Laporan penjualan harian', '1 outlet & 1 kasir', 'Support email'], cta: 'Mulai Gratis' },
  { name: 'Growth', price: 'Rp149rb', period: 'bulan', description: 'Cocok untuk bisnis aktif dengan stok dan laporan lebih kompleks.', features: ['Semua fitur Starter', 'Manajemen stok lengkap', 'Laporan analitik mendalam', 'Multi-kasir (hingga 5)', 'Integrasi pembayaran', 'Support WhatsApp'], highlighted: true, cta: 'Pilih Growth' },
  { name: 'Business', price: 'Rp349rb', period: 'bulan', description: 'Cocok untuk multi-outlet dan kebutuhan operasional lanjutan.', features: ['Semua fitur Growth', 'Multi-outlet (hingga 10)', 'API & integrasi sistem', 'Customer loyalty', 'Manajemen tim & shift', 'Support prioritas 24/7', 'Dedicated account manager'], cta: 'Hubungi Kami' },
]

export default function PricingPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll('.pricing-card')
    gsap.from(cards, { y: 50, opacity: 0, duration: 0.6, stagger: 0.15,
      scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Harga Transparan</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            Pilih Paket yang <span className="font-display italic gradient-text">Cocok</span> untuk Bisnis Anda
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">Tidak ada biaya tersembunyi. Upgrade atau downgrade kapan saja sesuai kebutuhan.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`pricing-card card-glass rounded-xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30 relative ${p.highlighted ? 'border-[#0891b2]/30 ring-1 ring-[#0891b2]/15' : ''}`}>
              {p.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] text-white text-[10px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full">Terpopuler</span>}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-3"><span className="text-4xl font-light text-[#0f172a]">{p.price}</span><span className="text-sm text-[#64748b]">/{p.period}</span></div>
              <p className="text-sm text-[#64748b] mb-6">{p.description}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => <li key={f} className="flex items-start gap-3"><Check className="w-4 h-4 text-[#0891b2] shrink-0 mt-0.5" /><span className="text-sm text-[#334155]">{f}</span></li>)}
              </ul>
              <Link to="/contact" className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all ${p.highlighted ? 'bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white shadow-md shadow-[#0891b2]/15' : 'border border-[#0891b2]/30 text-[#0891b2] hover:bg-[#0891b2]/5'}`}>{p.cta}</Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-[#64748b]">Butuh solusi khusus? <Link to="/contact" className="text-[#0891b2] font-medium hover:underline">Hubungi tim kami</Link></p>
        </div>
      </div>
    </section>
  )
}
