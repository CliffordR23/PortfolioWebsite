"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const skills = {
    Languages: ["Java", "Python", "C/C++", "SQL", "React", "JavaScript", "HTML/CSS"],
    Frameworks: ["Node.js", "JUnit", "Next.js", "Yarn", "Vercel"],
    "Developer Tools": ["Git", "AWS", "VS Code", "PyCharm", "IntelliJ", "WireShark"],
    OS: ["MacOS", "Windows", "Linux (Kali, Ubuntu)"],
    "Office Tools": ["Excel", "PPT", "Project", "Word", "Drive", "Docs", "Sheets"],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            I'm a Computer Science student specializing in Networks and Security. Currently pursuing my Bachelor's
            degree at California State University, Monterey Bay.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground mb-4">
                  I'm passionate about network security and software development, with experience in both research and
                  practical applications.
                </p>
                <p className="text-muted-foreground">
                  My focus areas include full-stack development, network security, and robotics programming. I enjoy
                  working on challenging projects that combine hardware and software solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

