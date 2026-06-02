import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { number: '01', label: 'TRANSAKSI', title: 'Transaksi Cepat', description: 'Proses penjualan, diskon, pajak, pembayaran, dan cetak struk dalam alur yang sederhana untuk kasir.', image: '/3d-transaksi.png' },
  { number: '02', label: 'STOK', title: 'Stok Terkendali', description: 'Pantau pergerakan stok secara real-time. Tahu kapan harus restock sebelum barang habis.', image: '/3d-stok.png' },
  { number: '03', label: 'LAPORAN', title: 'Laporan Real-Time', description: 'Pantau penjualan harian, produk terlaris, dan aktivitas kasir tanpa menunggu rekap manual.', image: '/3d-laporan.png' },
  { number: '04', label: 'MULTI-OUTLET', title: 'Siap Bertumbuh', description: 'Cocok untuk satu toko hingga banyak outlet. Mulai dari operasional sederhana dan berkembang.', image: '/3d-multioutlet.png' },
]

export default function FeatureCards3D() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll('.feature-3d-card')
    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? -80 : 80
      gsap.from(card, { x: direction, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none none' },
      })
    })
    const images = section.querySelectorAll('.feature-3d-img')
    images.forEach((img) => { gsap.to(img, { y: -8, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1 }) })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (section.contains(t.trigger as Element)) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Solusi Lengkap</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            POS untuk Bisnis, <span className="font-display italic gradient-text">Tanpa Batas.</span>
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">Semua fitur yang Anda butuhkan untuk mengelola bisnis dalam satu platform yang terintegrasi.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.number} className="feature-3d-card card-glass rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30">
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[#0891b2]/60">{f.number}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0891b2]/80">{f.label}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-medium text-[#0f172a] mb-3 group-hover:text-[#0891b2] transition-colors">{f.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">{f.description}</p>
                <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                  <div className="feature-3d-img absolute inset-0 flex items-center justify-center">
                    <img src={f.image} alt={f.title} className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
