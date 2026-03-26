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
    technologies: ["Cisco ASA", "Cisco Catalyst Switch", "VLAN", "WireGuard"],
    period: "Apr 2025 - Present",
    description: [
      "Designed and deployed a multi-network homelab using Cisco ASA and Catalyst switches, implementing VLAN segmentation, routing, and secure VPN access.",
      "Simulate enterprise network environments to test firewall rules, traffic segmentation, and network security configurations."
    ],
    icon: <Router className="h-6 w-6 text-primary" />
  },
  {
    title: "Malware Analysis Sandbox",
    technologies: ["VirtualBox", "FlareVM", "REMnux"],
    period: "March 2025",
    description: [
      "Developed a malware analysis sandbox using VirtualBox, Windows 10, and REMnux to safely analyze malicious software.",
      "Implemented static and dynamic analysis techniques, integrating tools for network monitoring, process analysis, and threat reporting."
    ],
    icon: <Worm className="h-6 w-6 text-primary" />
  },
  {
    title: "Security+ Practice Exam Web App",
    technologies: ["HTML", "JavaScript", "JSON"],
    period: "Feb 2026",
    description: [
      "Engineered a web application that converts practice exam content into a realistic CompTIA Security+ testing environment.",
      "Implemented features such as timed exams, question flagging, randomized question sets, and an interface mirroring real certification exams."
    ],
    icon: <Code className="h-6 w-6 text-primary" />
  },
  {
    title: "My Portfolio Website",
    technologies: ["Next.js", "Node.js", "Yarn", "Vercel"],
    period: "Feb 2025 - Present",
    description: [
      "Built a personal portfolio website using Next.js for optimized performance with server-side rendering and static site generation.",
      "Developed backend functionality with Node.js for handling API routes and dynamic content."
    ],
    icon: <MonitorSmartphone className="h-6 w-6 text-primary" />
  },
  {
    title: "Farm-Ng Software Engineer Project",
    technologies: ["Python", "Tailscale"],
    period: "Aug 2024 - December 2024",
    description: [
      "Collaborated on a team project to develop an Amiga robot capable of detecting and measuring artichoke sizes using the Farm-ng platform.",
      "Worked with a team of engineers to integrate software with the Farm-ng API and ensure efficient system performance."
    ],
    icon: <Code className="h-6 w-6 text-primary" />
  }
];

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
            effect="zoom" //"slide", "fade", or "zoom"
          />
        </div>
      </div>
    </section>
  )
}

