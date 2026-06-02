import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, Settings, ShoppingCart, BarChart3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { number: '01', icon: Download, title: 'Daftar & Aktivasi', description: 'Buat akun KasirKas dalam hitungan menit. Tidak perlu instalasi software — langsung berjalan di browser.' },
  { number: '02', icon: Settings, title: 'Setup Produk', description: 'Tambahkan produk, kategori, harga, dan stok awal Anda. Import dari Excel untuk kecepatan maksimal.' },
  { number: '03', icon: ShoppingCart, title: 'Mulai Transaksi', description: 'Kasir langsung bisa mulai melayani pelanggan. Scan barcode, terima pembayaran, cetak struk.' },
  { number: '04', icon: BarChart3, title: 'Pantau & Analisis', description: 'Lihat laporan penjualan real-time dari dashboard. Ambil keputusan bisnis berdasarkan data.' },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const items = section.querySelectorAll('.step-item')
    items.forEach((item, index) => {
      gsap.from(item, { y: 50, opacity: 0, duration: 0.6, delay: index * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
      })
    })
    const line = section.querySelector('.connecting-line')
    if (line) gsap.from(line, { scaleY: 0, transformOrigin: 'top', duration: 1.5, ease: 'power2.out',
      scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#f8fafc] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Cara Kerja</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            Mulai dalam <span className="font-display italic gradient-text">15 Menit</span>
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">Proses setup yang simpel dan cepat. Tidak perlu keahlian teknis khusus.</p>
        </div>
        <div className="relative">
          <div className="connecting-line absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0891b2]/40 via-[#0891b2]/20 to-transparent lg:-translate-x-px" />
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`step-item relative flex items-start gap-6 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0891b2]/30 flex items-center justify-center shadow-md shadow-[#0891b2]/10">
                    <span className="text-sm font-mono font-bold text-[#0891b2]">{step.number}</span>
                  </div>
                </div>
                <div className={`ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`card-glass rounded-xl p-6 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                    <div className={`w-10 h-10 bg-[#0891b2]/8 rounded-lg flex items-center justify-center mb-4 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                      <step.icon className="w-5 h-5 text-[#0891b2]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
