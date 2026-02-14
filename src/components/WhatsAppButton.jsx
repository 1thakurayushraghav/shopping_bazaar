import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '919999999999'
  const message = 'Hello Five Star Garments! I would like to know more about your products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl text-white group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  )
}

export default WhatsAppButton