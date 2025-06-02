'use client';
import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const locations = [
    {
      city: "Delhi",
      address: "123 Chandni Chowk, Old Delhi",
      phone: "+91 98765 43210",
      hours: "9:00 AM - 9:00 PM"
    },
    {
      city: "Mumbai",
      address: "45 Linking Road, Bandra West",
      phone: "+91 98765 43211",
      hours: "9:00 AM - 9:00 PM"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#8B4513]/70 mb-8">
              We'd love to hear from you. Please fill out the form below or reach out to us 
              using the contact information provided.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B4513]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B4513]">📍</span>
                </div>
                <div>
                  <h3 className="text-[#8B4513] font-medium mb-1">Visit Us</h3>
                  <p className="text-[#8B4513]/70">
                    123 Sweet Street, Delhi<br />
                    India - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B4513]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B4513]">📞</span>
                </div>
                <div>
                  <h3 className="text-[#8B4513] font-medium mb-1">Call Us</h3>
                  <p className="text-[#8B4513]/70">
                    +91 98765 43210<br />
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B4513]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B4513]">✉️</span>
                </div>
                <div>
                  <h3 className="text-[#8B4513] font-medium mb-1">Email Us</h3>
                  <p className="text-[#8B4513]/70">
                    info@mithas.com<br />
                    support@mithas.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[#8B4513] font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#8B4513]/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-colors duration-300">
                  FB
                </a>
                <a href="#" className="w-10 h-10 bg-[#8B4513]/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-colors duration-300">
                  IG
                </a>
                <a href="#" className="w-10 h-10 bg-[#8B4513]/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-colors duration-300">
                  TW
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FDF7F2] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[#8B4513] text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] text-[#8B4513]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[#8B4513] text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] text-[#8B4513]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[#8B4513] text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] text-[#8B4513]"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-[#8B4513] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] text-[#8B4513] h-32 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B4513] text-white py-3 rounded-lg hover:bg-[#8B4513]/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 