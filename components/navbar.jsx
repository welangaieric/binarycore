"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "products", "about", "contact"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => { // Removed the unused second parameter "string"
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const[theme,setTheme]=useState('')
  const themes =useTheme()
  useEffect(()=>{
    setTheme(themes.theme)

  },[themes])

  return (
    <header className="sticky top-0 px-4 md:px-6 z-50 w-full border-b border-border/40 flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 gap-2 justify-between  items-center">
      <Link href="/" className="h-full flex items-center gap-4 justify-start">
      <Image
        key={theme} // Forces re-render when theme changes
        width={70}
        height={100}
        src={theme === "dark" ? "/icon.png" : "/icon-light.png"}
        alt="Binary Core Systems Logo"
        className="object-contain h-full"
        priority
      />
      <h2 className="hidden md:flex font-bold">Binary Core Systems</h2>
    </Link>
        <nav className=" hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link href="/products" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
        <ModeToggle />
          <Button variant="ghost" size="sm">
            <Link href={'/contact'}>Contact us</Link>
            
          </Button>
          <Button size="sm"><Link href={'https://welangaieric.github.io/rate_card/'}>Rate Card</Link> </Button>
        </div>
      </div>
    </header>
    // <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 sticky top-0 left-0 right-0 h-16 border-b border-border/40">
    //   <div className="container h-full mx-auto flex items-center justify-between">
    //     <Link href={'/'} className="font-bold text-2xl flex items-center justify-start">
    //       <img src="/logo2.png" alt="" className="object-contain h-1/4 w-1/4" />
    //       Devlabs
    //     </Link>
    //     <div className="hidden md:flex space-x-4">
    //       {["services", "products", "about"].map((section) => (
    //         <Link key={section} href={`/${section}` } className={`text-sm font-medium transition-colors hover:text-primary ${
    //           activeSection === section ? "text-primary" : ""
    //         }`}>
    //           {section.charAt(0).toUpperCase() + section.slice(1)}
    //         </Link>
    //         // <button
    //         //   key={section}
    //         //   onClick={() => scrollTo(section)}
    //         //   className={`text-sm font-medium transition-colors hover:text-primary ${
    //         //     activeSection === section ? "text-primary" : ""
    //         //   }`}
    //         // >
    //         //   {section.charAt(0).toUpperCase() + section.slice(1)}
    //         // </button>
    //       ))}
    //     </div>
    //     <div className="flex items-center space-x-4">
    //       <ModeToggle />
    //       <Button> <Link href={'https://welangaieric.github.io/rate_card/'}>Rate Card</Link> </Button>
    //     </div>
    //   </div>
    // </nav>
  );
}
