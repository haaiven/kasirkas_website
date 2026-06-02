import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router'
import { ArrowRight, Play } from 'lucide-react'
import ParticleGrid from '../components/ParticleGrid'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    gsap.fromTo(video, { scale: 1.15 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to(contentRef.current, {
      opacity: 0, y: -60, ease: 'none',
      scrollTrigger: { trigger: section, start: '30% top', end: '80% top', scrub: true },
    })
    return () => {
      ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() })
    }
  }, [])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    const elements = content.querySelectorAll('.hero-animate')
    gsap.from(elements, { y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/hero-bg.jpg">
          <source src="/kasirkas-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#f0f9ff]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/40 via-transparent to-[#f8fafc]" />
      </div>
      <ParticleGrid className="z-[1] opacity-70" />
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <span className="hero-animate inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-6">
          Aplikasi Kasir POS Modern
        </span>
        <h1 className="hero-animate text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0f172a] mb-6 text-balance">
          Lebih Mudah. <span className="font-display italic gradient-text">Lebih Cepat.</span><br />
          Lebih Terkontrol.
        </h1>
        <p className="hero-animate text-base lg:text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl mx-auto">
          Dari meja kasir hingga laporan penjualan. KasirKas adalah solusi POS untuk bisnis ritel, F&B, dan layanan di Indonesia.
        </p>
        <div className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e7490] to-[#0891b2] hover:from-[#155e75] hover:to-[#0e7490] text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#0891b2]/20">
            Coba KasirKas Sekarang <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/solutions" className="inline-flex items-center gap-2 border border-[#0891b2]/30 hover:border-[#0891b2]/60 text-[#0891b2] hover:text-[#0e7490] px-8 py-4 rounded-full text-sm font-medium transition-all backdrop-blur-sm bg-white/50">
            <Play className="w-4 h-4" /> Lihat Demo
          </Link>
        </div>
        <div className="hero-animate flex items-center justify-center gap-8 text-xs text-[#64748b]">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#0891b2] animate-pulse" /> 10.000+ bisnis aktif</span>
          <span className="w-px h-3 bg-[#cbd5e1]" />
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> 4.8 rating pengguna</span>
          <span className="w-px h-3 bg-[#cbd5e1]" />
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" /> 50+ kota Indonesia</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafc] to-transparent z-[2]" />
    </section>
  )
}
