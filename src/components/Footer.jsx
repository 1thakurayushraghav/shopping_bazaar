import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              <span className="text-white">Five Star</span>
              <span className="text-gold-500"> Garments</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted destination for premium fashion in Sahaswan. We bring you the finest collection of men's, women's, and kids' clothing.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-500 transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-500 transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-500 transition-colors duration-300">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-gold-400">Collections</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-gold-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Sahaswan, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-gold-500 mt-1 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-gold-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@fivestargarments.com" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                  info@fivestargarments.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Five Star Garments. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer