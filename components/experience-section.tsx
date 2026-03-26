"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Technology Associate",
      company: "York School",
      location: "Monterey, CA",
      period: "February 2026 – Present",
      description: [
        "Monitor and troubleshoot campus-wide network connectivity, improving system reliability and uptime.",
        "Support configuration and maintenance of network infrastructure, including switches and wireless access points.",
        "Provide technical support across hardware, software, and network systems for faculty, staff, and students.",
        "Manage support tickets via Freshdesk, resolving high-volume requests with clear documentation and communication.",
        "Deploy and maintain endpoint devices and classroom technology across campus environments.",
        "Develop a Raspberry Pi–based digital signage system to automate and manage campus display content."
      ]
    },
    {
        title: "Network and Systems Intern",
        company: "Moonlight Companies",
        location: "Reedley, CA",
        period: "May 2025 – August 2025",
        description: [
          "Deploy and maintain Linux-based AI vision systems and hardware sensors for automated fruit detection and packaging.",
          "Configure and deploy layer 2/3 network infrastructure, including switches, VLANs, and wireless access points.",
          "Install and test fiber and Ethernet links, transceivers, and wireless infrastructure in production environments.",
          "Maintain and calibrate sensors used in automation workflows and assist in basic PLC setup and ladder logic testing.",
          "Perform physical infrastructure tasks such as cable routing, termination, and equipment installation.",
          "Onboard desktops and laptops and create internal documentation for process consistency and knowledge sharing."
        ]
      },
    {
      title: "Undergraduate Research Assistant",
      company: "School of Computing Design; CSUMB",
      location: "Seaside, CA",
      period: "January 2025 – Present",
      description: [
        "Develop a full-stack web application to showcase work across multiple research projects.",
        "Enhance a genetic algorithm to handle complex scheduling problems and improve system efficiency."
      ]
    },
    {
      title: "Network Security Team — Secretary",
      company: "School of Computing Design; CSUMB",
      location: "Seaside, CA",
      period: "January 2025 – Present",
      description: [
        "Create a weekly newsletter to increase student engagement in cybersecurity and computer science topics.",
        "Document meeting plans and lead discussions on information security concepts and best practices."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">My professional journey and roles</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

