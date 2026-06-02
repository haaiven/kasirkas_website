import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time: number) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => { lenis.destroy() }
  }, [])

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [location.pathname])

  return (
    <div className="min-h-[100dvh] bg-[#f8fafc] text-[#1e293b]">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
