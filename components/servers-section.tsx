"use client"

import { Copy, Check, Server, Gamepad2, Skull, Crosshair, Ghost, Users, Map, RefreshCw, Flag, Flame, AlertTriangle } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ServerData {
  id: string
  ip: string
  name: string
  map: string
  players: number
  maxPlayers: number
  status: "online" | "offline"
}

interface ServerConfig {
  id: string
  name: string
  ip: string
  description: string
  icon: React.ReactNode
  status: "online" | "em breve"
  color: string
  location?: string
}

const serverConfigs: ServerConfig[] = [
  // Servidores Brasil
  {
    id: "4fun",
    name: "4Fun",
    ip: "131.196.196.196:27550",
    description: "Servidor casual para jogar com os amigos e se divertir sem pressao.",
    icon: <Gamepad2 className="h-8 w-8" />,
    status: "online",
    color: "bg-chart-2",
    location: "Brasil",
  },
  {
    id: "fypoolday",
    name: "Fypoolday",
    ip: "131.196.196.197:27230",
    description: "Mapas classicos de poolday para partidas rapidas e intensas.",
    icon: <Server className="h-8 w-8" />,
    status: "online",
    color: "bg-primary",
    location: "Brasil",
  },
  {
    id: "zombie",
    name: "Zombie Plague",
    ip: "131.196.196.198:27880",
    description: "Sobreviva as hordas de zumbis ou infecte todos os humanos!",
    icon: <Skull className="h-8 w-8" />,
    status: "online",
    color: "bg-chart-4",
    location: "Brasil",
  },
  {
    id: "pregame",
    name: "Pregame",
    ip: "161.129.183.128:27015",
    description: "Servidor Pregame localizado na Venezuela. Aquecimento antes das partidas!",
    icon: <Flame className="h-8 w-8" />,
    status: "online",
    color: "bg-orange-500",
    location: "Venezuela",
  },
  // Servidores Argentina
  {
    id: "fypoolday-ar",
    name: "Fypoolday AR",
    ip: "45.235.98.68:27029",
    description: "Fypoolday na Argentina. Partidas rapidas e intensas!",
    icon: <Server className="h-8 w-8" />,
    status: "online",
    color: "bg-sky-500",
    location: "Argentina",
  },
  // Servidores Venezuela
  {
    id: "zombie-ve",
    name: "Zombie Plague VE",
    ip: "161.129.183.128:27016",
    description: "Zombie Plague na Venezuela. Sobreviva aos zumbis!",
    icon: <Skull className="h-8 w-8" />,
    status: "online",
    color: "bg-red-600",
    location: "Venezuela",
  },
  // Em breve
  {
    id: "crossfire",
    name: "Crossfire",
    ip: "Em breve",
    description: "O modo Crossfire dentro do Counter-Strike 1.6. Aguarde!",
    icon: <Crosshair className="h-8 w-8" />,
    status: "em breve",
    color: "bg-chart-3",
  },
  {
    id: "zombieescape",
    name: "Zombie Escape",
    ip: "Em breve",
    description: "Fuja dos zumbis atraves de mapas epicos e desafiadores!",
    icon: <Ghost className="h-8 w-8" />,
    status: "em breve",
    color: "bg-chart-5",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (text === "Em breve") return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (text === "Em breve") return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className="h-8 w-8 text-muted-foreground hover:text-foreground"
    >
      {copied ? <Check className="h-4 w-4 text-chart-2" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}

export function ServersSection() {
  const [serverData, setServerData] = useState<Record<string, ServerData>>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchServers = useCallback(async () => {
    try {
      const response = await fetch("/api/servers")
      const data: ServerData[] = await response.json()
      
      const dataMap: Record<string, ServerData> = {}
      data.forEach((server) => {
        if (server.id) {
          dataMap[server.id] = server
        }
      })
      
      setServerData(dataMap)
      setLastUpdate(new Date())
    } catch (error) {
      console.error("Erro ao buscar dados dos servidores:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchServers()
    
    // Atualiza a cada 60 segundos
    const interval = setInterval(fetchServers, 60000)
    return () => clearInterval(interval)
  }, [fetchServers])

  const getServerInfo = (serverId: string) => {
    return serverData[serverId]
  }

  return (
    <section id="servidores" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-glow">
            Nossos Servidores
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha seu servidor favorito e entre na acao!
          </p>
          {lastUpdate && (
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
              <span>Atualizado: {lastUpdate.toLocaleTimeString("pt-BR")}</span>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serverConfigs.map((server) => {
            const liveData = getServerInfo(server.id)
            const isOnlineServer = server.status === "online"
            const isFull = liveData && liveData.players >= liveData.maxPlayers && liveData.maxPlayers > 0
            
            return (
              <Card
                key={server.name}
                className="group border-border bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:glow-blue"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-lg p-3 ${server.color} text-background`}>
                      {server.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {server.location && (
                        <Badge variant="outline" className="text-xs">
                          {server.location}
                        </Badge>
                      )}
                      <Badge
                        variant={server.status === "online" ? "default" : "secondary"}
                        className={server.status === "online" ? "bg-chart-2 text-background" : ""}
                      >
                        {server.status === "online" ? "Online" : "Em Breve"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-foreground">{server.name}</CardTitle>
                  <CardDescription>{server.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Aviso de servidor cheio */}
                  {isOnlineServer && isFull && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-500/20 border border-red-500/50 px-4 py-3 animate-pulse">
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-red-500">
                          Servidor {server.name} esta CHEIO!
                        </p>
                        <p className="text-xs text-red-400">
                          Compre VIP para ter slot reservado e entrar sem fila!
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Live Server Info */}
                  {isOnlineServer && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2">
                        <Map className="h-4 w-4 text-primary" />
                        <div className="overflow-hidden">
                          <p className="text-xs text-muted-foreground">Mapa</p>
                          <p className="truncate text-sm font-medium text-foreground">
                            {loading ? "..." : liveData?.map || "Offline"}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${isFull ? "bg-red-500/20 border border-red-500/50" : "bg-secondary/50"}`}>
                        <Users className={`h-4 w-4 ${isFull ? "text-red-500" : "text-chart-2"}`} />
                        <div>
                          <p className="text-xs text-muted-foreground">Players</p>
                          <p className={`text-sm font-medium ${isFull ? "text-red-500 font-bold" : "text-foreground"}`}>
                            {loading ? "..." : liveData ? `${liveData.players}/${liveData.maxPlayers}` : "0/0"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* IP Address */}
                  <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
                    <code className="font-mono text-sm text-foreground">{server.ip}</code>
                    <CopyButton text={server.ip} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
