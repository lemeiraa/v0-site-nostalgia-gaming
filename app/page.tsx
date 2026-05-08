"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServersSection } from "@/components/servers-section"
import { NewsSection } from "@/components/news-section"
import { TeamSection } from "@/components/team-section"
import { CommunitySection } from "@/components/community-section"
import { ShopSection } from "@/components/shop-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [videoEnabled, setVideoEnabled] = useState(true)

  // Carrega a preferencia salva do usuario
  useEffect(() => {
    const savedPreference = localStorage.getItem("csnostalgia-video-enabled")
    if (savedPreference !== null) {
      setVideoEnabled(savedPreference === "true")
    }
  }, [])

  // Salva a preferencia quando o usuario altera
  const toggleVideo = () => {
    const newValue = !videoEnabled
    setVideoEnabled(newValue)
    localStorage.setItem("csnostalgia-video-enabled", String(newValue))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar videoEnabled={videoEnabled} onToggleVideo={toggleVideo} />
      <HeroSection videoEnabled={videoEnabled} />
      <ServersSection />
      <ShopSection />
      <NewsSection />
      <TeamSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
