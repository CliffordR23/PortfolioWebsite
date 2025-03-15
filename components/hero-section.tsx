"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden navy-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <div className="mb-8 relative w-[200px] h-[200px] mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot-Photoroom-osWxXHeOYfnbqB1ThWZ6FHsb6cHx7s.png"
            alt="Clifford Rodriguez headshot"
            fill
            className="rounded-full object-cover border-4 border-blue-300"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Clifford Rodriguez
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
          Computer Science Student with focus in Networks, Security, and Full Stack WebDev
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-300 hover:bg-blue-900/20">
            <Link href="#about">
              View My Work
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-8">
        <motion.a
            href="mailto:clirodriguez@csumb.edu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-300 hover:text-white transition-colors"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/clifford-rodriguez-8357b3214/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-300 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/CliffordR23"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-300 hover:text-white transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full animate-bounce text-blue-300 hover:text-white hover:bg-blue-900/20">
            <ArrowDown size={24} />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

