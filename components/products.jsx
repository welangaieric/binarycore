'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
const MotionCard = motion(Card); 


const products = [
  {
    name: "E-commerce System",
    tagline: "Your trusted online shop platform",
    description: "A complete e-commerce platform with inventory management and payment integration.",
    price: "1900 KES/month",
    requiremets:['Till Number','ID Number','Phone Number']
  },
  {
    name: "Hotspot and PPPoE Billing System",
    tagline: "Monitize your services effortlessly" ,
    description: "Manage internet access in hotspots with our advanced billing system.",
    price: "1500 KES/month",
    requiremets:['Till Number','ID Number','Phone Number']
  },
  {
    name: "Ticket Selling System",
    tagline: "Sell tickets fast and easily",
    description: "Sell event tickets with ease, with only a 4% commission on sales.",
    price: "4% commission",
    requiremets:['Till Number','ID Number','Phone Number']
  },
  {
    name: "Employee Management System",
    tagline: "Manage your buisiness conviniently ",
    description: "Make it easy to run your buisness and help your HR and Employees coordinate work effectively.",
    price: "2500 KES/month",
    requiremets:['Till Number','Business Name','Phone Number','Business Logo']
  }
]


export function Products() {
  const router = useRouter()
  function handleDetails(key){
    router.push(`/product-details/?key=${key}`)
  }
  return (
    <section id="products" className="w-full items-center justify-center flex py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-transparent">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <MotionCard key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1, ease: "linear" }}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-lg font-semibold">{product.price}</p>
                <Button onClick={()=>handleDetails(index)}>Learn More</Button>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

