"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/app/contexts/language-context"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export function LanguageNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const { language, t } = useLanguage()
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Check if notification has been dismissed before
    const hasSeenNotification = localStorage.getItem("hasSeenLanguageNotification")

    if (!hasSeenNotification) {
      // Show notification after a short delay
      const showTimer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(showTimer)
    }
  }, [])

  // Auto-close notification after 10 seconds
  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(() => {
        dismissNotification()
      }, 10000) // 10 seconds

      return () => clearTimeout(autoCloseTimer)
    }
  }, [isVisible])

  const dismissNotification = () => {
    setIsVisible(false)
    // Save to localStorage so it doesn't show again
    localStorage.setItem("hasSeenLanguageNotification", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-16 right-4 md:right-8 z-50 bg-gray-800 text-white dark:bg-gray-900 shadow-lg rounded-lg p-4 max-w-xs">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-1 right-1 h-8 w-8 p-0 rounded-full text-lg font-bold text-white hover:bg-gray-700"
        onClick={dismissNotification}
      >
        ×
      </Button>

      <div className="flex flex-col items-center">
        {/* Straight arrow pointing up, positioned for both mobile and desktop */}
        <div className={`absolute -top-8 ${isMobile ? "right-36" : "right-16"}`}>
          <ArrowUp className="text-orange-500 animate-pulse" size={32} />
        </div>

        {/* Messages in all languages */}
        <div className="text-center space-y-2 text-sm">
          <p className="font-medium">To change language, click here</p>
          <p className="font-medium">భాషను మార్చడానికి, ఇక్కడ క్లిక్ చేయండి</p>
          <p className="font-medium">भाषा बदलने के लिए, यहां क्लिक करें</p>
          <p className="font-medium">மொழியை மாற்ற, இங்கே கிளிக் செய்யவும்</p>
          <p className="font-medium">ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಲು, ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</p>
        </div>
      </div>
    </div>
  )
}

