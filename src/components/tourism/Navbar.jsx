"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { useLanguage } from "./LanguageContext.jsx"
import { getWhatsAppURL } from "../../utils/whatsapp.js"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappURL = getWhatsAppURL("Hello! I am interested in booking a pilgrimage tour.")

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-lg shadow-lg py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="font-serif text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            SHREE BHAGAVAT
          </motion.div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "gu" : "en")}
              className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              {language === "en" ? "ગુજરાતી" : "English"}
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+918866229022"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-b border-border p-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {/* Language */}
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "gu" : "en")
                  setMobileMenuOpen(false)
                }}
                className="w-full py-3 rounded-xl border border-border hover:bg-muted transition-colors font-medium text-sm"
              >
                {language === "en" ? "ગુજરાતી" : "English"}
              </button>

              {/* Phone */}
              <a
                href="tel:+918866229022"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition"
              >
                <Phone className="w-5 h-5" />
                +91 88662 29022
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 text-white font-medium text-sm hover:bg-green-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
