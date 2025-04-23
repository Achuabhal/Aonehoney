import React from 'react';

// Product Data
const products = [
  {
    id: 1,
    name: "Wildflower Honey",
    price: 180,
    description: "Our signature wildflower honey is harvested from diverse meadow flowers, creating a rich, complex flavor profile with subtle floral notes.",
    image: "https://images.pexels.com/photos/7474209/pexels-photo-7474209.jpeg",
    color: "amber-400",
    benefits: [
      "Rich in antioxidants",
      "Supports local ecosystems",
      "Perfect for baking and tea"
    ],
    bookingLink: "https://wa.me/9961174693?text=₹130  രൂപേടെ  തേൻ ഒണ്ടോ  " // Added booking link
  },
  {
    id: 2,
    name: "Manuka Honey",
    price: 300,
    description: "Premium Manuka honey known for its exceptional purity and potent health properties. A smooth, creamy texture with distinctive earthy flavors.",
    image: "https://images.pexels.com/photos/11131413/pexels-photo-11131413.jpeg",
    color: "amber-600",
    benefits: [
      "High antibacterial properties",
      "Supports digestive health",
      "Excellent for wellness routines"
    ],
    bookingLink: "https://wa.me/9961174693?text=₹300 രൂപേടെ  തേൻ ഒണ്ടോ  " // Added booking link
  },
  // Add more products as needed, including a bookingLink
];

// Update the product type to include bookingLink
type Product = typeof products[0];

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  // Placeholder function for booking action
  

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:scale-102 cursor-pointer`}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-${product.color} opacity-20`}></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-serif font-semibold text-amber-900">{product.name}</h3>
          <span className="text-xl font-bold text-amber-700">₹{product.price}</span>
        </div>
        <p className="text-amber-800 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
        
          {/* Wrap the button with an anchor tag */}
          <a href={product.bookingLink} onClick={(e) => e.stopPropagation()} className="inline-block"> {/* Added stopPropagation to prevent card click if any */}
            <button
             
              className={`px-5 py-2 bg-amber-600 text-white rounded-full text-sm font-medium shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95`}
            >
              Order Honey via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};


const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Premium Honey Collection</h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Each variety is carefully harvested and processed to preserve the unique flavors and health benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:justify-center">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard
                product={product}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
