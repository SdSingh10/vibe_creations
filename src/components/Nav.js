import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logoWhite from '../assets/logos/logo-white.png';
import logoDark from '../assets/logos/logo-dark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "Home", to: "home" },
    { title: "Portfolio", to: "portfolio" },
    { title: "Merch", to: "merch" },
    { title: "About", to: "about" },
    { title: "Reviews", to: "review" },
    { title: "Contact", to: "contact" },
  ];

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- STYLING LOGIC UPDATED FOR BETTER VISIBILITY ---
  const navClass = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg' // Scrolled state
    : 'bg-gradient-to-b from-black/50 to-transparent'; // Top of page state (with gradient)
  
  const linkColor = scrolled ? 'text-gray-800' : 'text-white';
  const logoToDisplay = scrolled ? logoDark : logoWhite;
  // Mobile menu background is now always dark for better contrast
  const mobileMenuBg = 'bg-black/90 backdrop-blur-md';

  return (
    <nav className={`fixed w-full z-20 top-0 transition-all duration-300 ease-in-out ${navClass}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        <ScrollLink to="home" smooth={true} duration={500} offset={-100} className="cursor-pointer">
          <img 
            src={logoToDisplay} 
            alt="Vibe City Creations Logo" 
            className="h-12 w-auto"
          />
        </ScrollLink>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer ${linkColor} hover:text-indigo-500 font-medium transition-colors duration-300`}
              activeClass="text-indigo-400"
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`${linkColor} focus:outline-none z-30 relative`}>
            {/* This is a more modern "X" and "Hamburger" animation */}
            <div className="w-6 h-6 flex flex-col justify-around items-center">
              <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* --- REBUILT MOBILE MENU DROPDOWN --- */}
      {/* This now slides down from the top and sits OVER the content */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full pt-20 transform transition-transform duration-300 ease-in-out ${mobileMenuBg} ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="px-6 pt-2 pb-4 flex flex-col items-center">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-center py-3 text-white hover:text-indigo-400 text-lg w-full"
              activeClass="text-indigo-400 font-bold"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;