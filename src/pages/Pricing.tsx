import { useState } from 'react'
import { Check, X, ArrowRight, HelpCircle, Zap, Shield, Headphones, BarChart3 } from 'lucide-react'
import { Link } from 'react-router'

const plans = [
  { name: 'Starter', price: 'Gratis', priceNote: '', period: 'selamanya', description: 'Cocok untuk usaha baru yang ingin mulai mencatat transaksi secara digital.', features: ['Transaksi tak terbatas', 'Manajemen produk (100 produk)', 'Laporan penjualan harian', '1 outlet & 1 kasir', 'Struk digital & cetak', 'Akses via HP, tablet, laptop', 'Support via email'], cta: 'Mulai Gratis', icon: Zap },
  { name: 'Growth', price: 'Rp149rb', priceNote: 'Rp119rb/bulan jika tahunan', period: 'bulan', description: 'Untuk bisnis aktif yang butuh kontrol stok, analitik, dan multi-kasir.', features: ['Semua fitur Starter', 'Manajemen stok lengkap', 'Laporan analitik mendalam', 'Multi-kasir (hingga 5)', 'Integrasi QRIS & kartu', 'Customer database', 'Promo & diskon otomatis', 'Support via WhatsApp'], highlighted: true, cta: 'Pilih Growth', icon: BarChart3 },
  { name: 'Business', price: 'Rp349rb', priceNote: 'Rp279rb/bulan jika tahunan', period: 'bulan', description: 'Untuk bisnis multi-outlet yang butuh kontrol penuh dan integrasi sistem.', features: ['Semua fitur Growth', 'Multi-outlet (hingga 10)', 'API & integrasi sistem', 'Customer loyalty program', 'Manajemen tim & shift', 'Advanced analytics', 'Onboarding & training gratis', 'Support prioritas 24/7', 'Dedicated account manager'], cta: 'Hubungi Kami', icon: Shield },
]

const comparisonFeatures = [
  { name: 'Jumlah Transaksi', starter: 'Tak terbatas', growth: 'Tak terbatas', business: 'Tak terbatas' },
  { name: 'Outlet', starter: '1', growth: '1', business: 'Hingga 10' },
  { name: 'Kasir / Pengguna', starter: '1', growth: '5', business: 'Tak terbatas' },
  { name: 'Produk', starter: '100', growth: 'Tak terbatas', business: 'Tak terbatas' },
  { name: 'Manajemen Stok', starter: 'Dasar', growth: 'Lengkap', business: 'Lengkap + Forecasting' },
  { name: 'Laporan Penjualan', starter: 'Harian', growth: 'Analitik mendalam', business: 'Advanced + AI Insights' },
  { name: 'Integrasi QRIS', starter: false, growth: true, business: true },
  { name: 'Integrasi Kartu', starter: false, growth: true, business: true },
  { name: 'Multi-Outlet', starter: false, growth: false, business: true },
  { name: 'Customer Database', starter: false, growth: true, business: true },
  { name: 'Loyalty Program', starter: false, growth: false, business: true },
  { name: 'API Access', starter: false, growth: false, business: true },
  { name: 'Backup Otomatis', starter: 'Harian', growth: 'Harian', business: 'Real-time' },
  { name: 'Support', starter: 'Email (1x24h)', growth: 'WhatsApp (4 jam)', business: '24/7 Prioritas' },
  { name: 'Onboarding', starter: false, growth: 'Video tutorial', business: 'Live training' },
]

