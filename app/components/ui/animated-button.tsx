"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  [x: string]: any
}

export function AnimatedButton({ children, className = "", ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button className={`relative overflow-hidden ${className}`} {...props}>
        {isHovered && (
          <motion.span
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: 0.5 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
        {children}
      </Button>
    </motion.div>
  )
}

