"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"
import { X } from "lucide-react"

const LanguageModal = ({ isOpen, onClose }) => {
  const { setLanguage } = useLanguage()

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-card rounded-2xl border border-border shadow-2xl p-6 sm:p-8 max-w-md w-11/12"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Content */}
            <div className="text-center">
              <motion.h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Select Language
              </motion.h2>
              <p className="text-muted-foreground text-sm mb-8">Choose your preferred language to continue</p>

              {/* Language Options */}
              <div className="space-y-3">
                {/* English */}
                <motion.button
                  onClick={() => handleSelectLanguage("en")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-primary to-secondary text-primary-foreground font-bold text-lg transition-shadow hover:shadow-lg shadow-md"
                >
                  English
                </motion.button>

                {/* Gujarati */}
                <motion.button
                  onClick={() => handleSelectLanguage("gu")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-accent to-secondary text-accent-foreground font-bold text-lg transition-shadow hover:shadow-lg shadow-md"
                >
                  ગુજરાતી
                </motion.button>
              </div>

              {/* Skip Button */}
              <button
                onClick={onClose}
                className="mt-6 text-sm text-muted-foreground hover:text-primary transition font-medium"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LanguageModal
