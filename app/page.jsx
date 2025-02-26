import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"


export default function Home() {
  
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <Hero />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}

