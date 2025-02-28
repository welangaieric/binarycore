import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import Team from "@/components/Teams"

import { OrganizationSchema, WebsiteSchema } from "@/components/structured-data"

export const metadata = {
  title: "Binary Core Systems | Advanced Technology Solutions & IT Services",
  description: "Binary Core Systems provides cutting-edge technology solutions, IT consulting, and software development to help businesses thrive in the digital era.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <Hero />
      <Services />
      <Products />
      <About />
      <Team/>
      <Testimonials />
      <Contact />
      <OrganizationSchema />
      <WebsiteSchema />
    </main>
  )
}

