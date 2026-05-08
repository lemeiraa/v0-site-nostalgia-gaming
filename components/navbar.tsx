"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Video, VideoOff } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Servidores", href: "#servidores" },
  { name: "Avisos", href: "#avisos" },
  { name: "Equipe", href: "#equipe" },
  { name: "Comunidade", href: "#comunidade" },
  { name: "Loja", href: "#loja" },
]

interface NavbarProps {
  videoEnabled: boolean
  onToggleVideo: () => void
}

export function Navbar({ videoEnabled, onToggleVideo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.jpeg"
              alt="CS Nostalgia"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-foreground hidden sm:block">
              CS Nostalgia
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onToggleVideo}
              className="ml-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 rounded-lg flex items-center gap-2"
              title={videoEnabled ? "Desativar video de fundo" : "Ativar video de fundo"}
            >
              {videoEnabled ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleVideo}
              title={videoEnabled ? "Desativar video" : "Ativar video"}
            >
              {videoEnabled ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 rounded-lg"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
