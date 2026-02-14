import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    // For now, we'll just show a success message
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: "Sahaswan, Budaun District",
      subContent: "Uttar Pradesh, India - 202412"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 99999 99999",
      link: "tel:+919999999999"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "info@fivestargarments.com",
      link: "mailto:info@fivestargarments.com"
    },
    {
      icon: <FaClock />,
      title: "Store Hours",
      content: "Mon - Sat: 10:00 AM - 9:00 PM",
      subContent: "Sunday: 11:00 AM - 8:00 PM"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Get in <span className="text-gold-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Visit us, call us, or send us a message - we're here to help
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
                {info.subContent && (
                  <p className="text-gray-500 text-sm mt-2">{info.subContent}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gold-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center animate-fadeIn">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9282366812234!2d78.7513924!3d28.7403825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afab1c77e9f19%3A0x1ffa8e6e85729c16!2sSahaswan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Five Star Garments Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-24 bg-[#25D366] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-5xl text-[#25D366]" />
            </div>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Prefer WhatsApp?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with us instantly on WhatsApp for quick responses and personalized assistance
          </p>
          <a
            href="https://wa.me/919999999999?text=Hello%20Five%20Star%20Garments"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#25D366] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="mr-2 text-2xl" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact