"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Shield, Star, Zap, Check } from "lucide-react"

const plans = [
  {
    name: "VIP",
    price: "R$ 20",
    period: "/mês",
    icon: Star,
    popular: false,
    features: [
      "Acesso VIP em todos servidores",
      "Skin exclusiva de faca",
      "Tag [VIP] no chat",
      "Prioridade na fila",
      "Comandos especiais",
    ],
  },
  {
    name: "Admin",
    price: "R$ 35",
    period: "/mês",
    icon: Crown,
    popular: true,
    features: [
      "Todos benefícios VIP",
      "Comandos de administrador",
      "Kick/Ban de jogadores",
      "Tag [ADMIN] dourada no chat",
      "HP e colete extras",
      "Slot reservado",
    ],
  },
  {
    name: "Master",
    price: "R$ 50",
    period: "/mês",
    icon: Shield,
    popular: false,
    features: [
      "Todos benefícios Admin",
      "Comandos avançados de admin",
      "Controle total dos servidores",
      "Tag [MASTER] no chat",
      "Acesso ao painel master",
      "Suporte prioritário VIP",
    ],
  },
]

const contacts = [
  { name: "Zangado", phone: "5521968612190" },
  { name: "Aleeck", phone: "5519992440346" },
]

function getWhatsAppLink(phone: string, planName: string) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse em adquirir o cargo ${planName} nos servidores Nostalgia Gaming CS 1.6!`
  )
  return `https://wa.me/${phone}?text=${message}`
}

export function StoreSection() {
  return (
    <section id="loja" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Zap className="w-3 h-3 mr-1" />
            Loja
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Adquira seu Cargo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Compre cargos no CS 1.6 a partir de R$ 20 e tenha VIP/Admin em todos os servidores!
            Benefícios exclusivos para membros da comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      plan.popular ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    {contacts.map((contact) => (
                      <Button
                        key={contact.phone}
                        asChild
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full"
                      >
                        <a
                          href={getWhatsAppLink(contact.phone, plan.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          {contact.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-muted/50 border-border max-w-3xl">
            <CardContent className="py-4 px-6">
              <p className="text-sm text-muted-foreground mb-2">
                <span className="text-foreground font-medium">Aceitamos cartões</span>, pagamento via{" "}
                <span className="text-foreground font-medium">PIX</span> ou{" "}
                <span className="text-foreground font-medium">transferência bancária</span>.
              </p>
              <p className="text-sm text-muted-foreground">
                Para jogadores fora do Brasil: aceitamos{" "}
                <span className="text-foreground font-medium">Mercado Pago</span> e{" "}
                <span className="text-foreground font-medium">PayPal</span> com conversão automática para a moeda do seu país!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
