import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechStart",
    content: "Devlabs transformed our online presence. Their web development expertise is unmatched!",
    avatar: "/avatar1.png",
  },
  {
    name: "Bob Smith",
    role: "CTO, InnovateCorp",
    content: "The mobile app Devlabs built for us exceeded all expectations. Highly recommended!",
    avatar: "/avatar2.png",
  },
  {
    name: "Carol White",
    role: "Network Admin, GlobalNet",
    content: "Devlabs' networking solutions have significantly improved our infrastructure efficiency.",
    avatar: "/avatar3.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full items-center justify-center flex py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="text-gray-500 dark:text-gray-400">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

