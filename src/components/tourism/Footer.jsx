"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react"
import { useLanguage } from "./LanguageContext.jsx"
import { getInquiryURL, WHATSAPP_SECONDARY } from "../../utils/whatsapp.js"

const Footer = () => {
  const { t } = useLanguage()

  const whatsappURL = getInquiryURL()

  return (
    <footer className="relative py-12 sm:py-16 border-t border-border bg-muted/30">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            SHREE BHAGAVAT
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">Tourism & Travels</p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 px-2"
        >
          <a
            href="tel:+918866229022"
            className="flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-xs sm:text-sm font-medium"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="hidden sm:inline">+91 88662 29022</span>
            <span className="sm:hidden">Call 1</span>
          </a>
          <a
            href={`tel:+91${WHATSAPP_SECONDARY}`}
            className="flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-card border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all text-xs sm:text-sm font-medium"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            <span className="hidden sm:inline">+91 81286 51355</span>
            <span className="sm:hidden">Call 2</span>
          </a>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-green-500 text-white font-semibold text-xs sm:text-sm hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8 sm:mb-10 text-xs sm:text-base px-2"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
          <span>Zanzarda Road, Junagadh, Gujarat</span>
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 sm:mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">{t("footerText")}</p>
          <p className="text-muted-foreground/60 text-xs sm:text-sm mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" /> for pilgrims
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
