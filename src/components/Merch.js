import React from 'react';

// Import your local images
import classicTeeImage from '../assets/merch/merch1.jpg';
// import logoHoodieImage from '../assets/merch/logo-hoodie.png';
// import creatorHatImage from '../assets/merch/creator-hat.png';

const products = [
  {
    name: 'Vibe City Classic Tee',
    price: '$35.00',
    description: 'Our signature soft-blend cotton tee, featuring a minimalist logo design. Perfect for a clean, everyday look. Available in black and white.',
    imageUrl: classicTeeImage,
  },
  {
    name: 'VCC Logo Hoodie',
    price: '$65.00',
    description: 'A premium, heavyweight hoodie designed for comfort and style. The iconic Vibe City Creations camera logo is subtly embroidered on the chest.',
    imageUrl: 'https://images.unsplash.com/photo-1556108993-3e3952a42556?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Creator Snapback',
    price: '$30.00',
    description: 'The perfect accessory for any creator on the go. This classic snapback is built to last and features a clean, stitched logo.',
    imageUrl: 'https://images.unsplash.com/photo-1588851563852-5201a4e107d2?q=80&w=1887&auto-format&fit=crop',
  },
];

const Merch = () => {
  return (
    <section id="merch" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4 text-gray-800">Shop The Vibe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of apparel and gear for the creative community.
          </p>
        </div>

        {/* --- Container for the product showcases --- */}
        <div className="space-y-16">
          {products.map((product, index) => {
            const isDark = index % 2 !== 0;

            return (
              // THIS IS THE MAIN CHANGE: Each row is now a styled 'card'
              <div 
                key={product.name} 
                className={`rounded-2xl transition-all duration-500 ease-in-out ${
                  isDark
                    ? 'bg-zinc-900 shadow-2xl shadow-gray-900/30 hover:shadow-indigo-500/20'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
              >
                <div 
                  className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 ${isDark ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  {/* Product Image */}
                  <div className="lg:w-1/2 w-full">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px] mx-auto"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className={`lg:w-1/2 w-full text-center lg:text-left ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <h3 className="text-4xl font-bold font-serif mb-3">
                      {product.name}
                    </h3>
                    <p className={`text-2xl font-sans mb-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {product.price}
                    </p>
                    <p className={`leading-relaxed text-lg max-w-prose ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {product.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Merch;