"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Gamepad2, Skull, Droplets, Flag } from "lucide-react"

interface ServerCardProps {
  name: string
  ip: string
  game: string
  type: "main" | "fy" | "zombie" | "l4d2"
  isPrimary?: boolean
  gameTrackerUrl?: string
  gameTrackerImage?: string
}

const gameIcons = {
  main: Gamepad2,
  fy: Droplets,
  zombie: Skull,
  l4d2: Flag,
}

const gameColors = {
  main: "bg-primary text-primary-foreground",
  fy: "bg-cyan-600 text-white",
  zombie: "bg-emerald-600 text-white",
  l4d2: "bg-red-600 text-white",
}

export function ServerCard({ name, ip, game, type, isPrimary = false, gameTrackerUrl, gameTrackerImage }: ServerCardProps) {
  const [copied, setCopied] = useState(false)
  const Icon = gameIcons[type]

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(ip)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${isPrimary ? "border-primary/30 ring-1 ring-primary/20" : ""}`}>
      {isPrimary && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
            Principal
          </Badge>
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${gameColors[type]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg font-bold text-foreground">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{game}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <code className="flex-1 bg-secondary px-3 py-2 rounded-md text-sm font-mono text-foreground">
            {ip}
          </code>
          <Button
            size="sm"
            variant="outline"
            onClick={copyToClipboard}
            className="shrink-0 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Clique no botão para copiar o IP
        </p>
        
        {gameTrackerUrl && gameTrackerImage && (
          <div className="mt-4 flex justify-center">
            <a href={gameTrackerUrl} target="_blank" rel="noopener noreferrer">
              <img src={gameTrackerImage} alt={`${name} GameTracker`} />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
