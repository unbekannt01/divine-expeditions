/**
 * WhatsApp Integration Utility
 * Handles all WhatsApp contact and booking flows
 */

// Main WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "918866229022"
const WHATSAPP_SECONDARY = "918128651355"

/**
 * Generate WhatsApp URL with message
 * @param {string} message - Message to send
 * @param {string} number - WhatsApp number (optional, defaults to main)
 * @returns {string} - Complete WhatsApp URL
 */
export const getWhatsAppURL = (message = "", number = WHATSAPP_NUMBER) => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}

/**
 * Generate booking message
 * @param {string} tourName - Name of the tour
 * @returns {string} - Pre-formatted booking message
 */
export const getBookingMessage = (tourName = "") => {
  const message = tourName
    ? `I am interested in booking the "${tourName}" tour package. Please provide more details and availability.`
    : "Hello! I am interested in booking a pilgrimage tour. Please help me with the available packages and pricing."

  return message
}

/**
 * Generate inquiry message
 * @returns {string} - Pre-formatted inquiry message
 */
export const getInquiryMessage = () => {
  return "Hello! I would like to know more about your pilgrimage tour packages. Could you please provide information about upcoming tours and pricing?"
}

/**
 * Get WhatsApp booking URL for specific tour
 * @param {string} tourName - Tour name
 * @returns {string} - Complete WhatsApp booking URL
 */
export const getBookingURL = (tourName = "") => {
  return getWhatsAppURL(getBookingMessage(tourName))
}

/**
 * Get WhatsApp inquiry URL
 * @returns {string} - Complete WhatsApp inquiry URL
 */
export const getInquiryURL = () => {
  return getWhatsAppURL(getInquiryMessage())
}

/**
 * Format phone number for display
 * @param {string} number - Phone number with country code
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (number) => {
  if (number === WHATSAPP_NUMBER) {
    return "+91 88662 29022"
  }
  if (number === WHATSAPP_SECONDARY) {
    return "+91 81286 51355"
  }
  return number
}

export { WHATSAPP_NUMBER, WHATSAPP_SECONDARY }
