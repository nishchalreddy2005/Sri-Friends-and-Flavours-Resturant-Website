"use client"

import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"
import { useLanguage } from "@/app/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 mt-auto bg-gray-900 text-gray-100 dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo width={100} height={100} />
            <p className="mt-4 text-gray-400">{t("footer.tagline")}</p>
            <a
              href="https://maps.google.com/?q=5-9-7, 1st line Brodipet, Guntur, Andhra Pradesh - 522002"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{t("address.full")}</span>
            </a>
            <a
              href="tel:+918142890257"
              className="mt-2 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{t("address.phone")}</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t("footer.links.title")}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white">
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t("footer.connect.title")}</h3>
            <p className="mt-4 text-gray-400">{t("footer.connect.description")}</p>
            <div className="flex mt-6 space-x-5">
              <a
                href="https://www.instagram.com/sri_friendsandflavours/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={`https://wa.me/918142890257`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} className="inline-block" />
              </a>
              <a
                href="tel:+918142890257"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">{t("footer.copyright")}</p>
          <a
            href="https://gvrnishchalreddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors mt-2 inline-block"
          >
            {t("footer.developer")}
          </a>
        </div>
      </div>
    </footer>
  )
}

