"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdvancedCarouselProps {
  items: React.ReactNode[]
  className?: string
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  showProgress?: boolean
  effect?: "slide" | "fade" | "zoom"
}

export function AdvancedCarousel({
  items,
  className,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  showProgress = false,
  effect = "slide",
}: AdvancedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const progressControls = useAnimation()

  // Animation variants based on the selected effect
  const variants = {
    slide: {
      enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0.5,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0.5,
      }),
    },
    fade: {
      enter: {
        opacity: 0,
      },
      center: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    },
    zoom: {
      enter: {
        opacity: 0,
        scale: 0.8,
      },
      center: {
        opacity: 1,
        scale: 1,
      },
      exit: {
        opacity: 0,
        scale: 1.2,
      },
    },
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Progress animation
  useEffect(() => {
    if (showProgress) {
      progressControls.set({ scaleX: 0 })
      progressControls.start({
        scaleX: 1,
        transition: { duration: interval / 1000, ease: "linear" },
      })
    }
  }, [currentIndex, interval, progressControls, showProgress])

  // Auto play functionality
  useEffect(() => {
    if (autoPlay && !isPaused) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        goToNext()
      }, interval)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, autoPlay, interval, isPaused])

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants[effect]}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
          }}
          className="w-full h-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground z-10 shadow-md hover:bg-background transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground z-10 shadow-md hover:bg-background transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {showProgress && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={progressControls}
        />
      )}
    </div>
  )
}

