import { ServerCard } from "./server-card"

const servers = [
  {
    name: "4Fun",
    ip: "131.196.196.196:27550",
    game: "Counter Strike 1.6",
    type: "main" as const,
    isPrimary: true,
  },
  {
    name: "FY Pool Day",
    ip: "131.196.196.197:27230",
    game: "Counter Strike 1.6",
    type: "fy" as const,
  },
  {
    name: "Zombie Plague",
    ip: "131.196.196.198:27880",
    game: "Counter Strike 1.6",
    type: "zombie" as const,
  },
  {
    name: "FY Pool Day Argentina",
    ip: "45.235.98.68:27029",
    game: "Counter Strike 1.6",
    type: "fy" as const,
  },
  {
    name: "Left 4 Dead 2",
    ip: "131.196.196.196:27570",
    game: "Left 4 Dead 2",
    type: "l4d2" as const,
  },
]

export function ServerList() {
  return (
    <section className="py-16 px-4" id="servidores">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Servidores
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha um servidor e entre na partida. Copie o IP e cole no console do jogo usando o comando <code className="bg-secondary px-2 py-1 rounded text-primary">connect</code>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server) => (
            <ServerCard key={server.ip} {...server} />
          ))}
        </div>
      </div>
    </section>
  )
}
