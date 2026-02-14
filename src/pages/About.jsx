import { FaAward, FaHeart, FaShoppingBag, FaUsers } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      description: "We source only the finest fabrics and materials, ensuring every piece meets our exacting standards of excellence."
    },
    {
      icon: <FaUsers />,
      title: "Expert Guidance",
      description: "Our knowledgeable staff provides personalized styling advice to help you find the perfect outfit for any occasion."
    },
    {
      icon: <FaShoppingBag />,
      title: "Curated Collections",
      description: "Carefully selected styles that blend timeless elegance with contemporary fashion trends."
    },
    {
      icon: <FaHeart />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to ensure a delightful shopping experience."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            About <span className="text-gold-400">Mahasay Complex</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Your trusted destination for premium fashion in Aligarh, Uttar Pradesh
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mahasay Garments was born from a passion for fashion and a commitment to bringing premium quality clothing to the people of Aligarh. What started as a small boutique has grown into a beloved fashion destination, serving families across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the years, we've built our reputation on three pillars: exceptional quality, personalized service, and affordable luxury. Each piece in our collection is carefully selected to ensure it meets our high standards and complements the diverse tastes of our customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Mahasay Garments continues to evolve with the latest fashion trends while staying true to our core values of quality, authenticity, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop"
                  alt="Our Store"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-3xl text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide premium quality fashion that empowers individuals to express their unique style while maintaining the highest standards of craftsmanship and customer service. We strive to make luxury fashion accessible to everyone in our community.
              </p>
            </div>
            <div className="bg-black rounded-2xl p-10 shadow-lg text-white">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the most trusted and preferred fashion destination in Uttar Pradesh, known for our exceptional quality, diverse collections, and unwavering commitment to customer satisfaction. We envision a future where Five Star Garments is synonymous with style and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Mahasay Garments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference that true dedication to quality and service makes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
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

      {/* Store Interior Images */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step into a world of premium fashion at our Sahaswan location
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Store Interior 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop"
                alt="Store Interior 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Ready to Experience Premium Fashion?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit us today or browse our collections online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Collections
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About