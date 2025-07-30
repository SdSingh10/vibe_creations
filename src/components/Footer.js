import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
// Import the new gold logo
import logoGold from '../assets/logos/logo-golden.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            {/* UPDATED: Use the gold logo in the footer */}
            <img src={logoGold} alt="Vibe City Creations Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 italic">Bringing your vision into focus.</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Brampton, Canada</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:contact@vibecitycreations.com" className="hover:text-indigo-400 transition-colors">contact@vibecitycreations.com</a>
              </li>
              <li className="flex items-start">
                <FaGlobe className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a href="https://www.vibecitycreations.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">www.vibecitycreations.com</a>
              </li>
               <li className="flex items-start">
                <FaPhoneAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:0086598644568" className="hover:text-indigo-400 transition-colors">008 659 864 4568</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Follow Us</h4>
            <a href="https://www.instagram.com/vibecitycreations" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
              <FaInstagram className="text-2xl text-gray-400 group-hover:text-indigo-400 transition-colors" />
              <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">@vibecitycreations</span>
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vibe City Creations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;