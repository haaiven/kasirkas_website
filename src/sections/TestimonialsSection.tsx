import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  { name: 'Pukis Kota Baru', role: 'Usaha F&B · Yogyakarta', text: 'KasirKas sangat membantu operasional kami. Sebelumnya kami catat manual di buku, sekarang semua transaksi tercatat otomatis. Stok bahan baku juga lebih terkontrol.', rating: 5, image: '/pukis-kota-baru.jpg', metric: '70%', metricLabel: 'Lebih cepat tutup buku' },
  { name: 'Pukis Kota Baru', role: 'Owner · Yogyakarta', text: 'Yang kami suka dari KasirKas adalah fitur laporan real-time. Kami bisa pantau penjualan harian langsung dari HP. Produk mana yang paling laris, semua bisa dilihat dengan jelas.', rating: 5, image: '/pukis-kota-baru.jpg', metric: '3x', metricLabel: 'Lebih efisien beroperasi' },
  { name: 'Pukis Kota Baru', role: 'Tim Operasional · Yogyakarta', text: 'Integrasi QRIS dan pembayaran digital sangat membantu. Pelanggan lebih puas karena bisa bayar dengan berbagai metode. Struk digital via WhatsApp juga jadi nilai tambah!', rating: 5, image: '/pukis-kota-baru.jpg', metric: '40%', metricLabel: 'Pelanggan datang kembali' },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll('.testimonial-card')
    gsap.from(cards, { y: 40, opacity: 0, duration: 0.6, stagger: 0.15,
      scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Kisah Sukses</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            <span className="font-display italic gradient-text">Pukis Kota Baru</span> Bertransformasi
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">Dari pencatatan manual ke sistem digital — lihat bagaimana Pukis Kota Baru mengoptimalkan operasional dengan KasirKas.</p>
        </div>
        <div className="flex items-center justify-center mb-12">
          <div className="card-glass rounded-2xl px-8 py-4 flex items-center gap-4 border border-[#e2e8f0]">
            <img src="/pukis-kota-baru.jpg" alt="Pukis Kota Baru" className="w-14 h-14 rounded-xl object-cover ring-2 ring-[#0891b2]/20" />
            <div>
              <p className="text-lg font-semibold text-[#0f172a]">Pukis Kota Baru</p>
              <p className="text-xs text-[#64748b]">Yogyakarta · Usaha F&B</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card card-glass rounded-xl p-8 relative transition-all duration-500 hover:shadow-lg hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30">
              <Quote className="w-8 h-8 text-[#0891b2] absolute top-6 right-6 opacity-20" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-amber-500" fill="currentColor" />)}
              </div>
              <div className="mb-4 inline-flex items-center gap-2 bg-[#0891b2]/8 rounded-full px-3 py-1.5">
                <span className="text-xl font-display text-[#0891b2]">{t.metric}</span>
                <span className="text-[10px] text-[#64748b] uppercase tracking-wider">{t.metricLabel}</span>
              </div>
              <p className="text-sm text-[#334155] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#0891b2]/20" />
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{t.name}</p>
                  <p className="text-xs text-[#64748b]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
