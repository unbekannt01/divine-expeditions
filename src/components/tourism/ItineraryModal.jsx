"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"
import { getBookingURL } from "../../utils/whatsapp.js"
import { X, Download } from "lucide-react"

const ItineraryModal = ({ isOpen, onClose, tourKey }) => {
  const { t } = useLanguage()

  const daysNum = Number.parseInt(t(`tour.${tourKey}.daysNum`))
  const days = Array.from({ length: daysNum }, (_, i) => i + 1)
  const tourName = t(`tour.${tourKey}.name`)
  const tourPrice = t(`tour.${tourKey}.price`)

  // Bus Type (Dynamic)
  const busType = t(`tour.${tourKey}.busType`)

  const pdfUrl = t(`tour.${tourKey}.pdfUrl`)

  const handlePdfDownload = () => {
    if (pdfUrl && pdfUrl.includes("drive.google.com")) {
      window.open(pdfUrl, "_blank")
    } else {
      alert("PDF not available for this tour yet.")
    }
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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 bg-white dark:bg-card rounded-2xl border border-border shadow-2xl max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between gap-4 z-10">
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground line-clamp-2">{tourName}</h2>
                <p className="text-sm text-muted-foreground mt-1">{t(`tour.${tourKey}.days`)} Tour Package</p>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-muted rounded-lg transition shrink-0"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-6">
              <motion.button
                onClick={handlePdfDownload}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-5 h-5" />
                {t("downloadPdf")}
              </motion.button>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-linear-to-r from-primary/5 to-secondary/5 rounded-xl p-4 sm:p-5 border border-primary/20"
              >
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  {t("whatsIncluded")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Bus Type (Dynamic, Separate) */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                  >
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{busType}</span>
                  </motion.div>

                  {/* Other Included Items */}
                  {["meals", "room", "support"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t(`included.${item}`)}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <div>
                <h3 className="font-serif font-bold text-foreground mb-4 text-lg">Day-by-Day Itinerary</h3>
                <div className="space-y-3 max-h-75 overflow-y-auto pr-2">
                  {days.map((day) => (
                    <motion.div
                      key={day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: day * 0.02 }}
                      className="flex gap-3 sm:gap-4 p-3 rounded-lg bg-muted/40 hover:bg-muted/70 transition"
                    >
                      <div className="shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-xs sm:text-sm font-bold text-black">
                          {day}
                        </div>
                      </div>
                      <div className="grow min-w-0">
                        <p className="text-xs sm:text-sm font-semibold">{t(`itinerary.${tourKey}.day${day}`)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href={getBookingURL(tourName)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 px-4 bg-linear-to-r from-primary via-secondary to-accent text-primary-foreground font-bold rounded-xl hover:shadow-lg transition-shadow text-center text-sm sm:text-base"
              >
                Book This Tour - {tourPrice}
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ItineraryModal



