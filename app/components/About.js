'use client';
import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-[#8B4513]/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B4513]/5 rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
              A Legacy of Sweet Excellence
            </h2>
            <div className="space-y-4 text-[#8B4513]/80">
              <p>
                Since 1993, Mithas has been crafting authentic Indian sweets and savories 
                with traditional recipes passed down through generations. Our commitment 
                to quality and taste has made us a trusted name in Indian confectionery.
              </p>
              <p>
                Every sweet we create is a perfect blend of premium ingredients, expert 
                craftsmanship, and the warmth of Indian hospitality. From classic favorites 
                to innovative creations, we take pride in preserving the authentic taste 
                of Indian sweets.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B4513]">30+</div>
                <div className="text-sm text-[#8B4513]/70">Years of Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B4513]">100+</div>
                <div className="text-sm text-[#8B4513]/70">Sweet Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B4513]">50k+</div>
                <div className="text-sm text-[#8B4513]/70">Happy Customers</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4 mt-8">
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                <span className="text-[#8B4513]">ISO</span>
              </div>
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                <span className="text-[#8B4513]">FSSAI</span>
              </div>
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                <span className="text-[#8B4513]">HACCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 