import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import ParticleGrid from '../components/ParticleGrid'

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <ParticleGrid className="z-0 opacity-40" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#0891b2]/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#0891b2]/5 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-6 text-balance">
          Siap Bikin Operasional Usaha <span className="font-display italic gradient-text">Lebih Rapi?</span>
        </h2>
        <p className="text-base lg:text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl mx-auto">
          Mulai gunakan KasirKas untuk mencatat transaksi, mengelola stok, dan memantau laporan penjualan dari satu sistem yang mudah digunakan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#0891b2]/20">
            Mulai Pakai KasirKas <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-[#0891b2]/30 hover:border-[#0891b2]/60 text-[#0891b2] hover:text-[#0e7490] px-8 py-4 rounded-full text-sm font-medium transition-all bg-white/50">
            Hubungi via WhatsApp
          </Link>
        </div>
        <p className="text-xs text-[#94a3b8] mt-8">Tidak perlu kartu kredit. Trial 14 hari dengan akses penuh.</p>
      </div>
    </section>
  )
}
