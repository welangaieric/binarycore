import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />
      <Testimonials />
    </main>
  )
}

