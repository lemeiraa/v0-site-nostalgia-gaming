import { NextResponse } from "next/server"

interface GSQueryResponse {
  name: string
  map: string
  players: number
  max_players: number
  host_ip: string
  host_port: number
  game?: string
  bots?: number
  success?: boolean
  error?: string
}

interface ServerInfo {
  id: string
  ip: string
  name: string
  map: string
  players: number
  maxPlayers: number
  status: "online" | "offline"
}

// GameTracker URLs for fallback
const gameTrackerUrls: Record<string, string> = {
  "161.129.183.128:27016": "https://www.gametracker.com/server_info/161.129.183.128:27016/",
  "45.235.98.68:27029": "https://www.gametracker.com/server_info/45.235.98.68:27029/",
}

async function fetchFromGameTracker(ip: string, port: string, id: string): Promise<ServerInfo | null> {
  const url = gameTrackerUrls[`${ip}:${port}`]
  if (!url) return null

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache GameTracker por 60 segundos
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    if (!response.ok) return null

    const html = await response.text()

    // Extract map from image path or map link
    const mapMatch = html.match(/\/images\/maps\/\d+x\d+\/cs\/([^.]+)\.jpg/i) ||
                     html.match(/\/games\/cs\/maps\/([^/"]+)/i) ||
                     html.match(/>([a-z]{2,3}_[a-z0-9_]+)</i)
    const map = mapMatch ? mapMatch[1].trim() : "---"

    // Extract players from HTML - GameTracker uses:
    // <span id="HTML_num_players">0</span> / <span id="HTML_max_players">14</span>
    const numPlayersMatch = html.match(/id="HTML_num_players">(\d+)</i)
    const maxPlayersMatch = html.match(/id="HTML_max_players">(\d+)</i)
    
    const players = numPlayersMatch ? parseInt(numPlayersMatch[1]) : 0
    const maxPlayers = maxPlayersMatch ? parseInt(maxPlayersMatch[1]) : 32

    // Check if online
    const isOnline = html.includes("Alive") || html.includes("#46D02A") || players > 0

    return {
      id,
      ip: `${ip}:${port}`,
      name: "Server",
      map,
      players,
      maxPlayers,
      status: isOnline ? "online" : "offline"
    }
  } catch (error) {
    console.error(`[v0] GameTracker fallback error for ${ip}:${port}:`, error)
    return null
  }
}

async function fetchServerInfo(ip: string, port: string, id: string): Promise<ServerInfo> {
  try {
    // Use GSQuery API - free service that queries Source servers directly
    const url = `https://gsquery.meow.tf/source/${ip}:${port}`
    const response = await fetch(url, {
      next: { revalidate: 30 }, // Cache for 30 seconds
    })
    
    if (!response.ok) {
      
      // Try GameTracker fallback
      const fallback = await fetchFromGameTracker(ip, port, id)
      if (fallback) return fallback
      
      return {
        id,
        ip: `${ip}:${port}`,
        name: "Servidor Offline",
        map: "---",
        players: 0,
        maxPlayers: 32,
        status: "offline"
      }
    }
    
    const data: GSQueryResponse = await response.json()
    
    // Check if GSQuery returned an error (success: false)
    if (data.success === false || data.error) {
      const fallback = await fetchFromGameTracker(ip, port, id)
      if (fallback) return fallback
      
      return {
        id,
        ip: `${ip}:${port}`,
        name: "Servidor Offline",
        map: "---",
        players: 0,
        maxPlayers: 32,
        status: "offline"
      }
    }
    
    return {
      id,
      ip: `${ip}:${port}`,
      name: data.name || "Unknown",
      map: data.map || "Unknown",
      players: data.players || 0,
      maxPlayers: data.max_players || 32,
      status: "online"
    }
  } catch (error) {
    console.error(`[v0] Error fetching server ${ip}:${port}:`, error)
    // Try GameTracker fallback
    const fallback = await fetchFromGameTracker(ip, port, id)
    if (fallback) return fallback
    
    return {
      id,
      ip: `${ip}:${port}`,
      name: "Servidor Offline",
      map: "---",
      players: 0,
      maxPlayers: 32,
      status: "offline"
    }
  }
}

// Cache na API route para evitar muitas requisicoes
export const revalidate = 30

export async function GET() {
  const servers = [
    { ip: "131.196.196.196", port: "27550", id: "4fun" },
    { ip: "131.196.196.197", port: "27230", id: "fypoolday" },
    { ip: "131.196.196.198", port: "27880", id: "zombie" },
    { ip: "161.129.183.128", port: "27015", id: "pregame" },
    { ip: "161.129.183.128", port: "27016", id: "zombie-ve" },
    { ip: "45.235.98.68", port: "27029", id: "fypoolday-ar" }
  ]
  
  const results = await Promise.all(
    servers.map((server) => fetchServerInfo(server.ip, server.port, server.id))
  )
  
  return NextResponse.json(results, {
    headers: {
      'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60'
    }
  })
}
