"use client"

import { useEffect, useState } from "react"
import { useIsMobile } from "./ui/use-mobile"

export function SimpleCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [useIsMobile])

  if (useIsMobile()) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: mousePosition.x,
          top: mousePosition.y,
          width: "180px",
          height: "180px",
          marginLeft: "-90px",
          marginTop: "-90px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.2) 50%, rgba(236,72,153,0.1) 100%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />
    </div>
  )
}

