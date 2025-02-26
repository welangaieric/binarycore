"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, Briefcase, ShoppingCart, Info, Mail } from "lucide-react";

export function MobileNav() {
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

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border/40 z-50">
      <div className="container mx-auto flex justify-around items-center h-16">
       
        <Link href={'/services'} className="flex flex-col items-center">
          <Briefcase className="h-6 w-6" />
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link href={'/products'} className="flex flex-col items-center">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs mt-1">Products</span>
        </Link>
        <Link href={'/'} className="flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href={'/about'} className="flex flex-col items-center">
          <Info className="h-6 w-6" />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link href={'/contact'} className="flex flex-col items-center">
          <Mail className="h-6 w-6" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
        {/* <button
          onClick={() => scrollTo("hero")}
          className={`flex flex-col items-center ${
            activeSection === "hero" ? "text-primary" : ""
          }`}
        >
          
        </button> */}
        {/* <button
          onClick={() => scrollTo("services")}
          className={`flex flex-col items-center ${
            activeSection === "services" ? "text-primary" : ""
          }`}
        >
          <Briefcase className="h-6 w-6" />
          <span className="text-xs mt-1">Services</span>
        </button>
        <button
          onClick={() => scrollTo("products")}
          className={`flex flex-col items-center ${
            activeSection === "products" ? "text-primary" : ""
          }`}
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs mt-1">Products</span>
        </button>
        <button
          onClick={() => scrollTo("about")}
          className={`flex flex-col items-center ${
            activeSection === "about" ? "text-primary" : ""
          }`}
        >
          <Info className="h-6 w-6" />
          <span className="text-xs mt-1">About</span>
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className={`flex flex-col items-center ${
            activeSection === "contact" ? "text-primary" : ""
          }`}
        >
          <Mail className="h-6 w-6" />
          <span className="text-xs mt-1">Contact</span>
        </button> */}
      </div>
    </nav>
  );
}
