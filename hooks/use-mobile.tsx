"use client"

import { useState, useEffect } from "react"

export function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the device is mobile
    const checkMobile = () => {
      // Check screen width
      const isMobileByWidth = window.innerWidth <= 768

      // Check user agent for mobile devices
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)

      // Check if touch is the primary input
      const isMobileByTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0

      // Consider it mobile if any of these conditions are true
      setIsMobile(isMobileByWidth || isMobileByAgent || isMobileByTouch)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

