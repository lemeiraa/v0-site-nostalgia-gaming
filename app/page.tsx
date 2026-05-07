import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServerList } from "@/components/server-list"
import { StoreSection } from "@/components/store-section"
import { CommunitySection } from "@/components/community-section"
import { HowToPlay } from "@/components/how-to-play"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServerList />
        <StoreSection />
        <CommunitySection />
        <HowToPlay />
      </main>
      <Footer />
    </div>
  )
}
