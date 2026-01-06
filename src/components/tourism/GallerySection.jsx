"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext.jsx";

const GallerySection = () => {
  const { t } = useLanguage();

  // Local images from public/images folder
  const galleryImages = [
    { url: "/images/ayodhya.jpg", title: "Ayodhya" },
    { url: "/images/haridwar.jpg", title: "Haridwar" },
    { url: "/images/omkareshwar.jpg", title: "Omkareshwar" },
    { url: "/images/khatu-shyam.jpg", title: "Khatu Shyam" },
    { url: "/images/salasar.jpg", title: "Salasar Balaji" },
    { url: "/images/nathdwara.jpg", title: "Nathdwara" },
    { url: "/images/muktinath.png", title: "Muktinath" },
    { url: "/images/puri.jpg", title: "Jagannathpuri" },
    { url: "/images/prem-mandir.jpg", title: "Prem-Mandir" },
  ];

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

        {/* Gallery Grid */}
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
                <h3 className="inline-block text-black font-semibold text-sm sm:text-base bg-white rounded-full px-2 py-1">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
