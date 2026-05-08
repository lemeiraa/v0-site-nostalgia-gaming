"use client"

import { Bell, Calendar, AlertTriangle, Megaphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  type: "update" | "event" | "alert" | "announcement"
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Novos Servidores em Breve!",
    content: "Estamos preparando dois novos servidores: Crossfire e Zombie Escape! Fiquem ligados para mais informações sobre as datas de lançamento.",
    date: "07/05/2026",
    type: "announcement",
  },
  {
    id: 2,
    title: "Manutenção Programada",
    content: "Os servidores passarão por manutenção nas terças-feiras das 06h às 08h. Pedimos desculpas pelo transtorno.",
    date: "05/05/2026",
    type: "alert",
  },
  {
    id: 3,
    title: "Torneio Mensal",
    content: "Participe do nosso torneio mensal! Inscrições abertas no Discord. Prêmios especiais para os vencedores.",
    date: "01/05/2026",
    type: "event",
  },
  {
    id: 4,
    title: "Atualização do Servidor 4Fun",
    content: "Novos mapas adicionados ao servidor 4Fun! Venha conferir e dar sua opinião no nosso Discord.",
    date: "28/04/2026",
    type: "update",
  },
]

const typeConfig = {
  update: { icon: Bell, color: "bg-primary", label: "Atualização" },
  event: { icon: Calendar, color: "bg-chart-2", label: "Evento" },
  alert: { icon: AlertTriangle, color: "bg-chart-4", label: "Aviso" },
  announcement: { icon: Megaphone, color: "bg-chart-3", label: "Novidade" },
}

export function NewsSection() {
  return (
    <section id="avisos" className="py-20 px-4 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-glow">
            Informações Importantes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fique por dentro das últimas novidades e atualizações
          </p>
        </div>

        <div className="space-y-4">
          {newsItems.map((item) => {
            const { icon: Icon, color, label } = typeConfig[item.type]
            return (
              <Card
                key={item.id}
                className="border-border bg-card/50 backdrop-blur transition-all hover:border-primary/50"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${color} text-background`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className="text-muted-foreground">
                        {label}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="mt-3 text-lg text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.content}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
