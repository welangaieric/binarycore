import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Team() {
  const teamMembers = [
    {
      name: "Eric Welangai",
      role: "CEO & Founder",
      bio: "3+ years experience in tech leadership and product development",
      image: "/avatars/avatar.jpg",
      social: {
        twitter: "https://twitter.com/welangaieric",
        linkedin: "https://linkedin.com/in/welangaieric",
        github: "https://github.com/welangaieric",
      },
    },
    {
      name: "Leon Inyangala",
      role: "Co-Founder",
      bio: "React and Nodejs backend engineer",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/in/",
        github: "https://github.com/",
      },
    },
    // {
    //   name: "Jessica Williams",
    //   role: "Head of Design",
    //   bio: "Award-winning designer with a passion for creating intuitive user experiences",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     twitter: "https://twitter.com/jessicawilliams",
    //     linkedin: "https://linkedin.com/in/jessicawilliams",
    //     github: "https://github.com/jessicawilliams",
    //   },
    // },
    // {
    //   name: "David Rodriguez",
    //   role: "Lead Developer",
    //   bio: "Full-stack developer specializing in React and Node.js applications",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     twitter: "https://twitter.com/davidrodriguez",
    //     linkedin: "https://linkedin.com/in/davidrodriguez",
    //     github: "https://github.com/davidrodriguez",
    //   },
    // },
    // {
    //   name: "Emily Park",
    //   role: "Marketing Director",
    //   bio: "Digital marketing strategist with experience in growth hacking and brand development",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     twitter: "https://twitter.com/emilypark",
    //     linkedin: "https://linkedin.com/in/emilypark",
    //     github: "https://github.com/emilypark",
    //   },
    // },
    // {
    //   name: "Robert Taylor",
    //   role: "Customer Success Manager",
    //   bio: "Dedicated to ensuring clients achieve their goals through our platform",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     twitter: "https://twitter.com/roberttaylor",
    //     linkedin: "https://linkedin.com/in/roberttaylor",
    //     github: "https://github.com/roberttaylor",
    //   },
    // },
  ]

  return (
    <div className="container py-12 w-full px-4 md:px-6 lg:px-10" id="teams">
      <div className="text-left w-full mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet Our Team</h2>
        <p className="mt-2 w-full text-lg text-left text-muted-foreground max-w-2xl ">
          We're a diverse group of passionate individuals committed to building exceptional products and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="text-center pt-4">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 pt-0">
              {member.social.twitter && (
                <Link
                  href={member.social.twitter}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
              {member.social.github && (
                <Link
                  href={member.social.github}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

