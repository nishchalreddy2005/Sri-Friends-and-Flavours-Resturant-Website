"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Safety check for SSR
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    let mounted = true
    let observer: IntersectionObserver | null = null

    // Delay creating the observer to ensure DOM is ready
    const setupTimer = setTimeout(() => {
      if (!mounted || !ref.current) return

      try {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && mounted) {
              setIsInView(true)
              // Once it's in view, we can stop observing
              if (ref.current && observer) {
                observer.unobserve(ref.current)
              }
            }
          },
          { threshold: 0.3 },
        )

        if (ref.current) {
          observer.observe(ref.current)
        }
      } catch (error) {
        console.error("Error setting up IntersectionObserver:", error)
      }
    }, 100)

    return () => {
      mounted = false
      clearTimeout(setupTimer)

      if (observer && ref.current) {
        try {
          observer.unobserve(ref.current)
          observer.disconnect()
        } catch (error) {
          console.error("Error cleaning up IntersectionObserver:", error)
        }
      }
    }
  }, [])

  // Set initial and animate values based on direction
  let initial = {}
  switch (direction) {
    case "up":
      initial = { y: 50, opacity: 0 }
      break
    case "down":
      initial = { y: -50, opacity: 0 }
      break
    case "left":
      initial = { x: 50, opacity: 0 }
      break
    case "right":
      initial = { x: -50, opacity: 0 }
      break
    case "none":
      initial = { opacity: 0 }
      break
    default:
      initial = { y: 50, opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isMounted && isInView ? { y: 0, x: 0, opacity: 1 } : initial}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

