"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

const GallerySection = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1000&h=700&fit=crop", title: "Holy Temple" },
    {
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1000&h=700&fit=crop",
      title: "Sacred Rivers",
    },
    {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&h=700&fit=crop",
      title: "Spiritual Journey",
    },
    {
      url: "https://images.unsplash.com/photo-1585577529540-b44e9831ef4e?w=1000&h=700&fit=crop",
      title: "Mountain Temples",
    },
  ]

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t("galleryTitle")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
        >
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-primary/80 hover:bg-primary text-white transition shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-primary/80 hover:bg-primary text-white transition shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2">
          {galleryImages.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition ${i === currentIndex ? "bg-primary w-8" : "bg-muted w-2 hover:bg-muted-foreground"}`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
