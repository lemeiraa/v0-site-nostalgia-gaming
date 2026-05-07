import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/ng-logo.png"
              alt="Nostalgia Gaming"
              width={50}
              height={50}
            />
            <div>
              <p className="font-bold text-foreground">Nostalgia Gaming</p>
              <p className="text-sm text-muted-foreground">
                Revivendo os clássicos desde sempre
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Como conectar: Abra o console do jogo e digite
            </p>
            <code className="text-primary font-mono">connect 131.196.196.196:27550</code>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nostalgia Gaming. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
