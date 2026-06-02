import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Coffee, ShoppingBag, Shirt, Droplets, Scissors, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  { icon: Coffee, industry: 'F&B', title: 'Kafe & Restoran', subtitle: 'Pesanan ramai, menu berubah, split payment', description: 'KasirKas membantu transaksi lebih cepat, menu lebih rapi, dan laporan penjualan harian lebih mudah dibaca.', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop', features: ['Manajemen menu & kategori', 'Split payment & bill sharing', 'Laporan shift kasir', 'Manajemen meja & area', 'Integrasi delivery platform'], color: '#0891b2' },
  { icon: ShoppingBag, industry: 'Retail', title: 'Retail & Minimarket', subtitle: 'Banyak SKU, barcode, harga promo', description: 'KasirKas membantu pencatatan produk, scan barcode, pemantauan stok, dan kontrol transaksi kasir.', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop', features: ['Scan barcode produk', 'Manajemen promo & diskon', 'Pemantauan stok real-time', 'Multi-varian produk', 'Laporan produk terlaris'], color: '#0e7490' },
  { icon: Shirt, industry: 'Fashion', title: 'Butik & Fashion', subtitle: 'Varian produk, ukuran, warna', description: 'Kelola varian produk, ukuran, warna, dan promo dengan mudah dalam satu sistem.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop', features: ['Manajemen varian (ukuran, warna)', 'Katalog produk digital', 'Loyalty program pelanggan', 'Laporan margin per produk', 'Manajemen supplier'], color: '#06b6d4' },
  { icon: Droplets, industry: 'Jasa', title: 'Laundry & Jasa', subtitle: 'Order layanan, status pekerjaan', description: 'Sistem pencatatan transaksi jasa yang lebih jelas dan mudah dicari kembali.', image: 'https://images.unsplash.com/photo-1517677208171-0bc163db9ece?w=800&h=500&fit=crop', features: ['Tracking status order', 'Pembayaran DP & pelunasan', 'Riwayat pelanggan', 'Notifikasi via WhatsApp', 'Laporan layanan terpopuler'], color: '#0891b2' },
  { icon: Scissors, industry: 'Services', title: 'Salon & Barbershop', subtitle: 'Jadwal layanan, komisi staf', description: 'Bantu mencatat layanan, pelanggan, dan performa penjualan secara lebih terstruktur.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop', features: ['Manajemen janji temu', 'Komisi staf otomatis', 'Paket layanan & membership', 'Riwayat pelanggan', 'Laporan performa harian'], color: '#0e7490' },
  { icon: Globe, industry: 'Online', title: 'Online-Offline Business', subtitle: 'Penjualan dari berbagai kanal', description: 'Konsolidasikan transaksi dari berbagai kanal penjualan dalam satu sistem terpadu.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', features: ['Sinkronisasi channel penjualan', 'Manajemen order online', 'Pelaporan terintegrasi', 'Inventori terpusat', 'Dashboard multi-channel'], color: '#06b6d4' },
]

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    section.querySelectorAll('.solution-card').forEach((item) => {
      gsap.from(item, { y: 50, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: item, start: 'top 80%', toggleActions: 'play none none none' },
      })
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (section.contains(t.trigger as Element)) t.kill() }) }
  }, [])

  return (
    <>
      <section className="pt-28 lg:pt-36 pb-16 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Solusi Bisnis</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance max-w-2xl">
            Solusi POS untuk <span className="font-display italic gradient-text">Semua Jenis</span> Bisnis
          </h1>
          <p className="text-base lg:text-lg text-[#64748b] max-w-xl">KasirKas hadir dengan fitur yang disesuaikan untuk kebutuhan spesifik masing-masing industri.</p>
        </div>
      </section>

      <section ref={sectionRef} className="pb-20 lg:pb-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((s, i) => (
              <div key={s.title} className="solution-card grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] shadow-lg shadow-[#0891b2]/5 border border-[#e2e8f0]">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: s.color }}>{s.industry}</div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${s.color}12` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-light text-[#0f172a] mb-2">{s.title}</h2>
                  <p className="text-sm text-[#64748b] mb-4">{s.subtitle}</p>
                  <p className="text-base text-[#334155] leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f) => <li key={f} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 mt-0" style={{ color: s.color }} /><span className="text-sm text-[#334155]">{f}</span></li>)}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#0891b2] hover:text-[#0e7490] transition-colors">
                    Jadwalkan Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            Tidak Menemukan Industri Anda?
          </h2>
          <p className="text-base text-[#64748b] mb-8">KasirKas dapat disesuaikan untuk hampir semua jenis usaha. Hubungi kami untuk diskusi lebih lanjut.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md shadow-[#0891b2]/20">
            Konsultasi Gratis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
