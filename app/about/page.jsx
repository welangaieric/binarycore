import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import Team from "../../components/Teams"
import Careers from "../../components/Careers"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />
      {/* <Team/>
       */}
       <Team/>
       {/* <Careers/> */}
      <Testimonials />
    </main>
  )
}

