import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=800&fit=crop",
      alt: "Men's Fashion",
      category: "Men's Collection"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
      alt: "Women's Fashion",
      category: "Women's Collection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=600&fit=crop",
      alt: "Kids Fashion",
      category: "Kids Collection"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=800&fit=crop",
      alt: "Store Interior",
      category: "Store"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=700&fit=crop",
      alt: "Ethnic Wear",
      category: "Women's Collection"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      alt: "Formal Suits",
      category: "Men's Collection"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      alt: "Fashion Store",
      category: "Store"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop",
      alt: "Designer Collection",
      category: "Women's Collection"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop",
      alt: "Kids Party Wear",
      category: "Kids Collection"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
      alt: "Casual Wear",
      category: "Men's Collection"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1583391733981-5ab02a0ef0c5?w=600&h=700&fit=crop",
      alt: "Traditional Outfits",
      category: "Women's Collection"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
      alt: "Kids Fashion",
      category: "Kids Collection"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Our <span className="text-gold-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Explore our stunning collection and store ambiance
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-gold-400 mb-1">{image.category}</p>
                    <p className="text-lg font-display">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold-400 text-4xl transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <p className="text-gold-400 font-semibold mb-2">{selectedImage.category}</p>
              <p className="text-white text-xl font-display">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Love What You See?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our store to experience these collections in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery