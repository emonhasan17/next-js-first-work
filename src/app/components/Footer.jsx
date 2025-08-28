import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo & About */}
            <div>
              <h2 className="text-xl font-bold text-white">MyProduct</h2>
              <p className="mt-2 text-sm">
                A modern product that makes your life easier. Built with love using Next.js.
              </p>
            </div>
    
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
    
            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">🐦</a>
                <a href="#" className="hover:text-white">📘</a>
                <a href="#" className="hover:text-white">📸</a>
              </div>
            </div>
          </div>
    
          {/* Bottom */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
            © {new Date().getFullYear()} MyProduct. All rights reserved.
          </div>
        </footer>
      )
};

export default Footer;