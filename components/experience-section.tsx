"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "CSU Monterey Bay",
      location: "Marina, CA",
      period: "Jan 2025 – Present",
      description: [
        "Developing a full-stack web application to showcase the work done in the 3+ research projects.",
        "Using Node.js, Next.js, and Yarn for full-stack development.",
      ],
    },
    {
      title: "Network Security Team, Secretary",
      company: "CSU Monterey Bay",
      location: "Marina, CA",
      period: "Jan 2025 – Present",
      description: [
        "Creating a weekly newsletter to get more students involved in cybersecurity and computer science.",
        "Take notes on meeting plans, current and upcoming",
      ],
    },
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

