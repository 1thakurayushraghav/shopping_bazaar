import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    // Men's Collection
    {
      id: 1,
      name: "Premium Linen Shirt",
      category: "Men's Collection",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
      badge: "New"
    },
    {
      id: 2,
      name: "Classic Formal Suit",
      category: "Men's Collection",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "Cotton Casual Shirt",
      category: "Men's Collection",
      price: 1799,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop"
    },
    {
      id: 4,
      name: "Designer Kurta Set",
      category: "Men's Collection",
      price: 3499,
      image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop"
    },
    {
      id: 5,
      name: "Premium Denim Jeans",
      category: "Men's Collection",
      price: 2999,
      originalPrice: 4299,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop"
    },
    {
      id: 6,
      name: "Formal Trousers",
      category: "Men's Collection",
      price: 2199,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop"
    },
    // Women's Collection
    {
      id: 7,
      name: "Elegant Silk Saree",
      category: "Women's Collection",
      price: 5999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop",
      badge: "New"
    },
    {
      id: 8,
      name: "Designer Kurti",
      category: "Women's Collection",
      price: 1899,
      image: "https://images.unsplash.com/photo-1583391733981-5ab02a0ef0c5?w=600&h=800&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 9,
      name: "Party Wear Gown",
      category: "Women's Collection",
      price: 6999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    },
    {
      id: 10,
      name: "Cotton Salwar Suit",
      category: "Women's Collection",
      price: 2799,
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop"
    },
    {
      id: 11,
      name: "Palazzo Set",
      category: "Women's Collection",
      price: 2299,
      image: "https://images.unsplash.com/photo-1614252602965-5c7e9eb1d88d?w=600&h=800&fit=crop"
    },
    {
      id: 12,
      name: "Lehenga Choli",
      category: "Women's Collection",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=800&fit=crop",
      badge: "Premium"
    },
    // Kids Collection
    {
      id: 13,
      name: "Boys Party Wear",
      category: "Kids Collection",
      price: 1499,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop"
    },
    {
      id: 14,
      name: "Girls Frock",
      category: "Kids Collection",
      price: 1299,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
      badge: "New"
    },
    {
      id: 15,
      name: "Kids Ethnic Wear",
      category: "Kids Collection",
      price: 1799,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop"
    },
    {
      id: 16,
      name: "Casual T-Shirt Set",
      category: "Kids Collection",
      price: 899,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop"
    },
    {
      id: 17,
      name: "Kids Denim Jacket",
      category: "Kids Collection",
      price: 1599,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop"
    },
    {
      id: 18,
      name: "Party Dress",
      category: "Kids Collection",
      price: 2199,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1561599721-f288a4f3a4e1?w=600&h=800&fit=crop",
      badge: "Best Seller"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mens', name: "Men's Collection" },
    { id: 'womens', name: "Women's Collection" },
    { id: 'kids', name: 'Kids Collection' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        if (selectedCategory === 'mens') return product.category === "Men's Collection"
        if (selectedCategory === 'womens') return product.category === "Women's Collection"
        if (selectedCategory === 'kids') return product.category === "Kids Collection"
        return true
      })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Our <span className="text-gold-400">Collections</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Discover premium fashion for every member of your family
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 sticky top-20 z-30 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Need Help Finding the Perfect Outfit?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our fashion experts are here to assist you. Contact us for personalized styling advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919999999999?text=Hello%20Five%20Star%20Garments%20I%20need%20help%20choosing%20an%20outfit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300"
            >
              Visit Store
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products