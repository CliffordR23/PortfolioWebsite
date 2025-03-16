"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileUser, Github, Linkedin, Mail, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "clirodriguez@csumb.edu",
      href: "mailto:clirodriguez@csumb.edu",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/Clifford",
      href: "https://www.linkedin.com/in/clifford-rodriguez-8357b3214/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/Clifford",
      href: "https://github.com/CliffordR23",
    },
    {
      icon: <FileUser className="h-5 w-5" />,
      title: "Resume",
      value: "Download my resume as a pdf",
      // href: "#",
      href: "/Resume.pdf",
      download: true,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Feel free to reach out for opportunities or collaborations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>I'm currently open to new opportunities and collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.title === "LinkedIn" || contact.title === "GitHub" ? "_blank" : undefined}
                    rel={contact.title === "LinkedIn" || contact.title === "GitHub" ? "noopener noreferrer" : undefined}
                    download={contact.download ? "Resume.pdf" : undefined}
                    className="block"
                  >
                    <div className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="mr-3 text-primary">{contact.icon}</div>
                      <div>
                        <p className="text-sm font-medium">{contact.title}</p>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Send me a message and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded-md border border-input bg-background resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

