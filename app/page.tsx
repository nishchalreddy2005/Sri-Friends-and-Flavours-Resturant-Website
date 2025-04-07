"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { useLanguage } from "@/app/contexts/language-context"
import { HeroSlideshow } from "@/app/components/hero-slideshow"
import { OffersCarousel } from "@/app/components/offers-carousel"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header activePage="home" />

      {/* Hero Section with Image Slideshow */}
      <section className="relative h-[500px]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">{t("home.hero.title")}</h1>
          <p className="max-w-md mt-4 text-lg">{t("home.hero.subtitle")}</p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/menu">{t("home.hero.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">{t("home.offers.title")}</h2>
          <OffersCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("home.story.title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("home.story.description1")}</p>
              <p className="mt-4 text-muted-foreground">{t("home.story.description2")}</p>
              <p className="mt-4 text-muted-foreground">{t("home.story.description3")}</p>
              <p className="mt-4 text-muted-foreground">{t("home.story.description4")}</p>
            </div>
            <div className="h-auto overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SRI%20%281%29-Yi35C8J5C3QRmI6HILxtoBGx9osYBS.png"
                alt="Sri Friends and Flavours Restaurant Storefront"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center dark:text-white">{t("home.featured.title")}</h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground dark:text-gray-300">
            {t("home.featured.subtitle")}
          </p>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: t("menu.category.rice"),
                price: t("price.starting.from", [50]),
                image: "/images/menu/rice-bowls-featured.png",
                category: "rice",
              },
              {
                name: t("menu.category.chinese"),
                price: t("price.starting.from", [69]),
                image: "/images/menu/chinese-featured.png",
                category: "chinese",
              },
              {
                name: t("menu.category.continental"),
                price: t("price.starting.from", [49]),
                image: "/images/menu/continental-featured.png",
                category: "continental",
              },
              {
                name: t("menu.category.mojitos"),
                price: t("price.starting.from", [79]),
                image: "/images/menu/mojitos-featured.png",
                category: "mojitos",
              },
              {
                name: t("menu.category.juices"),
                price: t("price.starting.from", [30]),
                image: "/images/menu/juices-featured.png",
                category: "juices",
              },
              {
                name: t("menu.category.biryani"),
                price: t("price.starting.from", [99]),
                image: "/images/menu/biryani-featured.png",
                category: "biryani",
              },
              {
                name: t("menu.category.starters"),
                price: t("price.starting.from", [99]),
                image: "/images/menu/starters-featured.png",
                category: "starters",
              },
              {
                name: t("menu.category.combos"),
                price: t("price.starting.from", [149]),
                image: "/images/menu/combos-featured.png",
                category: "combos",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/menu?category=${item.category}`}
                className="overflow-hidden transition-shadow border rounded-lg hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="relative h-48 bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold dark:text-white">{item.name}</h3>
                    <span className="font-medium text-primary dark:text-primary">{item.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/menu">{t("home.featured.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("home.visit.title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("home.visit.description")}</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.address.title")}</h3>
                    <p className="text-muted-foreground">{t("address.full")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.phone.title")}</h3>
                    <p className="text-muted-foreground">{t("address.phone")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.email.title")}</h3>
                    <p className="text-muted-foreground">{t("address.email")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.hours.title")}</h3>
                    <p className="text-muted-foreground">{t("home.visit.hours.weekdays")}</p>
                    <p className="text-muted-foreground">{t("home.visit.hours.weekends")}</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8" asChild>
                <Link href="/contact">{t("home.visit.button")}</Link>
              </Button>
            </div>
            <div className="h-64 overflow-hidden rounded-lg md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1731116893396!2d80.43330731486!3d16.300088888736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75a6291f812d%3A0x8e63a1015dec4e6!2sSri%20Friends%20and%20Flavours!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Friends and Flavours Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

