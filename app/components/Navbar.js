'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#8B4513] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Track Order</span>
            <span>|</span>
            <span>Help Line 761</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#FFE4B5] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#8B4513]">MITHAS</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full py-2 px-4 rounded-lg bg-white text-sm text-[#8B4513] placeholder-[#8B4513]/60 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B4513] text-white px-4 py-1 rounded-lg text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm text-[#8B4513] hover:text-[#8B4513]/80">
                Home
              </Link>
              <Link href="/categories" className="text-sm text-[#8B4513] hover:text-[#8B4513]/80">
                All categories
              </Link>
              <Link href="/brands" className="text-sm text-[#8B4513] hover:text-[#8B4513]/80">
                All brands
              </Link>
              <Link href="/blogs" className="text-sm text-[#8B4513] hover:text-[#8B4513]/80">
                All Blogs
              </Link>
              <Link href="/offers" className="text-sm text-[#8B4513] hover:text-[#8B4513]/80">
                Offers
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#8B4513] hover:text-[#8B4513]/80"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-sm text-[#8B4513]">
                Home
              </Link>
              <Link href="/categories" className="block px-3 py-2 text-sm text-[#8B4513]">
                All categories
              </Link>
              <Link href="/brands" className="block px-3 py-2 text-sm text-[#8B4513]">
                All brands
              </Link>
              <Link href="/blogs" className="block px-3 py-2 text-sm text-[#8B4513]">
                All Blogs
              </Link>
              <Link href="/offers" className="block px-3 py-2 text-sm text-[#8B4513]">
                Offers
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 