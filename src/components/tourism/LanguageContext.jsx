"use client"

import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    heroTitle: "Journey to the Divine",
    heroSub:
      "Experience spiritual luxury with our premium sleeper coach tours to India's most sacred destinations. Pure vegetarian food, comfortable stays, and peaceful travels.",
    heroCta: "Book Your Pilgrimage",
    toursTitle: "Sacred Journeys 2026",
    rulesTitle: "Important Information",
    galleryTitle: "Divine Destinations",
    footerText: "© 2026 Shree Bhagavat Tourism & Travels. All Rights Reserved.",
    bookNow: "Book This Tour",
    days: "Days",
    viewItinerary: "View Itinerary",
    destinations: "DESTINATIONS",
    startingFrom: "Starting From",
    whatsIncluded: "What's Included",
    close: "Close",

    "tour.rajasthan.name": "Rajasthan Special",
    "tour.rajasthan.date": "08-01-2026",
    "tour.rajasthan.days": "6 Days",
    "tour.rajasthan.daysNum": "6",
    "tour.rajasthan.price": "₹8,500",
    "tour.rajasthan.places": "Ramdevra, Karnimata, Salasar, Khatu Shyam, Pushkar, Nathdwara",

    "tour.sangam.name": "Prayagraj Sangam",
    "tour.sangam.date": "21-01-2026",
    "tour.sangam.days": "8 Days",
    "tour.sangam.daysNum": "8",
    "tour.sangam.price": "₹11,000",
    "tour.sangam.places": "Prayagraj, Banaras, Kashi Vishwanath, Ayodhya, Chitrakoot, Ujjain",

    "tour.prayagraj.name": "Prayagraj Poornima",
    "tour.prayagraj.date": "29-01-2026",
    "tour.prayagraj.days": "14 Days",
    "tour.prayagraj.daysNum": "14",
    "tour.prayagraj.price": "₹17,500",
    "tour.prayagraj.places": "Haridwar, Mathura, Ayodhya, Prayagraj, Khatu Shyam, Pushkar",

    "tour.nepal.name": "Nepal Yatra",
    "tour.nepal.date": "01-02-2026",
    "tour.nepal.days": "19 Days",
    "tour.nepal.daysNum": "19",
    "tour.nepal.price": "₹24,000",
    "tour.nepal.places": "Gorakhpur, Muktinath, Pashupatinath, Janakpur, Jagannathpuri, Gangasagar",

    "itinerary.rajasthan.day1": "Departure from Junagadh (Night Travel)",
    "itinerary.rajasthan.day2": "Ramdevra, Karnimata Temple (Stay)",
    "itinerary.rajasthan.day3": "Salasar, Khatu Shyam (Stay at Pushkar)",
    "itinerary.rajasthan.day4": "Pushkar, Savariya Seth (Stay at Nathdwara)",
    "itinerary.rajasthan.day5": "Nathdwara Darshan",
    "itinerary.rajasthan.day6": "Shamlaji, Evening Arrival Junagadh",

    "itinerary.sangam.day1": "Departure from Junagadh",
    "itinerary.sangam.day2": "Arrival Prayagraj, Sangam Snan",
    "itinerary.sangam.day3": "Prayagraj Darshan",
    "itinerary.sangam.day4": "Banaras, Kashi Vishwanath",
    "itinerary.sangam.day5": "Ayodhya Ram Mandir",
    "itinerary.sangam.day6": "Chitrakoot Darshan",
    "itinerary.sangam.day7": "Ujjain Mahakaleshwar",
    "itinerary.sangam.day8": "Return to Junagadh",

    "itinerary.prayagraj.day1": "Departure from Junagadh",
    "itinerary.prayagraj.day2": "Haridwar, Har Ki Pauri",
    "itinerary.prayagraj.day3": "Rishikesh Darshan",
    "itinerary.prayagraj.day4": "Mathura, Vrindavan",
    "itinerary.prayagraj.day5": "Ayodhya Ram Mandir",
    "itinerary.prayagraj.day6": "Prayagraj Poornima Snan",
    "itinerary.prayagraj.day7": "Prayagraj Temple Visit",
    "itinerary.prayagraj.day8": "Banaras Kashi Vishwanath",
    "itinerary.prayagraj.day9": "Banaras Ghat Darshan",
    "itinerary.prayagraj.day10": "Khatu Shyam Temple",
    "itinerary.prayagraj.day11": "Salasar Balaji",
    "itinerary.prayagraj.day12": "Pushkar Brahma Temple",
    "itinerary.prayagraj.day13": "Nathdwara Shrinathji",
    "itinerary.prayagraj.day14": "Return to Junagadh",

    "itinerary.nepal.day1": "Departure from Junagadh",
    "itinerary.nepal.day2": "Gorakhpur Temple",
    "itinerary.nepal.day3": "Nepal Border, Pokhara",
    "itinerary.nepal.day4": "Muktinath Temple",
    "itinerary.nepal.day5": "Pokhara Lake, Sightseeing",
    "itinerary.nepal.day6": "Kathmandu, Pashupatinath",
    "itinerary.nepal.day7": "Kathmandu Darshan",
    "itinerary.nepal.day8": "Janakpur Temple",
    "itinerary.nepal.day9": "Sitamarhi, Patna",
    "itinerary.nepal.day10": "Gaya, Vishnu Temple",
    "itinerary.nepal.day11": "Bodhgaya Darshan",
    "itinerary.nepal.day12": "Puri, Jagannath Temple",
    "itinerary.nepal.day13": "Puri Beach, Konark Temple",
    "itinerary.nepal.day14": "Bhubaneswar",
    "itinerary.nepal.day15": "Gangasagar",
    "itinerary.nepal.day16": "Kolkata Dakshineswar",
    "itinerary.nepal.day17": "Kolkata Sightseeing",
    "itinerary.nepal.day18": "Champaran, Ahmedabad",
    "itinerary.nepal.day19": "Return to Junagadh",

    "included.bus": "Sleeper Coach Bus 2x1",
    "included.meals": "2 Times Meals + Morning Tea/Coffee",
    "included.room": "4-5 Person Room Sharing",
    "included.support": "Group Support & Security",

    "rule.booking.title": "Booking Policy",
    "rule.booking.text":
      "50% advance payment required to confirm your seat. Full payment must be made 10 days before departure.",
    "rule.accommodation.title": "Accommodation",
    "rule.accommodation.text":
      "Rooms provided for 4-5 persons or common hall arrangements. Separate rooms available at additional cost.",
    "rule.luggage.title": "Luggage Care",
    "rule.luggage.text":
      "Passengers are responsible for their own luggage from bus to accommodation. Please bring light bedding.",
    "rule.food.title": "Food Service",
    "rule.food.text":
      "2 meals daily and 1 tea/coffee included. Pure vegetarian Gujarati food served throughout the journey.",
    "rule.tickets.title": "Entry Tickets",
    "rule.tickets.text":
      "All entry tickets and sightseeing at temples are at your own expense. Seats assigned on first-come basis.",
    "rule.health.title": "Health & Safety",
    "rule.health.text":
      "Please carry your necessary medicines. The organizer reserves the right to modify the itinerary due to circumstances.",
  },
  gu: {
    heroTitle: "દિવ્ય યાત્રાનો અનુભવ",
    heroSub:
      "ભારતના સૌથી પવિત્ર સ્થળોની આરામદાયક સ્લીપર કોચ મુસાફરી. શુદ્ધ શાકાહારી ભોજન, સરળ રહેવાની વ્યવસ્થા અને શાંતિપૂર્ણ પ્રવાસ.",
    heroCta: "તમારી યાત્રા બુક કરો",
    toursTitle: "પવિત્ર યાત્રાઓ ૨૦૨૬",
    rulesTitle: "મહત્વપૂર્ણ માહિતી",
    galleryTitle: "દિવ્ય સ્થળો",
    footerText: "© ૨૦૨૬ શ્રીભાગવત ટૂરિઝમ એન્ડ ટ્રાવેલ્સ. સર્વાધિકાર સુરક્ષિત.",
    bookNow: "આ ટૂર બુક કરો",
    days: "દિવસ",
    viewItinerary: "યાત્રા જુઓ",
    destinations: "ગંતવ્યો",
    startingFrom: "શરૂઆતથી",
    whatsIncluded: "શું શામેલ છે",
    close: "બંધ કરો",

    "tour.rajasthan.name": "રાજસ્થાન સ્પેશ્યલ",
    "tour.rajasthan.date": "08-01-2026",
    "tour.rajasthan.days": "૬ દિવસ",
    "tour.rajasthan.daysNum": "6",
    "tour.rajasthan.price": "₹8,500",
    "tour.rajasthan.places": "રામદેવરા, કરણીમાતા, સાલાસર, ખાટૂ શ્યામ, પુષ્કર, નાથદ્વારા",

    "tour.sangam.name": "પ્રયાગરાજ સંગમ",
    "tour.sangam.date": "21-01-2026",
    "tour.sangam.days": "૮ દિવસ",
    "tour.sangam.daysNum": "8",
    "tour.sangam.price": "₹11,000",
    "tour.sangam.places": "પ્રયાગરાજ, બનારસ, કાશી વિશ્વનાથ, અયોધ્યા, ચિત્રકૂટ, ઉજ્જૈન",

    "tour.prayagraj.name": "પ્રયાગરાજ પૂર્ણિમા",
    "tour.prayagraj.date": "29-01-2026",
    "tour.prayagraj.days": "૧૪ દિવસ",
    "tour.prayagraj.daysNum": "14",
    "tour.prayagraj.price": "₹17,500",
    "tour.prayagraj.places": "હરિદ્વાર, મથુરા, અયોધ્યા, પ્રયાગરાજ, ખાટૂ શ્યામ, પુષ્કર",

    "tour.nepal.name": "નેપાળ યાત્રા",
    "tour.nepal.date": "01-02-2026",
    "tour.nepal.days": "૧૯ દિવસ",
    "tour.nepal.daysNum": "19",
    "tour.nepal.price": "₹24,000",
    "tour.nepal.places": "ગોરખપુર, મુક્તિનાથ, પશુપતિનાથ, જનકપુર, જગન્નાથપુરી, ગંગાસાગર",

    "itinerary.rajasthan.day1": "જૂનાગઢથી પ્રસ્થાન (રાત્રી મુસાફરી)",
    "itinerary.rajasthan.day2": "રામદેવરા, કરણીમાતા મંદિર (રોકાણ)",
    "itinerary.rajasthan.day3": "સાલાસર, ખાટૂ શ્યામ (પુષ્કર ખાતે રોકાણ)",
    "itinerary.rajasthan.day4": "પુષ્કર, સાવરિયા શેઠ (નાથદ્વારા ખાતે રોકાણ)",
    "itinerary.rajasthan.day5": "નાથદ્વારા દર્શન",
    "itinerary.rajasthan.day6": "શામળાજી, સાંજે જૂનાગઢ આગમન",

    "itinerary.sangam.day1": "જૂનાગઢથી પ્રસ્થાન",
    "itinerary.sangam.day2": "પ્રયાગરાજ આગમન, સંગમ સ્નાન",
    "itinerary.sangam.day3": "પ્રયાગરાજ દર્શન",
    "itinerary.sangam.day4": "બનારસ, કાશી વિશ્વનાથ",
    "itinerary.sangam.day5": "અયોધ્યા રામ મંદિર",
    "itinerary.sangam.day6": "ચિત્રકૂટ દર્શન",
    "itinerary.sangam.day7": "ઉજ્જૈન મહાકાલેશ્વર",
    "itinerary.sangam.day8": "જૂનાગઢ પરત",

    "itinerary.prayagraj.day1": "જૂનાગઢથી પ્રસ્થાન",
    "itinerary.prayagraj.day2": "હરિદ્વાર, હર કી પૌડી",
    "itinerary.prayagraj.day3": "ઋષિકેશ દર્શન",
    "itinerary.prayagraj.day4": "મથુરા, વૃંદાવન",
    "itinerary.prayagraj.day5": "અયોધ્યા રામ મંદિર",
    "itinerary.prayagraj.day6": "પ્રયાગરાજ પૂર્ણિમા સ્નાન",
    "itinerary.prayagraj.day7": "પ્રયાગરાજ મંદિર દર્શન",
    "itinerary.prayagraj.day8": "બનારસ કાશી વિશ્વનાથ",
    "itinerary.prayagraj.day9": "બનારસ ઘાટ દર્શન",
    "itinerary.prayagraj.day10": "ખાટૂ શ્યામ મંદિર",
    "itinerary.prayagraj.day11": "સાલાસર બાલાજી",
    "itinerary.prayagraj.day12": "પુષ્કર બ્રહ્મા મંદિર",
    "itinerary.prayagraj.day13": "નાથદ્વારા શ્રીનાથજી",
    "itinerary.prayagraj.day14": "જૂનાગઢ પરત",

    "itinerary.nepal.day1": "જૂનાગઢથી પ્રસ્થાન",
    "itinerary.nepal.day2": "ગોરખપુર મંદિર",
    "itinerary.nepal.day3": "નેપાળ બોર્ડર, પોખરા",
    "itinerary.nepal.day4": "મુક્તિનાથ મંદિર",
    "itinerary.nepal.day5": "પોખરા તળાવ, દર્શનીય સ્થળો",
    "itinerary.nepal.day6": "કાઠમંડુ, પશુપતિનાથ",
    "itinerary.nepal.day7": "કાઠમંડુ દર્શન",
    "itinerary.nepal.day8": "જનકપુર મંદિર",
    "itinerary.nepal.day9": "સીતામઢી, પટણા",
    "itinerary.nepal.day10": "ગયા, વિષ્ણુ મંદિર",
    "itinerary.nepal.day11": "બોધગયા દર્શન",
    "itinerary.nepal.day12": "પુરી, જગન્નાથ મંદિર",
    "itinerary.nepal.day13": "પુરી બીચ, કોણાર્ક મંદિર",
    "itinerary.nepal.day14": "ભુવનેશ્વર",
    "itinerary.nepal.day15": "ગંગાસાગર",
    "itinerary.nepal.day16": "કોલકાતા દક્ષિણેશ્વર",
    "itinerary.nepal.day17": "કોલકાતા દર્શનીય સ્થળો",
    "itinerary.nepal.day18": "ચંપારણ, અમદાવાદ",
    "itinerary.nepal.day19": "જૂનાગઢ પરત",

    "included.bus": "સ્લીપર કોચ બસ 2x1",
    "included.meals": "૨ ટાઇમ જમવાનું + સવારની ચા/કોફી",
    "included.room": "૪-૫ વ્યક્તિ રૂમ શેરિંગ",
    "included.support": "ગ્રુપ સપોર્ટ અને સુરક્ષા",

    "rule.booking.title": "બુકિંગ નિયમ",
    "rule.booking.text": "સીટ કન્ફર્મ કરવા માટે ૫૦% એડવાન્સ પેમેન્ટ જરૂરી છે. બાકીના પૈસા ૧૦ દિવસ અગાઉ આપવાના રહેશે.",
    "rule.accommodation.title": "રહેવાની સગવડ",
    "rule.accommodation.text": "૪-૫ વ્યક્તિ વચ્ચે રૂમ અથવા કોમન હોલની વ્યવસ્થા. અલગ રૂમ માટે વધારાનો ચાર્જ રહેશે.",
    "rule.luggage.title": "સામાનની જવાબદારી",
    "rule.luggage.text": "બસ પાસેથી ઉતારા સુધી સામાનની જવાબદારી પેસેન્જરની રહેશે. હળવુ બેડિંગ સાથે લાવવું.",
    "rule.food.title": "જમવાની વ્યવસ્થા",
    "rule.food.text": "૨ ટાઇમ જમવાનું અને ૧ ટાઇમ ચા-કોફી. સંપૂર્ણ શુદ્ધ શાકાહારી ગુજરાતી ભોજન.",
    "rule.tickets.title": "એન્ટ્રી ટિકિટ",
    "rule.tickets.text": "દરેક પ્રકારની એન્ટ્રી ટિકિટ અને સાઇટસીન સ્વ-ખર્ચ રહેશે. સીટ નંબર વહેલા તે પહેલા ના ધોરણે.",
    "rule.health.title": "સ્વાસ્થ્ય અને સલામતી",
    "rule.health.text": "પોતાની જરૂરિયાત મુજબ દવા સાથે લેવાની રહેશે. સમય અને સંજોગો અનુસાર યાત્રામાં ફેરફાર કરવાનો હક આયોજકનો રહેશે.",
  },
}

const LanguageContext = createContext(undefined)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const t = (key) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
