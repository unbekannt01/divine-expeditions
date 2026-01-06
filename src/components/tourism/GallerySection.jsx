"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"

const GallerySection = () => {
  const { t } = useLanguage()

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop", title: "Holy Temple" },
    { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=400&fit=crop", title: "Sacred Rivers" },
    { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop", title: "Spiritual Journey" },
    { url: "https://images.unsplash.com/photo-1585577529540-b44e9831ef4e?w=600&h=400&fit=crop", title: "Mountain Temples" },
    { url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop", title: "Ancient Shrines" },
    { url: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=400&fit=crop", title: "Divine Moments" },
  ]

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
          <div className="w-20 h-1 bg-linear-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Gallery Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-4/3"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm sm:text-base">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection