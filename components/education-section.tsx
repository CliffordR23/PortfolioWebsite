"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      school: "California State University, Monterey Bay",
      location: "Marina, CA",
      degree: "Bachelor of Science in Computer Science",
      concentration: "Concentration in Networks and Security",
      period: "Aug. 2024 – May 2026",
    },
    {
      school: "Reedley College",
      location: "Reedley, CA",
      degree: "Associate's in Computer Science",
      concentration: "",
      period: "Aug. 2022 – May 2024",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 navy-gradient">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Education</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">My academic journey in Computer Science</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
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
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.school}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  {edu.concentration && <p className="text-sm text-muted-foreground">{edu.concentration}</p>}
                  <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

