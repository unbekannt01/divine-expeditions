"use client"

import { useState } from "react"
import { LanguageProvider } from "@/components/tourism/LanguageContext.jsx"
import LanguageModal from "@/components/tourism/LanguageModal.jsx"
import Navbar from "@/components/tourism/Navbar.jsx"
import HeroSection from "@/components/tourism/HeroSection.jsx"
import ToursSection from "@/components/tourism/ToursSection.jsx"
import GallerySection from "@/components/tourism/GallerySection.jsx"
import RulesSection from "@/components/tourism/RulesSection.jsx"
import Footer from "@/components/tourism/Footer.jsx"

const Index = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(true)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <LanguageModal isOpen={showLanguageModal} onClose={() => setShowLanguageModal(false)} />
        <Navbar />
        <main>
          <HeroSection />
          <ToursSection />
          <GallerySection />
          <RulesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default Index
