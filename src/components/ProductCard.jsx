import { FaWhatsapp } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const phoneNumber = '919999999999'
  const message = `Hello Five Star Garments! I want to order ${product.name}`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{product.category}</p>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gold-600">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 w-full bg-black hover:bg-gold-600 text-white py-3 rounded-lg transition-all duration-300 group/btn"
        >
          <FaWhatsapp className="text-xl group-hover/btn:rotate-12 transition-transform duration-300" />
          <span className="font-medium">Order on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export default ProductCard