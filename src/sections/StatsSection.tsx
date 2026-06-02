import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 10000, suffix: '+', label: 'Bisnis Aktif' },
  { value: 50, suffix: '+', label: 'Kota di Indonesia' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 4.8, suffix: '', label: 'Rating Pengguna' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isDecimal = value % 1 !== 0
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value, duration: 2, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      onUpdate: () => { el.textContent = (isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val).toLocaleString()) + suffix },
    })
  }, [value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const items = section.querySelectorAll('.stat-item')
    gsap.from(items, { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
    })
    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => { if (t.trigger === section) t.kill() }) }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#0891b2]/5 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center">
              <p className="text-4xl lg:text-5xl font-display text-[#0f172a] mb-2"><AnimatedCounter value={s.value} suffix={s.suffix} /></p>
              <p className="text-xs uppercase tracking-widest text-[#64748b]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
