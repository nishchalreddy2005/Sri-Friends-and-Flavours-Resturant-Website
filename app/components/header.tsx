"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { LanguageNotification } from "./language-notification"
import { useLanguage } from "@/app/contexts/language-context"

export function Header({ activePage = "home" }: { activePage?: "home" | "menu" | "contact" }) {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Logo alt="Sri Friends and Flavours" className="pt-3" />
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className={`font-medium ${activePage === "home" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/menu"
            className={`font-medium ${activePage === "menu" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
          >
            {t("nav.menu")}
          </Link>
          <Link
            href="/contact"
            className={`font-medium ${activePage === "contact" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
          >
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-2 relative">
          <div className="relative" id="language-switcher-container">
            <LanguageSwitcher />
          </div>
          <div className="relative">
            <ThemeToggle />
          </div>
          <LanguageNotification />

          {/* Mobile menu button */}
          <Button size="sm" className="md:hidden bg-primary hover:bg-primary/90" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="ml-2">{t("nav.menu")}</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium ${activePage === "home" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/menu"
              className={`font-medium ${activePage === "menu" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.menu")}
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${activePage === "contact" ? "text-primary" : "hover:text-primary"} dark:text-gray-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

