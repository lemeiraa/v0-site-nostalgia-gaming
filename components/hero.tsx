import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video from YouTube */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/RP1KcZhLPUw?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=RP1KcZhLPUw"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          pointerEvents: 'none',
          border: 'none'
        }}
      />

      {/* Background effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,154,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,154,225,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <Image
            src="/images/ng-logo.png"
            alt="Nostalgia Gaming Logo"
            width={200}
            height={200}
            className="mx-auto drop-shadow-[0_0_30px_rgba(59,154,225,0.3)]"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Bem-vindo ao{" "}
          <span className="text-primary">Nostalgia Gaming</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Reviva a nostalgia dos jogos clássicos. Servidores dedicados de Counter Strike 1.6 e Left 4 Dead 2 com a melhor comunidade do Brasil.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Servidores Online 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Anti-Cheat Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Comunidade Ativa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
