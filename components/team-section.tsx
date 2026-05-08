"use client"

import { Crown, Shield, Star, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  name: string
  role: string
  description: string
  rank: "owner" | "admin" | "moderator" | "staff"
}

const teamMembers: TeamMember[] = [
  {
    name: "Zangado",
    role: "Fundador & Owner",
    description: "Responsável pela gestão geral do clan e servidores.",
    rank: "owner",
  },
  {
    name: "Aleeck",
    role: "Co-Fundador & Admin",
    description: "Coordena as vendas e suporte aos jogadores.",
    rank: "owner",
  },
  {
    name: "Staff 1",
    role: "Administrador",
    description: "Gerencia os servidores e eventos.",
    rank: "admin",
  },
  {
    name: "Staff 2",
    role: "Moderador",
    description: "Mantém a ordem e ajuda os jogadores.",
    rank: "moderator",
  },
  {
    name: "Staff 3",
    role: "Moderador",
    description: "Suporte ao vivo nos servidores.",
    rank: "moderator",
  },
  {
    name: "Staff 4",
    role: "Suporte",
    description: "Auxilia novos jogadores e tira dúvidas.",
    rank: "staff",
  },
]

const rankConfig = {
  owner: { icon: Crown, color: "bg-chart-3 text-background", badge: "Owner" },
  admin: { icon: Shield, color: "bg-chart-4 text-background", badge: "Admin" },
  moderator: { icon: Star, color: "bg-primary text-foreground", badge: "Mod" },
  staff: { icon: User, color: "bg-chart-2 text-background", badge: "Staff" },
}

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-glow">
            Nossa Equipe
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conheça as pessoas que mantêm o CS Nostalgia funcionando
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const { icon: Icon, color, badge } = rankConfig[member.rank]
            return (
              <Card
                key={member.name}
                className="border-border bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:glow-blue"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <Avatar className="h-20 w-20 border-2 border-primary">
                      <AvatarFallback className="bg-secondary text-foreground text-xl font-bold">
                        {member.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`rounded-full p-1.5 ${color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <Badge variant="outline">{badge}</Badge>
                  </div>
                  <CardTitle className="mt-2 text-foreground">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
