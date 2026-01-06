"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./LanguageContext.jsx"

const RulesSection = () => {
  const { t } = useLanguage()

  const rules = ["booking", "accommodation", "luggage", "food", "tickets", "health"]

  const icons = {
    booking: "📋",
    accommodation: "🏨",
    luggage: "🧳",
    food: "🍴",
    tickets: "🎫",
    health: "⚕️",
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t("rulesTitle")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateY: -4 }}
              className="group"
            >
              <div className="p-6 h-full border border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card rounded-2xl">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">{icons[rule]}</div>
                  <h3 className="font-serif text-lg font-bold text-primary flex-1">{t(`rule.${rule}.title`)}</h3>
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`rule.${rule}.text`)}</p>

                {/* Accent Line */}
                <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RulesSection
