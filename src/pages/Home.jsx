import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar, FaTshirt, FaUsers } from 'react-icons/fa'

const Home = () => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Sophisticated styles for the modern gentleman",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=1000&fit=crop",
      link: "/products"
    },
    {
      title: "Women's Collection",
      description: "Elegant fashion for every occasion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
      link: "/products"
    },
    {
      title: "Kids Collection",
      description: "Comfortable and stylish for little ones",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=1000&fit=crop",
      link: "/products"
    }
  ]

  const features = [
    {
      icon: <FaStar />,
      title: "Premium Quality",
      description: "Handpicked fabrics and finest materials"
    },
    {
      icon: <FaTshirt />,
      title: "Latest Trends",
      description: "Stay ahead with our fashion-forward collections"
    },
    {
      icon: <FaUsers />,
      title: "Expert Service",
      description: "Personalized styling and customer care"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="Fashion Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Mahasay <span className="text-gold-400">Complex</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Premium Fashion for Every Occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Shop Now</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
                Welcome to <span className="text-gold-600">Mahasay Complex</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the heart of Aligarh, Uttar Pradesh, Mahasay Garments has been your trusted destination for premium fashion since our inception. We bring you carefully curated collections that blend timeless elegance with contemporary style.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From sophisticated men's wear to stunning women's fashion and adorable kids' collections, we cater to every member of your family with the same dedication to quality and style.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold group"
              >
                Discover Our Story
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop"
                  alt="Fashion Store Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-black rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience excellence in every aspect of your shopping journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-20 h-20 bg-[#F9DC5C] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>


                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated categories designed for every member of your family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <span className="inline-flex items-center text-gold-400 font-semibold group-hover:gap-2 transition-all duration-300">
                    Explore Collection
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Visit Our Store Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience premium fashion firsthand at our Sahaswan location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Directions
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hello%20Five%20Star%20Garments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home