import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Apakah KasirKas bisa digunakan di HP?', a: 'Ya, KasirKas dapat diakses melalui browser di smartphone, tablet, laptop, maupun komputer. Tidak perlu instalasi khusus.' },
  { q: 'Apakah bisa cetak struk?', a: 'Tentu. KasirKas mendukung koneksi dengan printer struk thermal melalui USB atau Bluetooth. Anda juga bisa mengirim struk digital via WhatsApp atau email.' },
  { q: 'Apakah data saya aman?', a: 'Keamanan data adalah prioritas kami. KasirKas menggunakan enkripsi SSL, backup otomatis harian, dan penyimpanan di server cloud bersertifikasi ISO 27001.' },
  { q: 'Apakah bisa digunakan oleh beberapa kasir?', a: 'Ya, paket Growth dan Business mendukung multi-kasir. Setiap kasir memiliki akun sendiri dan owner bisa memantau performa masing-masing.' },
  { q: 'Apakah ada bantuan onboarding?', a: 'Kami menyediakan panduan pengguna lengkap, video tutorial, dan tim support yang siap membantu dari proses setup hingga operasional harian.' },
  { q: 'Bisakah saya coba dulu sebelum berlangganan?', a: 'Tentu! Anda bisa menggunakan paket Starter secara gratis tanpa batas waktu. Untuk fitur premium, tersedia trial 14 hari dengan akses penuh.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e2e8f0]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-sm lg:text-base font-medium text-[#334155] group-hover:text-[#0891b2] transition-colors pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#94a3b8] shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-[#0891b2]' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-[#64748b] leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Pertanyaan Umum</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] text-balance">
            Ada Pertanyaan? <span className="font-display italic gradient-text">Kami Punya Jawabannya</span>
          </h2>
        </div>
        <div className="card-glass rounded-xl px-6 lg:px-8">
          {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </div>
    </section>
  )
}
