"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext.jsx";
import ItineraryModal from "./ItineraryModal.jsx";

/* Import local images (Vite way) */
import kumbhImg from "../../../public/images/Kumbh.jpg";
import haridwarImg from "../../../public/images/haridwar.jpg";
import nepalImg from "../../../public/images/nepal.jpg";
import puriImg from "../../../public/images/puri.jpg";

const TourCard = ({ tourKey, index }) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = t(`tour.${tourKey}.name`);
  const daysNum = t(`tour.${tourKey}.daysNum`);
  const price = t(`tour.${tourKey}.price`);
  const places = t(`tour.${tourKey}.places`).split(", ");
  const busType = t(`tour.${tourKey}.busType`);

  /* Map tourKey to local images */
  const tourImages = {
    "21-01": kumbhImg, // Mahakumbh / Kumbh Mela
    "01-02": haridwarImg, // Haridwar Ganga Aarti
    "15-02": nepalImg, // Muktinath Nepal
    "22-02": puriImg, // Jagannath Puri
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border flex flex-col h-full hover:border-primary/50"
      >
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
          <img
            src={tourImages[tourKey]}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Days Badge */}
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm shadow-md border border-border">
            {daysNum} {t("days").toUpperCase()}
          </div>

          {/* Bus Type Badge */}
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm shadow-md border border-border">
            {busType}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col grow">
          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2">
            {name}
          </h3>

          {/* Destinations */}
          <div className="mb-4 grow">
            <p className="text-[10px] sm:text-xs font-bold text-accent/80 tracking-widest mb-2 uppercase">
              {t("destinations")}
            </p>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed line-clamp-2">
              {places.slice(0, 2).join(" • ")}
            </p>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold">
                {t("startingFrom")}
              </p>
              <p className="text-lg sm:text-2xl font-bold text-foreground">
                {price}
              </p>
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-primary-foreground bg-linear-to-r from-primary to-secondary rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {t("viewItinerary")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Itinerary Modal */}
      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourKey={tourKey}
      />
    </>
  );
};

export default TourCard;
