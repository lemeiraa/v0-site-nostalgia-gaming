"use client"

import { MessageCircle, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunitySection() {
  return (
    <section id="comunidade" className="py-20 px-4 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-glow">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conecte-se com outros jogadores, participe de eventos e fique por dentro de tudo!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Discord Card */}
          <Card className="border-border bg-card/50 backdrop-blur transition-all hover:border-[#5865F2]/50 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-[#5865F2] p-4">
                <svg
                  className="h-12 w-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <CardTitle className="text-foreground">Discord</CardTitle>
              <CardDescription>
                Entre no nosso servidor do Discord para conversar, participar de eventos e conhecer outros jogadores!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                asChild
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white glow-blue"
              >
                <a
                  href="https://discord.gg/bDV6cSKJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  Entrar no Discord
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="border-border bg-card/50 backdrop-blur transition-all hover:border-[#25D366]/50 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-[#25D366] p-4">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-foreground">WhatsApp</CardTitle>
              <CardDescription>
                Participe do nosso grupo no WhatsApp para receber avisos rápidos e interagir com a comunidade!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#1da851] text-white glow-green"
              >
                <a
                  href="https://chat.whatsapp.com/JTiBGthp19X24XDRJmQVef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Entrar no Grupo
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
