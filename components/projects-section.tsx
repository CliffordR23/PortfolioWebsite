"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cog, MonitorCog, MonitorDot, MonitorSmartphone } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "My Website",
      technologies: ["Node.js", "Next.js", "Yarn", "Vercel"],

      description: [
        " Website using Next.js, a React framework that enables server-side rendering and static site generation for better performance. The backend functionality is powered by Node.js, which handles API routes to process form submissions and dynamic content. Yarn is used as the package manager to efficiently handle dependencies and scripts.",
      ],
      icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
    },
    {
      title: "Farm-Ng, Software Engineer",
      technologies: ["Python", "TailScale"],
      period: "Aug 2024 - December 2024",
      description: [
        "Participated in a competitive project to build an Amiga robot capable of detecting and measuring artichoke sizes using the Farm-ng Amiga robot platform.",
        "Coordinating with a team of 5 computer programmers to ensure efficient development of code and integration with the Farm-Ng's API",
      ],
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Engineering technician – Good Year Blimp",
      technologies: ["CAD", "3D printing", "Fabrication"],
      period: "Aug 2021 – May 2022",
      description: [
        "Developed a small-scale model of a Goodyear blimp as part of a class project, designed to collect atmospheric data when launched with a balloon.",
        "Contributed to design, CAD modeling, and assembly of the model for data collection.",
      ],
      icon: <Cog className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 navy-gradient">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Showcasing my technical work and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

