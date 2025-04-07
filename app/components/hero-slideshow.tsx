"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SRI%20%281%29-Yi35C8J5C3QRmI6HILxtoBGx9osYBS.png",
    alt: "Sri Friends and Flavours Restaurant Storefront",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%2018.44.45_608ad0b6.jpg-3ugvHmpvOvtcCeQDITBOjl2I7Aw7ot.jpeg",
    alt: "Restaurant Interior - Dining Area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%2018.44.46_831c3c3b.jpg-Tqpua2gIVJ0sPknAVJaNCD5EirFr9V.jpeg",
    alt: "Restaurant Interior - View Towards Entrance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDmbgqRdDWMGlXURJmIgq1kzOsbgOp.png",
    alt: "Restaurant Tables and Seating",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%2018.44.47_92d6a176.jpg-jFP8dbiwlYvx7pAeI4bnQlGXhJ1nvv.jpeg",
    alt: "Restaurant Interior - Full View",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-07%20at%2018.44.47_ca0ad247.jpg-3gkgUN7eWAIbv3pt5BWrVvCFXThTqx.jpeg",
    alt: "Sri Friends and Flavours Logo",
  },
]

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Set up the slideshow timer
  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [isClient])

  if (!isClient) {
    // Server-side or initial render
    return (
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image src={images[0].src || "/placeholder.svg"} alt={images[0].alt} fill priority className="object-cover" />
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

