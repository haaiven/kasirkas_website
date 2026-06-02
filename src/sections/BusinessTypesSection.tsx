import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Coffee, ShoppingBag, Shirt, Droplets, Scissors, Globe } from 'lucide-react'
import { Link } from 'react-router'

gsap.registerPlugin(ScrollTrigger)

const businesses = [
  { icon: Coffee, name: 'Kafe & Restoran', description: 'Transaksi lebih cepat, menu lebih rapi, dan laporan penjualan harian lebih mudah dibaca.', color: '#0891b2' },
  { icon: ShoppingBag, name: 'Retail & Minimarket', description: 'Pencatatan produk, scan barcode, pemantauan stok, dan kontrol transaksi kasir.', color: '#0e7490' },
  { icon: Shirt, name: 'Butik & Fashion', description: 'Kelola varian produk, ukuran, warna, dan promo dengan mudah.', color: '#06b6d4' },
  { icon: Droplets, name: 'Laundry & Jasa', description: 'Sistem pencatatan transaksi jasa yang lebih jelas dan mudah dicari kembali.', color: '#0891b2' },
  { icon: Scissors, name: 'Salon & Barbershop', description: 'Catat layanan, pelanggan, dan performa penjualan secara lebih terstruktur.', color: '#0e7490' },
  { icon: Globe, name: 'Online-Offline', description: 'Konsolidasikan transaksi dari berbagai kanal penjualan dalam satu sistem.', color: '#06b6d4' },
]

export default function BusinessTypesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll('.biz-card')
    gsap.from(cards, { y: 50, opacity: 0, duration: 0.6, stagger: 0.08,
      scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Untuk Semua Jenis Bisnis</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            Solusi POS yang <span className="font-display italic gradient-text">Fleksibel</span>
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">KasirKas dirancang untuk berbagai jenis usaha. Dari warung kecil hingga bisnis multi-cabang.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {businesses.map((b) => (
            <div key={b.name} className="biz-card card-glass rounded-xl p-6 group cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${b.color}12` }}>
                <b.icon className="w-5 h-5" style={{ color: b.color }} />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] mb-2 group-hover:text-[#0891b2] transition-colors">{b.name}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">{b.description}</p>
              <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0891b2] hover:text-[#0e7490] transition-colors">
                Pelajari <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
