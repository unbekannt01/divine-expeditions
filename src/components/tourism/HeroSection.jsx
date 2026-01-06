"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";
import { getBookingURL } from "../../utils/whatsapp.js";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted to-background" />

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent/15 rounded-full blur-3xl"
        />

        {/* Decorative Om Symbol */}
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-serif text-primary/[0.05] select-none pointer-events-none"
        >
          ॐ
        </motion.div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Logo Badge - Om Symbol with Shree Bhagavat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 sm:gap-4 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-full border border-border mb-6 sm:mb-8"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-black font-serif text-2xl sm:text-3xl shadow-lg">
            ॐ
          </div>
          <div className="text-left">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-black">
              श्री भागवत
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent mt-1 sm:mt-2 text-center">
              Tourism
            </p>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t("heroTitle")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          {t("heroSub")}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={getBookingURL()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-accent to-primary text-accent-foreground font-bold text-sm sm:text-lg shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-shadow"
        >
          <span className="text-xl sm:text-2xl">🕉️</span>
          {t("heroCta")}
        </motion.a>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-16 text-muted-foreground text-xs sm:text-sm px-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">🛏️</span>
            <span>Sleeper Coach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">🥗</span>
            <span>Pure Veg Food</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">⭐</span>
            <span>500+ Happy Pilgrims</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToTours}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs sm:text-sm">Explore Tours</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
