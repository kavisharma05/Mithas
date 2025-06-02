'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/hero1.jpg',
      title: 'Traditional Sweets',
      subtitle: 'Handcrafted with Love',
      cta: 'Order Now'
    },
    {
      image: '/hero2.jpg',
      title: 'Festival Special',
      subtitle: 'Celebrate with Mithas',
      cta: 'View Collection'
    },
    {
      image: '/hero3.jpg',
      title: 'Corporate Gifting',
      subtitle: 'Perfect for Every Occasion',
      cta: 'Explore More'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] bg-[#8B4513]/5">
      {/* Main Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#8B4513] mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-[#8B4513]/80 text-lg mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <button className="bg-[#8B4513] text-white px-8 py-3 rounded-lg text-sm hover:bg-[#8B4513]/90 transition-colors duration-300">
                {slides[currentSlide].cta}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-[4/3] bg-[#8B4513]/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#8B4513] w-4' : 'bg-[#8B4513]/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 