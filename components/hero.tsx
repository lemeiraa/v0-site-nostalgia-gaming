"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export function Hero() {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'RP1KcZhLPUw',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          modestbranding: 1,
          playlist: 'RP1KcZhLPUw',
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute()
            event.target.playVideo()
          },
          onStateChange: (event: any) => {
            // If video ends or pauses, restart it
            if (event.data === window.YT.PlayerState.ENDED || event.data === window.YT.PlayerState.PAUSED) {
              event.target.playVideo()
            }
          }
        }
      })
    }

    // If API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady()
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video from YouTube */}
      <div className="absolute inset-0 overflow-hidden" ref={containerRef}>
        <div
          id="youtube-player"
          className="absolute"
          style={{
            pointerEvents: 'none',
            width: '300%',
            height: '300%',
            left: '-100%',
            top: '-100%',
          }}
        />
      </div>

      {/* Background effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,154,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,154,225,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <Image
            src="/images/ng-logo.png"
            alt="Nostalgia Gaming Logo"
            width={200}
            height={200}
            className="mx-auto drop-shadow-[0_0_30px_rgba(59,154,225,0.3)]"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Bem-vindo ao{" "}
          <span className="text-primary">Nostalgia Gaming</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Reviva a nostalgia dos jogos clássicos. Servidores dedicados de Counter Strike 1.6 e Left 4 Dead 2 com a melhor comunidade do Brasil.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Servidores Online 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Anti-Cheat Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Comunidade Ativa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
