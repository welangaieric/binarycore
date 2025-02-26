"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Database, Network } from "lucide-react";

const MotionCard = motion(Card); 

export function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web development with modern frameworks and responsive design.",
      icon: Globe,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile app design and development.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design process from wireframes to final UI implementation.",
      icon: Palette,
    },
    {
      title: "Database Management",
      description: "Secure and efficient database solutions, including cloud-based storage.",
      icon: Database,
    },
    {
      title: "Networking Services",
      description: "Advanced networking solutions, including FreeRadius setup for authentication and billing.",
      icon: Network,
    },
  ];

  return (
    <section id="services" className="w-full items-center justify-center flex py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <CardHeader>
                <service.icon className="w-10 h-10 mb-2 text-primary hover:text-primary_blue" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
