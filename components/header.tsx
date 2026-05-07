"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/images/ng-logo.png"
            alt="Nostalgia Gaming"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg text-foreground hidden sm:block">
            Nostalgia Gaming
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#servidores"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Servidores
          </Link>
          <Link
            href="#loja"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Loja
          </Link>
          <Link
            href="#comunidade"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Comunidade
          </Link>
          <Link
            href="#como-jogar"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Como Jogar
          </Link>
        </nav>
      </div>
    </header>
  )
}