const priceFaqs = [
  { q: 'Apakah ada biaya setup awal?', a: 'Tidak ada biaya setup untuk semua paket. Untuk paket Business, kami bahkan memberikan onboarding dan training gratis.' },
  { q: 'Bisakah upgrade atau downgrade paket?', a: 'Tentu! Anda bisa upgrade kapan saja. Untuk downgrade, bisa dilakukan di akhir periode berlangganan.' },
  { q: 'Apakah ada kontrak berlangganan?', a: 'Tidak ada kontrak. Anda bisa berhenti berlangganan kapan saja tanpa denda.' },
  { q: 'Metode pembayaran apa yang diterima?', a: 'Kami menerima pembayaran via transfer bank, QRIS, kartu kredit, dan GoPay.' },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const getPrice = (price: string) => {
    if (price === 'Gratis') return 'Gratis'
    if (billingCycle === 'yearly') return price.replace(/[\d.]+/, (m) => String(Math.floor(parseInt(m.replace('.', '')) * 0.8)))
    return price
  }

  return (
    <>
      <section className="pt-28 lg:pt-36 pb-16 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Harga</span>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
              Harga yang <span className="font-display italic gradient-text">Jelas</span> dan Transparan
            </h1>
            <p className="text-base lg:text-lg text-[#64748b] max-w-xl mx-auto">Tidak ada biaya tersembunyi. Pilih paket yang sesuai, mulai dari gratis hingga fitur enterprise.</p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-[#0891b2] text-white shadow-md shadow-[#0891b2]/20' : 'bg-white text-[#64748b] border border-[#e2e8f0] hover:text-[#0891b2]'}`}>Bulanan</button>
            <button onClick={() => setBillingCycle('yearly')} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-[#0891b2] text-white shadow-md shadow-[#0891b2]/20' : 'bg-white text-[#64748b] border border-[#e2e8f0] hover:text-[#0891b2]'}`}>Tahunan <span className="text-amber-500 font-semibold">Hemat 20%</span></button>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`card-glass rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#0891b2]/5 hover:border-[#0891b2]/30 relative flex flex-col ${p.highlighted ? 'border-[#0891b2]/30 ring-1 ring-[#0891b2]/15 scale-[1.02]' : ''}`}>
                {p.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] text-white text-[10px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-[#0891b2]/20">Terpopuler</span>}
                <div className="w-10 h-10 bg-[#0891b2]/8 rounded-lg flex items-center justify-center mb-4"><p.icon className="w-5 h-5 text-[#0891b2]" /></div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-1"><span className="text-4xl font-light text-[#0f172a]">{getPrice(p.price)}</span>{p.price !== 'Gratis' && <span className="text-sm text-[#64748b]">/{billingCycle === 'yearly' ? 'bulan (tahunan)' : 'bulan'}</span>}</div>
                {p.priceNote && billingCycle === 'yearly' && <p className="text-xs text-[#0891b2]/70 mb-3">{p.priceNote}</p>}
                <p className="text-sm text-[#64748b] mb-6">{p.description}</p>
                <ul className="space-y-3 mb-8 flex-1">{p.features.map((f) => <li key={f} className="flex items-start gap-3"><Check className="w-4 h-4 text-[#0891b2] shrink-0 mt-0.5" /><span className="text-sm text-[#334155]">{f}</span></li>)}</ul>
                <Link to="/contact" className={`block w-full text-center py-3.5 rounded-full text-sm font-medium transition-all ${p.highlighted ? 'bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white shadow-md shadow-[#0891b2]/15' : 'border border-[#0891b2]/30 text-[#0891b2] hover:bg-[#0891b2]/5'}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-2 text-balance">Perbandingan Fitur Lengkap</h2>
            <p className="text-sm text-[#64748b]">Bandingkan fitur antar paket secara detail</p>
          </div>
          <div className="card-glass rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#e2e8f0]">
                  <th className="text-left px-6 py-4 font-medium text-[#64748b] w-[35%]">Fitur</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#0f172a] w-[21%]">Starter</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#0891b2] w-[21%]">Growth</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#0f172a] w-[21%]">Business</th>
                </tr></thead>
                <tbody>{comparisonFeatures.map((f, i) => (
                  <tr key={f.name} className={`border-b border-[#f1f5f9] ${i % 2 === 0 ? 'bg-[#f8fafc]' : ''}`}>
                    <td className="px-6 py-3.5 text-[#334155] font-medium">{f.name}</td>
                    {(['starter', 'growth', 'business'] as const).map((col) => (
                      <td key={col} className="px-4 py-3.5 text-center">{typeof f[col] === 'boolean' ? (f[col] ? <Check className="w-4 h-4 text-[#0891b2] mx-auto" /> : <X className="w-4 h-4 text-[#cbd5e1] mx-auto" />) : <span className={`text-xs ${col === 'growth' ? 'text-[#0891b2]' : 'text-[#64748b]'}`}>{f[col]}</span>}</td>
                    ))}
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">Mengapa <span className="font-display italic gradient-text">Harga</span> Kami Berbeda?</h2>
            <p className="text-sm text-[#64748b] max-w-xl mx-auto">Kami percaya transparansi harga membangun kepercayaan. Tidak ada biaya tersembunyi, tidak ada sikap memaksa.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ icon: Zap, title: 'Gratis Selamanya', desc: 'Paket Starter benar-benar gratis tanpa batasan waktu.' }, { icon: Headphones, title: 'Support Real', desc: 'Tim support Indonesia yang responsif dan ramah.' }, { icon: BarChart3, title: 'Tak Terbatas', desc: 'Transaksi tak terbatas di semua paket termasuk yang gratis.' }, { icon: Shield, title: 'Data Aman', desc: 'Enkripsi SSL, backup otomatis, dan sertifikasi ISO 27001.' }].map((item) => (
              <div key={item.title} className="card-glass rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-[#0891b2]/8 rounded-lg flex items-center justify-center mx-auto mb-4"><item.icon className="w-5 h-5 text-[#0891b2]" /></div>
                <h3 className="text-sm font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">Pertanyaan Seputar <span className="font-display italic gradient-text">Harga</span></h2>
          </div>
          <div className="card-glass rounded-xl px-6 lg:px-8">
            {priceFaqs.map((faq, i) => (
              <div key={i} className="border-b border-[#f1f5f9] last:border-0">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="text-sm font-medium text-[#334155] group-hover:text-[#0891b2] transition-colors pr-4">{faq.q}</span>
                  <span className={`text-lg transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-[#0891b2]' : 'text-[#94a3b8]'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}><p className="text-sm text-[#64748b] leading-relaxed">{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <HelpCircle className="w-10 h-10 text-[#0891b2] mx-auto mb-4" />
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4">Masih Ragu?</h2>
          <p className="text-sm text-[#64748b] mb-6">Coba paket Starter gratis selamanya, atau trial 14 hari paket Growth & Business. Tanpa kartu kredit.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md shadow-[#0891b2]/20">Mulai Trial 14 Hari <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#0891b2]/30 text-[#0891b2] hover:bg-[#0891b2]/5 px-6 py-3.5 rounded-full text-sm font-medium transition-all">Konsultasi Gratis</Link>
          </div>
        </div>
      </section>
    </>
  )
}
