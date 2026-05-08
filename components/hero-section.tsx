"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  videoEnabled: boolean
}

export function HeroSection({ videoEnabled }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Detecta dispositivos de baixo desempenho
    const checkPerformance = () => {
      // Verifica se e mobile ou se tem pouca memoria
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const hasLowMemory = navigator.deviceMemory !== undefined && navigator.deviceMemory < 4
      const hasSlowConnection = navigator.connection && 
        (navigator.connection as { effectiveType?: string }).effectiveType && 
        ['slow-2g', '2g', '3g'].includes((navigator.connection as { effectiveType?: string }).effectiveType || '')
      
      return isMobile || hasLowMemory || hasSlowConnection
    }
    
    const lowPerf = checkPerformance()
    setIsLowPerformance(lowPerf)
    
    // So carrega o video apos 2 segundos e se nao for baixo desempenho
    if (!lowPerf) {
      const timer = setTimeout(() => setShowVideo(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const scrollToServers = () => {
    document.getElementById("servidores")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - carrega apenas em dispositivos com bom desempenho e se habilitado */}
      <div className="absolute inset-0 z-0">
        {showVideo && videoEnabled && !isLowPerformance ? (
          <iframe
            src="https://www.youtube.com/embed/RP1KcZhLPUw?autoplay=1&mute=1&loop=1&playlist=RP1KcZhLPUw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            title="CS Nostalgia Background Video"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Image
            src="/logo.jpeg"
            alt="CS Nostalgia Logo"
            width={300}
            height={300}
            className="mb-6 rounded-lg glow-blue"
            priority
          />
        </div>
        
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl text-glow">
          Bem-vindo ao CS Nostalgia
        </h1>
        
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          A comunidade brasileira de Counter-Strike 1.6 que une jogadores de todo o país. 
          Reviva a nostalgia dos melhores tempos do CS!
        </p>

        <button
          onClick={scrollToServers}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 mt-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-sm uppercase tracking-widest">Explorar</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
