import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import ParticleGrid from '../components/ParticleGrid'

export default function VideoPreviewSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) videoRef.current.pause()
    else videoRef.current.play()
    setIsPlaying(!isPlaying)
  }
  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
      <ParticleGrid className="z-0 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0891b2] mb-4 block">Lihat Cara Kerjanya</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0f172a] mb-4 text-balance">
            KasirKas dalam <span className="font-display italic gradient-text">Aksi</span>
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto">Lihat bagaimana KasirKas membantu bisnis beroperasi lebih efisien dan terkontrol.</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-xl shadow-[#0891b2]/10 border border-[#e2e8f0]">
          <div className="aspect-video bg-[#f1f5f9] relative">
            <video ref={videoRef} src="/kasirkas-video.mp4" className="w-full h-full object-cover" muted loop playsInline preload="metadata" />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/20 backdrop-blur-sm">
                <button onClick={togglePlay} className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-xl">
                  <Play className="w-8 h-8 text-[#0891b2] ml-1" fill="currentColor" />
                </button>
              </div>
            )}
            {isPlaying && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity z-20">
                <button onClick={togglePlay} className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <Pause className="w-4 h-4" />
                </button>
                <button onClick={toggleMute} className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            )}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#0891b2]/25 rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#0891b2]/25 rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#0891b2]/25 rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#0891b2]/25 rounded-br-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
