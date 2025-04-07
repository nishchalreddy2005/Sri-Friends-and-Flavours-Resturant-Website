"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { useLanguage } from "@/app/contexts/language-context"
import emailjs from "@emailjs/browser"
import { Toaster } from "@/components/ui/toaster"
import { HeroSlideshow } from "@/app/components/hero-slideshow"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailJSInitialized, setEmailJSInitialized] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("jxNOippq-2ypBptno")
    setEmailJSInitialized(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update the validateEmail function to be more comprehensive
  const validateEmail = (email: string): boolean => {
    // This regex checks for a more comprehensive email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  // Validate phone number (at least 10 digits)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10,}$/
    return phoneRegex.test(phone.replace(/\D/g, "")) // Remove non-digits before checking
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email Format",
        description: "Please enter a valid email address (e.g., name@example.com).",
        variant: "destructive",
      })
      return
    }

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must contain at least 10 digits.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.send("service_afbyncq", "template_rsjg6av", {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_name: "Sri Friends and Flavours",
      })

      if (result.text === "OK") {
        toast({
          title: "Thank You!",
          description: "Your message has been sent successfully. We will respond to you as soon as possible.",
          duration: 5000, // Show for 5 seconds
        })

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header activePage="contact" />

      {/* Contact Hero */}
      <section className="relative h-[300px]">
        {/* Hero Slideshow */}
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{t("contact.hero.title")}</h1>
          <p className="max-w-md mt-4">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold">{t("contact.info.title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("contact.info.description")}</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.address.title")}</h3>
                    <a
                      href="https://maps.google.com/?q=5-9-7,+1st+line+Brodipet,+Guntur,+Andhra+Pradesh+-+522002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      {t("address.full")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.phone.title")}</h3>
                    <p className="text-muted-foreground">{t("address.phone")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.email.title")}</h3>
                    <p className="text-muted-foreground">{t("address.email")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mt-1 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium">{t("home.visit.hours.title")}</h3>
                    <p className="text-muted-foreground">{t("home.visit.hours.weekdays")}</p>
                    <p className="text-muted-foreground">{t("home.visit.hours.weekends")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="p-6 border rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold">{t("contact.form.title")}</h2>
                <p className="mt-2 text-muted-foreground">{t("contact.form.description")}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.message")}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting || !emailJSInitialized}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t("contact.form.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.button")}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">{t("contact.map.title")}</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
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
      </section>

      {/* Footer */}
      <Footer />
      <Toaster />
    </div>
  )
}

