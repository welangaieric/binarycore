import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function Careers() {
  const jobOpenings = [
    {
      id: "fe-dev",
      title: "Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      description:
        "We're looking for a talented Frontend Developer to join our engineering team. You'll be responsible for building beautiful, responsive user interfaces using React and Next.js.",
      requirements: [
        "3+ years of experience with React",
        "Strong understanding of JavaScript/TypeScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of modern frontend build tools",
        "Excellent problem-solving skills",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible work hours and location",
        "Professional development budget",
        "Regular team events and retreats",
      ],
    },
    {
      id: "ux-designer",
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY (Remote Option)",
      type: "Full-time",
      description:
        "Join our design team to create intuitive and engaging user experiences. You'll collaborate with product managers and engineers to design features that delight our users.",
      requirements: [
        "4+ years of experience in UX/UI design",
        "Proficiency with design tools like Figma",
        "Portfolio demonstrating strong visual design skills",
        "Experience conducting user research and usability testing",
        "Ability to translate complex requirements into simple interfaces",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible work hours and location",
        "Professional development budget",
        "Regular team events and retreats",
      ],
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "Austin, TX (Remote Option)",
      type: "Full-time",
      description:
        "We're seeking a Product Manager to help define and execute our product strategy. You'll work closely with engineering, design, and marketing teams to deliver features that meet user needs.",
      requirements: [
        "3+ years of experience in product management",
        "Strong analytical and problem-solving skills",
        "Excellent communication and stakeholder management",
        "Experience with agile development methodologies",
        "Data-driven approach to decision making",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible work hours and location",
        "Professional development budget",
        "Regular team events and retreats",
      ],
    },
    {
      id: "marketing-specialist",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our marketing team to drive growth and brand awareness. You'll develop and execute digital marketing campaigns across multiple channels.",
      requirements: [
        "2+ years of experience in digital marketing",
        "Experience with SEO, SEM, and social media marketing",
        "Strong analytical skills and experience with marketing analytics tools",
        "Excellent written and verbal communication",
        "Creative mindset and ability to think outside the box",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Health, dental, and vision insurance",
        "Flexible work hours and location",
        "Professional development budget",
        "Regular team events and retreats",
      ],
    },
  ]

  return (
    <div className="container py-12 px-4 md:px-6 lg:px-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're looking for passionate individuals to help us build the future. Check out our open positions below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-3">
        {jobOpenings.map((job) => (
          <Card key={job.id} className="w-full md:w-5/12">
            <CardHeader>
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="mt-1">{job.department}</CardDescription>
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  {job.type}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {job.location}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{job.description}</p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="requirements">
                  <AccordionTrigger>Requirements</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full sm:w-auto">
                <Link href={`/careers/apply/${job.id}`}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

