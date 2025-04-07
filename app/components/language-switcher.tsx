"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/app/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: t("language.english") },
    { code: "te", name: t("language.telugu") },
    { code: "hi", name: t("language.hindi") },
    { code: "ta", name: t("language.tamil") },
    { code: "kn", name: t("language.kannada") },
  ]

  const getLanguageDisplay = () => {
    switch (language) {
      case "en":
        return "English"
      case "te":
        return "తెలుగు"
      case "hi":
        return "हिंदी"
      case "ta":
        return "தமிழ்"
      case "kn":
        return "ಕನ್ನಡ"
      default:
        return "English"
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline-block">{getLanguageDisplay()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
          {t("language.english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("te")} className={language === "te" ? "bg-muted" : ""}>
          {t("language.telugu")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hi")} className={language === "hi" ? "bg-muted" : ""}>
          {t("language.hindi")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ta")} className={language === "ta" ? "bg-muted" : ""}>
          {t("language.tamil")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("kn")} className={language === "kn" ? "bg-muted" : ""}>
          {t("language.kannada")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

