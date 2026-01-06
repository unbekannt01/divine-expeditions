"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import { getWhatsAppURL, WHATSAPP_NUMBER, WHATSAPP_SECONDARY } from "@/utils/whatsapp.js"

const ContactButtons = ({ variant = "row", className = "" }) => {
  const whatsappURL = getWhatsAppURL("Hello! I am interested in booking a pilgrimage tour. Please provide details.")

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05, y: -3 },
    whileTap: { scale: 0.95 },
  }

  return (
    <div className={`flex ${variant === "row" ? "flex-row gap-3 lg:gap-4" : "flex-col gap-3"} ${className}`}>
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        {...buttonVariants}
        className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
        <span className="sm:hidden">Chat</span>
      </motion.a>

      {/* Primary Phone Button */}
      <motion.a
        href={`tel:+91${WHATSAPP_NUMBER}`}
        {...buttonVariants}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Call</span>
        <span className="sm:hidden">+91</span>
      </motion.a>

      {/* Secondary Phone Button (Mobile hidden for space) */}
      <motion.a
        href={`tel:+91${WHATSAPP_SECONDARY}`}
        {...buttonVariants}
        transition={{ delay: 0.2 }}
        className="hidden md:flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Call 2</span>
      </motion.a>
    </div>
  )
}

export default ContactButtons
