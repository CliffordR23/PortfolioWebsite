"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function LogoImageAnimation() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  useEffect(() => {
    // Set a timeout to remove the animation overlay after it completes
    const timer = setTimeout(() => {
      setIsAnimationComplete(true)
    }, 1000) // 1 second total for animation

    return () => clearTimeout(timer)
  }, [])

  // If animation is complete, don't render anything
  if (isAnimationComplete) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-32 h-32 relative"
      >
        <div className="invert">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CR2-kd7RHqAGSUWnbzbkrT0zeYIPSsHe5o.png"
            alt="CR Logo"
            width={128}
            height={128}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  )
}