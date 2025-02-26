import Link from "next/link"
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'
import { MobileNavbar } from "./mobile-navbar"
// import TextAnimation from '@/components/core/scroll-text';

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4 px-4 md:px-6">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Innovate Faster with
          <br />
          Binary Core Systems
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering businesses with cutting-edge software solutions and Innovative tech solutions for your business. We specialize in web development, mobile apps, and networking services.
        </p>
      </div>
      <div className="flex gap-4 px-4 md:px-6">
      <Button asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline"  size="lg" >
              <Link href="/contact">Contact Us</Link>
            </Button>
      </div>
    </section>

  )
}

