"use client"

import { useState } from "react"
import { Crown, Shield, Star, Zap, MessageCircle, Check, AlertCircle, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


interface RankPlan {
  name: string
  price: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  popular?: boolean
}

const ranks: RankPlan[] = [
  {
    name: "VIP",
    price: "R$ 15,00",
    description: "Benefícios básicos para começar sua jornada.",
    icon: <Star className="h-8 w-8" />,
    color: "bg-chart-2",
    features: [
      "Tag [VIP] no chat",
      "Skin exclusiva",
      "Acesso a comandos VIP",
      "Prioridade na fila",
    ],
  },
  {
    name: "Admin",
    price: "R$ 30,00",
    description: "Mais poder e recursos exclusivos.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-primary",
    features: [
      "Todos benefícios VIP",
      "Tag [ADMIN] no chat",
      "Comandos de admin",
      "Kick/Ban de jogadores",
      "Acesso ao painel admin",
    ],
    popular: true,
  },
  {
    name: "Master",
    price: "R$ 50,00",
    description: "Para jogadores que querem o máximo.",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-chart-4",
    features: [
      "Todos benefícios Admin",
      "Tag [MASTER] no chat",
      "Skins premium exclusivas",
      "Criar votações",
      "Comandos especiais",
      "Suporte prioritário",
    ],
  },
  {
    name: "Supremo",
    price: "R$ 100,00",
    description: "O cargo mais alto disponível.",
    icon: <Crown className="h-8 w-8" />,
    color: "bg-chart-3",
    features: [
      "Todos benefícios Master",
      "Tag [SUPREMO] dourada",
      "Acesso total a comandos",
      "Imunidade especial",
      "Personalização completa",
      "Suporte VIP direto",
      "Participação em decisões",
    ],
  },
]

const servers = [
  { value: "4fun", label: "4Fun (131.196.196.196:27550)", color: "text-red-500" },
  { value: "fypoolday", label: "Fypoolday (131.196.196.197:27230)", color: "text-blue-500" },
  { value: "zombie", label: "Zombie Plague (131.196.196.198:27880)", color: "text-green-500" },
]

const contacts = [
  { name: "Zangado", phone: "5521968612190" },
  { name: "Aleeck", phone: "5519992440346" },
]

export function ShopSection() {
  const [selectedServer, setSelectedServer] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [ammopacksQty, setAmmopacksQty] = useState(1000)

  const handleBuy = (rankName: string, contact: { name: string; phone: string }) => {
    const serverLabel = servers.find((s) => s.value === selectedServer)?.label || "Não selecionado"
    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      `Olá! Tenho interesse em comprar o cargo *${rankName}* para o servidor *${serverLabel}* no CS Nostalgia.`
    )}`
    window.open(url, "_blank")
  }

  const handleBuyAmmopacks = (contact: { name: string; phone: string }) => {
    const serverLabel = servers.find((s) => s.value === selectedServer)?.label || "Não selecionado"
    const price = (ammopacksQty / 1000) * 10
    const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      `Olá! Tenho interesse em comprar *${ammopacksQty.toLocaleString('pt-BR')} Ammo Packs* por *R$ ${price.toFixed(2).replace('.', ',')}* para o servidor *${serverLabel}* no CS Nostalgia.`
    )}`
    window.open(url, "_blank")
  }

  const ammopacksPrice = (ammopacksQty / 1000) * 10

  return (
    <section id="loja" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-glow">
            Loja de Cargos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Adquira cargos especiais e aproveite benefícios exclusivos nos nossos servidores!
          </p>
        </div>

        {/* Server Selection - Destacado */}
        <div className={`relative z-50 mb-10 mx-auto max-w-xl p-6 rounded-xl border-2 transition-all ${
          selectedServer 
            ? "border-chart-2 bg-chart-2/10" 
            : "border-primary bg-primary/10 animate-pulse"
        }`}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className={`h-5 w-5 ${selectedServer ? "text-chart-2" : "text-primary"}`} />
              <label className="text-base font-bold text-foreground">
                {selectedServer 
                  ? "Servidor selecionado! Agora escolha seu cargo." 
                  : "Primeiro, selecione o servidor para liberar a compra:"}
              </label>
            </div>
            <div className="relative w-full z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full p-4 rounded-lg border-2 text-lg font-bold transition-all flex items-center justify-between ${
                  selectedServer 
                    ? `${servers.find(s => s.value === selectedServer)?.color} border-current bg-current/10`
                    : "border-border bg-card/50 text-muted-foreground"
                }`}
              >
                <span className={selectedServer ? servers.find(s => s.value === selectedServer)?.color : ""}>
                  {selectedServer 
                    ? servers.find(s => s.value === selectedServer)?.label 
                    : "Clique para escolher um servidor"}
                </span>
                <ChevronDown className={`h-6 w-6 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg overflow-hidden z-[100] shadow-2xl">
                  {servers.map((server) => (
                    <button
                      key={server.value}
                      onClick={() => {
                        setSelectedServer(server.value)
                        setIsOpen(false)
                      }}
                      className={`w-full p-5 text-xl font-bold transition-all text-left border-b border-border last:border-b-0 hover:bg-secondary/50 ${server.color}`}
                    >
                      {server.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {!selectedServer && (
              <p className="text-sm text-muted-foreground text-center">
                Os botoes de compra serao liberados apos selecionar o servidor
              </p>
            )}
          </div>
        </div>

        {/* Ranks Grid */}
        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ranks.map((rank) => (
            <Card
              key={rank.name}
              className={`relative border-border bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:glow-blue ${
                rank.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {rank.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className={`mx-auto rounded-full p-4 ${rank.color} text-background`}>
                  {rank.icon}
                </div>
                <CardTitle className="mt-4 text-foreground">{rank.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">{rank.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>{rank.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {rank.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-chart-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 pt-4">
                  {selectedServer ? (
                    <>
                      <p className="text-xs text-center text-muted-foreground mb-2">
                        Comprar com:
                      </p>
                      {contacts.map((contact) => (
                        <Button
                          key={contact.name}
                          onClick={() => handleBuy(rank.name, contact)}
                          className="w-full bg-[#25D366] hover:bg-[#1da851] text-white"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {contact.name}
                        </Button>
                      ))}
                    </>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="text-xs text-muted-foreground">
                        Selecione um servidor acima para liberar a compra
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ammopacks Section - Apenas para Zombie Plague */}
        {selectedServer === "zombie" && (
          <div className="mt-8 mx-auto max-w-4xl">
            <Card className="border-green-500/50 bg-green-500/5 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 bg-green-500 text-background">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Ammo Packs</h3>
                      <p className="text-sm text-muted-foreground">R$ 10,00 a cada 1.000 Ammo Packs</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    {/* Calculadora */}
                    <div className="flex items-center gap-3 bg-card/50 rounded-lg p-3 border border-border">
                      <button
                        onClick={() => setAmmopacksQty(Math.max(1000, ammopacksQty - 1000))}
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xl transition-colors"
                      >
                        -
                      </button>
                      <div className="text-center">
                        <input
                          type="number"
                          value={ammopacksQty}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0
                            setAmmopacksQty(Math.min(200000, Math.max(0, value)))
                          }}
                          min="0"
                          max="200000"
                          step="1000"
                          className="w-32 text-center text-2xl font-bold text-green-500 bg-transparent border-b-2 border-green-500/50 focus:border-green-500 focus:outline-none"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Ammo Packs (Maximo: 200.000)</p>
                      </div>
                      <button
                        onClick={() => setAmmopacksQty(Math.min(200000, ammopacksQty + 1000))}
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xl transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Preco */}
                    <div className="text-center min-w-[100px]">
                      <p className="text-3xl font-bold text-foreground">R$ {ammopacksPrice.toFixed(2).replace('.', ',')}</p>
                    </div>

                    {/* Botoes de compra */}
                    <div className="flex gap-2">
                      {contacts.map((contact) => (
                        <Button
                          key={contact.name}
                          onClick={() => handleBuyAmmopacks(contact)}
                          className="bg-[#25D366] hover:bg-[#1da851] text-white"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {contact.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Os cargos são válidos por 30 dias. Entre em contato via WhatsApp para renovação.
        </p>
      </div>
    </section>
  )
}
