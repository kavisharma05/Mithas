'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports to prevent hydration errors
const Navbar = dynamic(() => import('./components/Navbar'));
const Hero = dynamic(() => import('./components/Hero'));
const About = dynamic(() => import('./components/About'));
const Gallery = dynamic(() => import('./components/Gallery'));
const Contact = dynamic(() => import('./components/Contact'));

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'sweets', name: 'SWEETS', image: '/images/sweets.jpg' },
    { id: 'namkeen', name: 'Namkeen', image: '/images/namkeen.jpg' },
    { id: 'cookies', name: 'Cookies', image: '/images/cookies.jpg' },
    { id: 'cakes', name: 'Cakes', image: '/images/cakes.jpg' },
    { id: 'drysnacks', name: 'Dry Snacks', image: '/images/drysnacks.jpg' }
  ];

  const popularProducts = [
    {
      id: 1,
      name: 'Mix Bites',
      price: 340.00,
      image: '/products/mix-bites.jpg',
      category: 'sweets'
    },
    {
      id: 2,
      name: 'Mango Barfi',
      price: 320.00,
      image: '/products/mango-barfi.jpg',
      category: 'sweets'
    },
    {
      id: 3,
      name: 'Gujiya',
      price: 150.00,
      image: '/products/gujiya.jpg',
      category: 'sweets'
    },
    {
      id: 4,
      name: 'BHAVNAGARI GATHIYA',
      price: 62.72,
      image: '/products/gathiya.jpg',
      category: 'namkeen'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDF7F2]">
      <Navbar scrollY={scrollY} />
      <Hero />

      {/* Legacy Banner */}
      <section className="bg-[#8B4513]/10 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center bg-white/50 rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <h3 className="text-[#8B4513] text-xl font-semibold mb-2">30 YEARS OF LEGACY</h3>
              <p className="text-[#8B4513]/80 text-sm">Serving happiness since 1993</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white/50 rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <h3 className="text-[#8B4513] text-xl font-semibold mb-2">CORPORATE GIFTING</h3>
              <p className="text-[#8B4513]/80 text-sm">Special bulk order discounts</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white/50 rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <h3 className="text-[#8B4513] text-xl font-semibold mb-2">FREE SHIPPING</h3>
              <p className="text-[#8B4513]/80 text-sm">On orders above ₹999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="bg-[#FDF7F2] rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                    <div className="w-full h-full bg-[#8B4513]/10" />
                  </div>
                  <h3 className="text-center text-[#8B4513] text-sm font-medium">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-[#8B4513]/5"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#8B4513] font-medium mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8B4513] font-semibold">₹{product.price.toFixed(2)}</span>
                    <button className="bg-[#8B4513] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8B4513]/90 transition-colors duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Gallery />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Sweets</li>
                <li>Namkeen</li>
                <li>Cookies</li>
                <li>Dry Snacks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>+91 98765 43210</li>
                <li>info@mithas.com</li>
                <li>123 Sweet Street, Delhi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <span>FB</span>
                <span>IG</span>
                <span>TW</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            <p>© 2024 Mithas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Page;
