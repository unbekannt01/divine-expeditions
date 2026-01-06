"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"
import TourCard from "./TourCard.jsx"

const ToursSection = () => {
  const { t } = useLanguage()

  const tourKeys = ["rajasthan", "sangam", "prayagraj", "nepal"]

  return (
    <section id="tours" className="py-16 sm:py-20 md:py-28 relative bg-muted/30">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t("toursTitle")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tourKeys.map((key, index) => (
            <TourCard key={key} tourKey={key} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToursSection
