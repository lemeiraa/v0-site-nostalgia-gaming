import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users } from "lucide-react"
import Link from "next/link"

export function CommunitySection() {
  return (
    <section id="comunidade" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Faça Parte da Comunidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conecte-se com outros jogadores, fique por dentro das novidades,
            eventos e promoções exclusivas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <Card className="bg-background border-border hover:border-[#25D366] transition-colors group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Grupo do WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Entre no nosso grupo para conversar com a galera, combinar partidas
                e receber avisos importantes.
              </p>
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white"
              >
                <Link
                  href="https://chat.whatsapp.com/JTiBGthp19X24XDRJmQVef"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Entrar no WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Discord */}
          <Card className="bg-background border-border hover:border-[#5865F2] transition-colors group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#5865F2]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5865F2]/20 transition-colors">
                <Users className="w-8 h-8 text-[#5865F2]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Servidor do Discord
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Participe do nosso Discord para chat de voz, canais exclusivos
                e interagir com toda a comunidade.
              </p>
              <Button
                asChild
                className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white"
              >
                <Link
                  href="https://dc.gg/csnostalgia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Entrar no Discord
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
