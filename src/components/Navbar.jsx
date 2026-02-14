import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F9DC5C] shadow-lg py-4' : 'bg-black/90 backdrop-blur-sm py-6'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl sm:text-3xl font-display font-bold">
              <span className="text-white group-hover:text-gold-400 transition-colors duration-300">Five Star</span>

            </div>
            <img
              src="/logo.png"
              alt="Five Star Garments Logo"
              className="h-10 w-auto sm:h-12"
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 
  ${location.pathname === link.path
    ? (isScrolled ? 'text-black' : 'text-blue-500')
    : (isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-blue-500')
  } group`}

              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 text-2xl 
    ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white hover:text-gold-400'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}>
          <div className="flex flex-col space-y-4 py-4 border-t border-gold-900/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 ${location.pathname === link.path
                    ? 'text-gold-400'
                    : 'text-white hover:text-gold-400'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar