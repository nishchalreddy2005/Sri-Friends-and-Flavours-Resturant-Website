"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/app/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function OffersCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const offers = [
    {
      id: 1,
      title: "SPEND ₹500 AND GET 10% + 5% EXTRA ON YOUTUBE PROMOTION VIDEO.",
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-800",
    },
    {
      id: 2,
      title: "WEEKEND SPECIAL (SAT & SUN ONLY): SPEND ₹500 AND GET FREE CRISPY FRENCH FRIES.",
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
    },
    {
      id: 3,
      title: "PREMIUM OFFER (SAT & SUN ONLY): SPEND ₹1000 AND ENJOY A FREE REFRESHING MOJITO.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [offers.length])

  return (
    <div className="relative max-w-4xl mx-auto h-[180px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 overflow-hidden rounded-lg border ${offers[currentIndex].borderColor}`}
        >
          <div
            className={`w-full h-full p-8 flex flex-col items-center justify-center text-center ${offers[currentIndex].color}`}
          >
            <h3 className={`text-2xl font-bold ${offers[currentIndex].textColor}`}>{offers[currentIndex].title}</h3>
            <p className="mt-4 text-sm text-gray-600">Valid till May 31, 2025</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

