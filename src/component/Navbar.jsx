import React, { useState } from 'react';
import logoImg from '../assets/logo-text.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 font-bold text-xl mr-3"
          >
            ☰
          </button>
          <img src={logoImg} alt="Logo" className="h-8 object-contain" />
        </div>
        <div className="hidden md:block">
          <img src={logoImg} alt="Logo" className="h-9 object-contain" />
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-600">
          <a href="#home" className="hover:text-purple-600">Home</a>
          <a href="#technologies" className="hover:text-purple-600">Technologies</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-600 text-sm font-semibold">Sign In</button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-2 text-sm font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block text-gray-700">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-700">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
