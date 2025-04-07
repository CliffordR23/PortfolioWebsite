"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cog, MonitorSmartphone, Router, Worm } from "lucide-react"
import { AdvancedCarousel } from "@/components/ui/advanced-carousel"

export function ProjectsSectionAdvanced() {
  const projects = [
    {
        title: "Networking and Routing Homelab",
        technologies: ["Cisco ASA", "Cisco Catalyst Switch", "Vlan", "Wireguard"],
        period: "Apr 2025 - Present",
        description: [
          "Fully functional homelab using enterprise-grade equipment to simulate real-world network environments.",
          "This homelab reflects my interest in infrastructure design, security, and hands-on administration of network devices. It's a self-directed project where I continually expand and test new configurations and ideas — simulating production environments in a controlled space.",
        ],
        icon: <Router className="h-6 w-6 text-primary" />
      },
    {
        title: "Malware Analysis Sandbox",
        technologies: ["Virtual Box", "FlareVM", "RemNux"],
        period: "March 2025",
        description: [
          "Developed a Malware Analysis Sandbox using VirtualBox, Windows 10 VM, and REMnux to detect and analyze malware in a controlled environment. Implemented automated behavioral analysis, static and dynamic inspection, and integrated tools for network monitoring, process analysis, and detailed threat reporting.",
        ],
        icon: <Worm className="h-6 w-6 text-primary" />
      },
    {
        title: "My Portfolio Website",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "Yarn", "Vercel"],
        period: "Feb 2025 - Present",
        description: [
          "Designed and developed a personal portfolio website to showcase skills and projects.",
          "Implemented modern UI components, animations, and responsive design principles.",
          "Website using Next.js, a React framework that enables server-side rendering and static site generation for better performance. The backend functionality is powered by Node.js, which handles API routes to process form submissions and dynamic content. Yarn is used as the package manager to efficiently handle dependencies and scripts.",
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

  const projectCards = projects.map((project, index) => (
    <div key={index} className="h-full px-4 py-8">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">{project.icon}</div>
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
    </div>
  ))

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

        <div className="h-[400px] md:h-[350px]">
          <AdvancedCarousel
            items={projectCards}
            className="h-full rounded-xl"
            autoPlay={true}
            interval={6000}
            showProgress={true}
            effect="zoom" // Try "slide", "fade", or "zoom"
          />
        </div>
      </div>
    </section>
  )
}

