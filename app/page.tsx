import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'
import { Proof } from '@/components/Proof'
import { Cta } from '@/components/Cta'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Proof />
      <Cta />
      <Footer />
    </main>
  )
}