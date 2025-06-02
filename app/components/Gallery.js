'use client';
import React from 'react';

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: 'Mix Bites',
      category: 'Sweets',
      price: 340.00,
      rating: 4.8,
      reviews: 128
    },
    {
      id: 2,
      name: 'Mango Barfi',
      category: 'Sweets',
      price: 320.00,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: 'Gujiya',
      category: 'Sweets',
      price: 150.00,
      rating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      name: 'BHAVNAGARI GATHIYA',
      category: 'Namkeen',
      price: 62.72,
      rating: 4.6,
      reviews: 85
    },
    {
      id: 5,
      name: 'SANGAM MIXTURE',
      category: 'Namkeen',
      price: 56.00,
      rating: 4.5,
      reviews: 72
    },
    {
      id: 6,
      name: 'Madhumilan',
      category: 'Sweets',
      price: 320.00,
      rating: 4.9,
      reviews: 145
    },
    {
      id: 7,
      name: 'Orange Bites',
      category: 'Sweets',
      price: 340.00,
      rating: 4.7,
      reviews: 92
    },
    {
      id: 8,
      name: 'Rose Bites',
      category: 'Sweets',
      price: 340.00,
      rating: 4.8,
      reviews: 108
    }
  ];

  return (
    <section className="py-16 bg-[#FDF7F2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
            Our Popular Products
          </h2>
          <p className="text-[#8B4513]/70 max-w-2xl mx-auto">
            Discover our most loved sweets and snacks, handcrafted with premium ingredients 
            and traditional recipes that have delighted customers for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-[#8B4513]/5"></div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-[#8B4513] font-medium">{product.name}</h3>
                    <p className="text-[#8B4513]/60 text-sm">{product.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#8B4513] text-sm">★</span>
                    <span className="text-[#8B4513]/80 text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#8B4513] font-semibold">₹{product.price.toFixed(2)}</span>
                  <button className="bg-[#8B4513] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8B4513]/90 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
                <div className="mt-2 text-[#8B4513]/60 text-xs">
                  {product.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-[#8B4513] border-2 border-[#8B4513] px-8 py-3 rounded-lg text-sm hover:bg-[#8B4513] hover:text-white transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 