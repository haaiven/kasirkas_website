import { useState } from 'react'
import { Send, MessageCircle, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

const businessTypes = ['Retail / Minimarket', 'Kafe / Restoran', 'Laundry / Jasa', 'Salon / Barbershop', 'Butik / Fashion', 'Online Shop', 'Lainnya']
const needs = ['Transaksi & Kasir', 'Manajemen Stok', 'Laporan Penjualan', 'Multi-Outlet', 'Pembayaran Digital', 'Loyalty Program', 'Lainnya']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', whatsapp: '', businessName: '', businessType: '', outlets: '1', need: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="pt-28 lg:pt-36 pb-20 min-h-[80dvh] flex items-center bg-[#f8fafc]">
        <div className="max-w-lg mx-auto px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-[#0891b2] mx-auto mb-6" />
          <h1 className="text-2xl lg:text-3xl font-light text-[#0f172a] mb-4">Terima Kasih!</h1>
          <p className="text-base text-[#64748b] mb-8">Tim kami akan menghubungi Anda melalui WhatsApp dalam waktu 1x24 jam untuk membahas kebutuhan bisnis Anda.</p>
          <a href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all">Kembali ke Beranda</a>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pt-28 lg:pt-36 pb-16 bg-[#f8fafc] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Mulai Sekarang</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance max-w-2xl">
            Siap Bikin Operasional Usaha <span className="font-display italic gradient-text">Lebih Rapi?</span>
          </h1>
          <p className="text-base lg:text-lg text-[#64748b] max-w-xl">Isi formulir di bawah dan tim kami akan menghubungi Anda untuk membantu memulai.</p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Nama Lengkap <span className="text-[#0891b2]">*</span></label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Nama Anda" className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a] placeholder:text-[#94a3b8]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Nomor WhatsApp <span className="text-[#0891b2]">*</span></label>
                    <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="0812xxxxxxx" className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a] placeholder:text-[#94a3b8]" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Nama Usaha</label>
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Nama bisnis/toko Anda" className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a] placeholder:text-[#94a3b8]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Jenis Usaha</label>
                    <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a]">
                      <option value="">Pilih jenis usaha</option>
                      {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Jumlah Outlet</label>
                    <select name="outlets" value={formData.outlets} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a]">
                      <option value="1">1 Outlet</option>
                      <option value="2-3">2-3 Outlet</option>
                      <option value="4-10">4-10 Outlet</option>
                      <option value="10+">Lebih dari 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">Kebutuhan Utama</label>
                    <select name="need" value={formData.need} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a]">
                      <option value="">Pilih kebutuhan</option>
                      {needs.map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">Pesan Tambahan</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Ceritakan kebutuhan bisnis Anda..." className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/10 outline-none transition-colors text-sm text-[#0f172a] placeholder:text-[#94a3b8] resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-md shadow-[#0891b2]/20">
                  <Send className="w-4 h-4" /> Kirim Pesan
                </button>
              </form>
            </div>
            <div className="lg:col-span-2">
              <div className="card-glass rounded-xl p-8">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-6">Informasi Kontak</h3>
                <div className="space-y-5">
                  {[
                    { icon: MessageCircle, label: 'WhatsApp', value: '087877949528', color: 'text-[#0891b2]' },
                    { icon: Mail, label: 'Email', value: 'ptinovasijayaakselera@gmail.com', color: 'text-[#0891b2]' },
                    { icon: Phone, label: 'Telepon', value: '+62 21-1234-5678', color: 'text-[#0891b2]' },
                    { icon: MapPin, label: 'Alamat', value: 'Jl. H. Agus Salim No.32B, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, DKI Jakarta 10340', color: 'text-[#0891b2]' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0891b2]/8 rounded-lg flex items-center justify-center shrink-0"><item.icon className={`w-5 h-5 ${item.color}`} /></div>
                      <div><p className="text-sm font-medium text-[#0f172a]">{item.label}</p><p className="text-sm text-[#64748b]">{item.value}</p></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                  <p className="text-sm font-medium text-[#0f172a] mb-3">Jam Operasional</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-[#64748b]">Senin - Jumat</span><span className="text-[#334155]">08:00 - 18:00 WIB</span></div>
                    <div className="flex justify-between text-sm"><span className="text-[#64748b]">Sabtu</span><span className="text-[#334155]">09:00 - 15:00 WIB</span></div>
                    <div className="flex justify-between text-sm"><span className="text-[#64748b]">Minggu</span><span className="text-[#334155]">Support Online</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
