"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    // Only run this effect on the client
    setIsMounted(true)

    // Safety check for SSR
    if (typeof window === "undefined") return

    let mounted = true
    const canvas = canvasRef.current

    // If canvas doesn't exist, don't proceed
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      if (!mounted || !canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    // Create particles
    const createParticles = () => {
      if (!mounted || !canvas) return

      particles.current = []
      const particleCount = Math.floor(window.innerWidth / 20) // Responsive particle count

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(255, 215, 0, ${Math.random() * 0.5})`, // Gold color with varying opacity
        })
      }
    }

    createParticles()

    // Only add event listener if window exists and we're in the browser
    let resizeHandler
    try {
      if (typeof window !== "undefined" && mounted) {
        resizeHandler = () => {
          if (mounted) {
            setCanvasSize()
            createParticles()
          }
        }
        window.addEventListener("resize", resizeHandler, { passive: true })
      }
    } catch (error) {
      console.error("Error adding resize listener:", error)
    }

    // Animation loop
    const animate = () => {
      if (!mounted || !canvas || !ctx) return

      animationFrameId.current = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Start animation with a slight delay to ensure DOM is ready
    const animationTimer = setTimeout(() => {
      if (mounted) {
        animate()
      }
    }, 100)

    // Clean up function
    return () => {
      mounted = false
      clearTimeout(animationTimer)

      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }

      // Safe way to remove event listener
      try {
        if (typeof window !== "undefined" && resizeHandler) {
          window.removeEventListener("resize", resizeHandler)
        }
      } catch (error) {
        console.error("Error removing resize listener:", error)
      }
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}

