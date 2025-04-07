"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  speed?: number
}

export function ParallaxSection({ children, className = "", direction = "up", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [elementTop, setElementTop] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setIsMounted(true)

    // Safety check for SSR
    if (typeof window === "undefined") return

    let mounted = true

    // Get element position
    const updateElementPosition = () => {
      if (!mounted || !ref.current) return

      const element = ref.current as HTMLElement
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setElementHeight(rect.height)
      setWindowHeight(window.innerHeight)
    }

    // Update scroll position
    const handleScroll = () => {
      if (!mounted) return
      window.requestAnimationFrame(() => {
        if (mounted) {
          setScrollY(window.scrollY)
        }
      })
    }

    // Update on resize
    const handleResize = () => {
      if (!mounted) return
      window.requestAnimationFrame(() => {
        if (mounted) {
          updateElementPosition()
        }
      })
    }

    // Initial setup with delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      if (mounted) {
        updateElementPosition()
        handleScroll()
      }
    }, 100)

    // Safe way to add event listeners
    let scrollListener, resizeListener
    try {
      scrollListener = () => handleScroll()
      resizeListener = () => handleResize()

      // Only add listeners if window exists
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollListener, { passive: true })
        window.addEventListener("resize", resizeListener, { passive: true })
      }
    } catch (error) {
      console.error("Error adding event listeners:", error)
    }

    return () => {
      mounted = false
      clearTimeout(initTimer)

      // Safe way to remove event listeners
      try {
        if (typeof window !== "undefined") {
          if (scrollListener) window.removeEventListener("scroll", scrollListener)
          if (resizeListener) window.removeEventListener("resize", resizeListener)
        }
      } catch (error) {
        console.error("Error removing event listeners:", error)
      }
    }
  }, [])

  // Calculate parallax effect
  const calculateParallax = () => {
    if (!isMounted) return { transform: "none" }

    // Calculate how far the element is from the viewport
    const elementProgress = (scrollY - (elementTop - windowHeight)) / (elementHeight + windowHeight)
    const clampedProgress = Math.min(Math.max(elementProgress, 0), 1)

    // Apply transform based on direction
    const transformValue = clampedProgress * speed * 100

    switch (direction) {
      case "up":
        return { transform: `translateY(-${transformValue}px)` }
      case "down":
        return { transform: `translateY(${transformValue}px)` }
      case "left":
        return { transform: `translateX(-${transformValue}px)` }
      case "right":
        return { transform: `translateX(${transformValue}px)` }
      default:
        return { transform: `translateY(-${transformValue}px)` }
    }
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={calculateParallax()}>{children}</motion.div>
    </div>
  )
}

