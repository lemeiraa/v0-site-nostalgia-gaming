import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Terminal, Gamepad2 } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "1. Baixe o Jogo",
    description: "Tenha o Counter Strike 1.6 ou Left 4 Dead 2 instalado no seu computador.",
  },
  {
    icon: Terminal,
    title: "2. Abra o Console",
    description: "No jogo, pressione a tecla ~ (til) para abrir o console de comandos.",
  },
  {
    icon: Gamepad2,
    title: "3. Conecte ao Servidor",
    description: "Digite 'connect' seguido do IP do servidor (ex: connect 131.196.196.196:27550).",
  },
]

export function HowToPlay() {
  return (
    <section className="py-16 px-4 bg-card/50" id="como-jogar">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Jogar
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Siga estes passos simples para entrar em nossos servidores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">
              <CardHeader>
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-2">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
