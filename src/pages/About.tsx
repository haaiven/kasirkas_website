import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Shield, Users, Lightbulb, Heart, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: Target, title: 'Fokus pada UMKM', description: 'Kami memahami tantangan unik yang dihadapi pelaku usaha Indonesia dan merancang solusi yang praktis.' },
  { icon: Shield, title: 'Keamanan Data', description: 'Keamanan data transaksi dan bisnis Anda adalah prioritas utama kami dengan enkripsi dan backup otomatis.' },
  { icon: Users, title: 'Dukungan Lokal', description: 'Tim support kami berbasis di Indonesia dan memahami konteks bisnis lokal untuk memberikan bantuan terbaik.' },
  { icon: Lightbulb, title: 'Inovasi Berkelanjutan', description: 'Kami terus mengembangkan fitur baru berdasarkan masukan pengguna dan tren industri terkini.' },
  { icon: Heart, title: 'Kepedulian', description: 'Kami tidak hanya menjual software, tapi juga peduli dengan pertumbuhan dan kesuksesan bisnis Anda.' },
  { icon: TrendingUp, title: 'Bertumbuh Bersama', description: 'KasirKas dirancang untuk berkembang seiring dengan pertumbuhan bisnis Anda.' },
]

const milestones = [
  { year: '2020', event: 'KasirKas didirikan dengan visi mendigitalisasi UMKM Indonesia' },
  { year: '2021', event: 'Peluncuran versi 1.0 dengan fitur transaksi dan laporan dasar' },
  { year: '2022', event: 'Mencapai 1.000 pengguna aktif, peluncuran fitur multi-outlet' },
  { year: '2023', event: 'Integrasi QRIS dan pembayaran digital, 5.000+ pengguna' },
  { year: '2024', event: 'Peluncuran AI analytics dan customer loyalty program' },
  { year: '2025', event: '10.000+ bisnis aktif menggunakan KasirKas di seluruh Indonesia' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const items = section.querySelectorAll('.value-card')
    gsap.from(items, { y: 40, opacity: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (section.contains(t.trigger as Element)) t.kill() }) }
  }, [])

  return (
    <>
      <section className="pt-28 lg:pt-36 pb-16 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Tentang Kami</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance max-w-2xl">
            Membantu Pelaku Usaha Indonesia <span className="font-display italic gradient-text">Berkembang</span>
          </h1>
          <p className="text-base lg:text-lg text-[#64748b] max-w-xl leading-relaxed">
            KasirKas hadir dengan misi mendigitalisasi operasional bisnis UMKM Indonesia melalui teknologi kasir yang mudah digunakan, andal, dan terjangkau.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg shadow-[#0891b2]/5 border border-[#e2e8f0]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="KasirKas team" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">Misi Kami</h2>
              <p className="text-base text-[#334155] leading-relaxed mb-6">
                Membantu pelaku usaha Indonesia menjalankan operasional harian dengan lebih rapi, cepat, dan berbasis data melalui teknologi kasir yang mudah digunakan.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">Kami percaya bahwa setiap bisnis, berapapun ukurannya, berhak mendapatkan akses ke teknologi yang dapat membantu mereka berkembang.</p>
              <div className="grid grid-cols-3 gap-6">
                <div><p className="text-3xl font-display text-[#0891b2]">10K+</p><p className="text-xs text-[#64748b] mt-1">Bisnis Aktif</p></div>
                <div><p className="text-3xl font-display text-[#0891b2]">50+</p><p className="text-xs text-[#64748b] mt-1">Kota di Indonesia</p></div>
                <div><p className="text-3xl font-display text-[#0891b2]">99.9%</p><p className="text-xs text-[#64748b] mt-1">Uptime</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Nilai-Nilai Kami</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
              Prinsip yang Menuntun <span className="font-display italic gradient-text">Setiap Langkah</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="value-card card-glass rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30">
                <div className="w-10 h-10 bg-[#0891b2]/8 rounded-lg flex items-center justify-center mb-4"><v.icon className="w-5 h-5 text-[#0891b2]" /></div>
                <h3 className="text-base font-semibold text-[#0f172a] mb-2">{v.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Perjalanan Kami</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] text-balance">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0891b2]/30 via-[#0891b2]/15 to-transparent lg:-translate-x-px" />
            {milestones.map((m, index) => (
              <div key={m.year} className={`relative flex items-start gap-8 mb-10 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <span className="text-2xl font-display text-[#0891b2]">{m.year}</span>
                  <p className="text-sm text-[#334155] mt-1 leading-relaxed">{m.event}</p>
                </div>
                <div className="w-8 h-8 bg-white border-2 border-[#0891b2]/40 rounded-full shrink-0 relative z-10 flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 bg-[#0891b2] rounded-full" />
                </div>
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
