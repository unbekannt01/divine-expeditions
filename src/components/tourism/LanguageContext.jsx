"use client";

import { createContext, useContext, useState } from "react";

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

    "tour.21-01.name": "Magh-Kumbh Special",
    "tour.21-01.date": "21-01-2026",
    "tour.21-01.days": "9/10 Days",
    "tour.21-01.daysNum": "10",
    "tour.21-01.price": "₹12,500/",
    "tour.21-01.places":
      "Ayodhya, Kashi-Banaras, Khatu-Shyam, Salasar Balaji, Savariya",

    "tour.01-02.name": "Magh-kumbh Haridwar Specila",
    "tour.01-02.date": "01-02-2026",
    "tour.01-02.days": "13/14 Days",
    "tour.01-02.daysNum": "14",
    "tour.01-02.price": "₹15,500",
    "tour.01-02.places":
      "Ayodhya, Haridwar, Gokul-Mathura, Khatu-Shyam, Nathdwara",

    "tour.15-02.name": "Nepal-Jagnnathpuri-Champaran Special",
    "tour.15-02.date": "15-02-2026",
    "tour.15-02.days": "19/20 Days",
    "tour.15-02.daysNum": "20",
    "tour.15-02.price": "₹24,500",
    "tour.15-02.places": "Nepal, Champran, Jagnnathpuri, Ayodhya",

    "tour.22-02.name": "Jagnnathpuri-Champaran Special",
    "tour.22-02.date": "22-02-2026",
    "tour.22-02.days": "12/13 Days",
    "tour.22-02.daysNum": "13",
    "tour.22-02.price": "₹14,500",
    "tour.22-02.places": "Jagannathpuri, Champaran, Ayodhya",

    "itinerary.21-01.day0": "Departure from Junagadh (Night Travel)",
    "itinerary.21-01.day1": "Ujjain Darshan (Night Travel)",
    "itinerary.21-01.day2": "Chitrakut Darshan (Stay)",
    "itinerary.21-01.day3": "Prayagraj (Stay)",
    "itinerary.21-01.day4": "Banaras (Night Travel)",
    "itinerary.21-01.day5": "Ayodhya & Chhapaiya (Night Travel)",
    "itinerary.21-01.day6": "Khatu-Shyam (Stay)",
    "itinerary.21-01.day7": "Salasar Balaji & Pushkar (Night Travel)",
    "itinerary.21-01.day8": "Nathdwara (Stay)",
    "itinerary.21-01.day9": "Savariya & Shamlaji and Return To Junagadh",

    "itinerary.01-02.day0": "Departure from Junagadh At Evening (Night Travel)",
    "itinerary.01-02.day1": "Ujjain (Night Travel)",
    "itinerary.01-02.day2": "Chitrakut (Night Stay)",
    "itinerary.01-02.day3": "Prayagaraj (Night Stay)",
    "itinerary.01-02.day4": "Banaras (Night Travel)",
    "itinerary.01-02.day5": "Ayodhya - Ram Mandir (Night Travel)",
    "itinerary.01-02.day6": "Haridwar (Night Stay)",
    "itinerary.01-02.day7": "Masuri - Hill Station (At Own Expense) & (Night Stay)",
    "itinerary.01-02.day8": "Rishikesh (At Own Expense) & (Night Travel)",
    "itinerary.01-02.day9": "Mathura & Vrindavan (Night Stay)",
    "itinerary.01-02.day10": "Govardhan-Jatipura-Barsana-Gokul (Night Travel)",
    "itinerary.01-02.day11": "Khatu-Shyam & Pushkar (Night Travel)",
    "itinerary.01-02.day12": "Nathdwara(Night Stay)",
    "itinerary.01-02.day13": "Savariya Sheth-Shamlaji & Return to Junagadh",

    "itinerary.15-02.day1": "Departure from Junagadh At Noon (Night Travel)",
    "itinerary.15-02.day2": "Ujjain (Night Travel)",
    "itinerary.15-02.day3": "Banaras (Night Stay)",
    "itinerary.15-02.day4": "Ayodhya (Night Stay)",
    "itinerary.15-02.day5": "Gorakhpur (Night Travel)",
    "itinerary.15-02.day6": "Pokhara (Nepal) - (Night Stay)",
    "itinerary.15-02.day7": "Muktinath (Nepal) - (Night Stay)",
    "itinerary.15-02.day8": "Mankamna Temple (Nepal) - (Night Stay)",
    "itinerary.15-02.day9": "Pashupatinath Temple (Nepal) - (Night Travel)",
    "itinerary.15-02.day10": "Janakpur (Nepal) & Gaya(Night Stay)",
    "itinerary.15-02.day11": "Gaya (Night Travel)",
    "itinerary.15-02.day12": "Gangasagar (Night Stay)",
    "itinerary.15-02.day13": "Kolkata City Darshan (Night Travel)",
    "itinerary.15-02.day14": "Jagannathpuri (Night Stay)",
    "itinerary.15-02.day15": "Kornak (Surya-Mandir) & Sakhi-Gopal Temple (Night Travel)",
    "itinerary.15-02.day16": "Champaran Darshan - Holi Celebration (Night Stay)", 
    "itinerary.15-02.day17": "Champaran Darshan (Night Stay)",
    "itinerary.15-02.day18": "Amarkantak (Night Travel)", 
    "itinerary.15-02.day19": "Omkareshwar (Night Travel)",
    "itinerary.15-02.day20": "Poicha & Return to Junagadh ",

    "itinerary.22-02.day0": "Departure from Junagadh At Evening (Night Travel)",
    "itinerary.22-02.day1": "Dakor & Ujjain (Night Stay)",
    "itinerary.22-02.day2": "Ujjain Darshan (Night Travel)",
    "itinerary.22-02.day3": "Chitrakut (Night Stay)",
    "itinerary.22-02.day4": "Prayagraj - Triveni Snan - Banaras (Night Travel)",
    "itinerary.22-02.day5": "Ayodhya (Night Travel)",
    "itinerary.22-02.day6": "Gaya (Night Travel)",
    "itinerary.22-02.day7": "Jagannathpuri (Night Stay)",
    "itinerary.22-02.day8": "Kornak (Surya-Mandir) & Sakhi-Gopal Temple (Night Travel)",
    "itinerary.22-02.day9": "Champaran - Holi Celebration (Night Stay)",
    "itinerary.22-02.day10": "Champaran (Night Stay)",
    "itinerary.22-02.day11": "Amarkantak (Night Travel)",
    "itinerary.22-02.day12": "Omkareshwar (Night Travel)",
    "itinerary.22-02.day13": "Poicha & Return to Junagadh",

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
    destinations: "સ્થળો",
    startingFrom: "શરૂઆત",
    whatsIncluded: "શું શામેલ છે",
    close: "બંધ કરો",

   "tour.21-01.name": "માઘ-કુંભ સ્પેશિયલ",
    "tour.21-01.date": "21-01-2026",
    "tour.21-01.days": "9/10 દિવસ",
    "tour.21-01.daysNum": "10",
    "tour.21-01.price": "₹12,500/",
    "tour.21-01.places":
      "અયોધ્યા, કાશી-બનારસ, ખાટુ-શ્યામ, સાલાસર બાલાજી, સાવરિયા",

    "tour.01-02.name": "માઘ-કુંભ હરિદ્વાર સ્પેશિયલ",
    "tour.01-02.date": "01-02-2026",
    "tour.01-02.days": "13/14 દિવસ",
    "tour.01-02.daysNum": "14",
    "tour.01-02.price": "₹15,500",
    "tour.01-02.places":
      "અયોધ્યા, હરિદ્વાર, ગોકુળ-મથુરા, ખાટુ-શ્યામ, નાથદ્વારા",

    "tour.15-02.name": "નેપાળ-જગન્નાથપુરી-ચંપારણ સ્પેશિયલ",
    "tour.15-02.date": "15-02-2026",
    "tour.15-02.days": "19/20 દિવસ",
    "tour.15-02.daysNum": "20",
    "tour.15-02.price": "₹24,500",
    "tour.15-02.places": "નેપાળ, ચંપારણ, જગન્નાથપુરી, અયોધ્યા",

    "tour.22-02.name": "જગન્નાથપુરી-ચંપારણ સ્પેશિયલ",
    "tour.22-02.date": "22-02-2026",
    "tour.22-02.days": "12/13 દિવસ",
    "tour.22-02.daysNum": "13",
    "tour.22-02.price": "₹14,500",
    "tour.22-02.places": "જગન્નાથપુરી, ચંપારણ, અયોધ્યા",

    "itinerary.21-01.day0": "જુનાગઢથી પ્રસ્થાન (રાત્રિ મુસાફરી)",
    "itinerary.21-01.day1": "ઉજ્જૈન દર્શન (રાત્રિ મુસાફરી)",
    "itinerary.21-01.day2": "ચિત્રકૂટ દર્શન (રાત્રિ રોકાણ)",
    "itinerary.21-01.day3": "પ્રયાગરાજ (રાત્રિ રોકાણ)",
    "itinerary.21-01.day4": "બનારસ (રાત્રિ મુસાફરી)",
    "itinerary.21-01.day5": "અયોધ્યા અને છપૈયા (રાત્રિ મુસાફરી)",
    "itinerary.21-01.day6": "ખાટુ-શ્યામ (રાત્રિ રોકાણ)",
    "itinerary.21-01.day7": "સાલાસર બાલાજી અને પુષ્કર (રાત્રિ મુસાફરી)",
    "itinerary.21-01.day8": "નાથદ્વારા (રાત્રિ રોકાણ)",
    "itinerary.21-01.day9": "સાવરિયા અને શામળાજી અને જુનાગઢ પરત",

    "itinerary.01-02.day0": "જુનાગઢથી સાંજે પ્રસ્થાન (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day1": "ઉજ્જૈન (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day2": "ચિત્રકૂટ (રાત્રિ રોકાણ)",
    "itinerary.01-02.day3": "પ્રયાગરાજ (રાત્રિ રોકાણ)",
    "itinerary.01-02.day4": "બનારસ (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day5": "અયોધ્યા - રામ મંદિર (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day6": "હરિદ્વાર (રાત્રિ રોકાણ)",
    "itinerary.01-02.day7": "મસૂરી - હિલ સ્ટેશન (પોતાના ખર્ચે) અને (રાત્રિ રોકાણ)",
    "itinerary.01-02.day8": "ઋષિકેશ (પોતાના ખર્ચે) અને (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day9": "મથુરા અને વૃંદાવન (રાત્રિ રોકાણ)",
    "itinerary.01-02.day10": "ગોવર્ધન-જતીપુરા-બરસાણા-ગોકુળ (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day11": "ખાટુ-શ્યામ અને પુષ્કર (રાત્રિ મુસાફરી)",
    "itinerary.01-02.day12": "નાથદ્વારા (રાત્રિ રોકાણ)",
    "itinerary.01-02.day13": "સાવરિયા શેઠ-શામળાજી અને જુનાગઢ પરત",

    "itinerary.15-02.day1": "જુનાગઢથી બપોરે પ્રસ્થાન (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day2": "ઉજ્જૈન (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day3": "બનારસ (રાત્રિ રોકાણ)",
    "itinerary.15-02.day4": "અયોધ્યા (રાત્રિ રોકાણ)",
    "itinerary.15-02.day5": "ગોરખપુર (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day6": "પોખરા (નેપાળ) - (રાત્રિ રોકાણ)",
    "itinerary.15-02.day7": "મુક્તિનાથ (નેપાળ) - (રાત્રિ રોકાણ)",
    "itinerary.15-02.day8": "મનકામના મંદિર (નેપાળ) - (રાત્રિ રોકાણ)",
    "itinerary.15-02.day9": "પશુપતિનાથ મંદિર (નેપાળ) - (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day10": "જનકપુર (નેપાળ) અને ગયા (રાત્રિ રોકાણ)",
    "itinerary.15-02.day11": "ગયા (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day12": "ગંગાસાગર (રાત્રિ રોકાણ)",
    "itinerary.15-02.day13": "કોલકાતા શહેર દર્શન (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day14": "જગન્નાથપુરી (રાત્રિ રોકાણ)",
    "itinerary.15-02.day15": "કોર્ણક (સૂર્ય-મંદિર) અને સાખી-ગોપાલ મંદિર (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day16": "ચંપારણ દર્શન - હોળી ઉજવણી (રાત્રિ રોકાણ)", 
    "itinerary.15-02.day17": "ચંપારણ દર્શન (રાત્રિ રોકાણ)",
    "itinerary.15-02.day18": "અમરકંટક (રાત્રિ મુસાફરી)", 
    "itinerary.15-02.day19": "ઓમકારેશ્વર (રાત્રિ મુસાફરી)",
    "itinerary.15-02.day20": "પોઈચા અને જુનાગઢ પરત",

    "itinerary.22-02.day0": "જુનાગઢથી સાંજે પ્રસ્થાન (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day1": "ડાકોર અને ઉજ્જૈન (રાત્રિ રોકાણ)",
    "itinerary.22-02.day2": "ઉજ્જૈન દર્શન (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day3": "ચિત્રકૂટ (રાત્રિ રોકાણ)",
    "itinerary.22-02.day4": "પ્રયાગરાજ - ત્રિવેણી સ્નાન - બનારસ (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day5": "અયોધ્યા (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day6": "ગયા (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day7": "જગન્નાથપુરી (રાત્રિ રોકાણ)",
    "itinerary.22-02.day8": "કોર્ણક (સૂર્ય-મંદિર) અને સાખી-ગોપાલ મંદિર (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day9": "ચંપારણ - હોળી ઉજવણી (રાત્રિ રોકાણ)",
    "itinerary.22-02.day10": "ચંપારણ (રાત્રિ રોકાણ)",
    "itinerary.22-02.day11": "અમરકંટક (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day12": "ઓમકારેશ્વર (રાત્રિ મુસાફરી)",
    "itinerary.22-02.day13": "પોઈચા અને જુનાગઢ પરત",

    "included.bus": "સ્લીપર કોચ બસ 2x1",
    "included.meals": "૨ ટાઇમ જમવાનું + સવારની ચા/કોફી",
    "included.room": "૪-૫ વ્યક્તિ રૂમ શેરિંગ",
    "included.support": "ગ્રુપ સપોર્ટ અને સુરક્ષા",

    "rule.booking.title": "બુકિંગ નિયમ",
    "rule.booking.text":
      "સીટ કન્ફર્મ કરવા માટે ૫૦% એડવાન્સ પેમેન્ટ જરૂરી છે. બાકીના પૈસા ૧૦ દિવસ અગાઉ આપવાના રહેશે.",
    "rule.accommodation.title": "રહેવાની સગવડ",
    "rule.accommodation.text":
      "૪-૫ વ્યક્તિ વચ્ચે રૂમ અથવા કોમન હોલની વ્યવસ્થા. અલગ રૂમ માટે વધારાનો ચાર્જ રહેશે.",
    "rule.luggage.title": "સામાનની જવાબદારી",
    "rule.luggage.text":
      "બસ પાસેથી ઉતારા સુધી સામાનની જવાબદારી પેસેન્જરની રહેશે. હળવુ બેડિંગ સાથે લાવવું.",
    "rule.food.title": "જમવાની વ્યવસ્થા",
    "rule.food.text":
      "૨ ટાઇમ જમવાનું અને ૧ ટાઇમ ચા-કોફી. સંપૂર્ણ શુદ્ધ શાકાહારી ગુજરાતી ભોજન.",
    "rule.tickets.title": "એન્ટ્રી ટિકિટ",
    "rule.tickets.text":
      "દરેક પ્રકારની એન્ટ્રી ટિકિટ અને સાઇટસીન સ્વ-ખર્ચ રહેશે. સીટ નંબર વહેલા તે પહેલા ના ધોરણે.",
    "rule.health.title": "સ્વાસ્થ્ય અને સલામતી",
    "rule.health.text":
      "પોતાની જરૂરિયાત મુજબ દવા સાથે લેવાની રહેશે. સમય અને સંજોગો અનુસાર યાત્રામાં ફેરફાર કરવાનો હક આયોજકનો રહેશે.",
  },
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
