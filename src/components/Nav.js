import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import the Link component
import logoWhite from '../assets/logos/logo-white.png';
import logoDark from '../assets/logos/logo-dark.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Updated navLinks to match our sections
  const navLinks = [
    { title: "Home", to: "home" },
    { title: "Merch", to: "merch" },
    { title: "About", to: "about" },
    { title: "Portfolio", to: "portfolio" },
    { title: "Reviews", to: "review" }, // The ID for the Review section is "review"
    { title: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';
  const linkColor = scrolled ? 'text-gray-800' : 'text-white';
  const logoColor = scrolled ? 'text-gray-900' : 'text-white';
  const mobileMenuBg = scrolled ? 'bg-white' : 'bg-black/80';

  return (
    <nav className={`fixed w-full z-20 top-0 transition-all duration-300 ease-in-out ${navClass}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <img 
            src={scrolled ? logoDark : logoWhite} 
            alt="Vibe City Creations Logo" 
            className="h-12 w-auto transition-all duration-300"
          />
        </ScrollLink>
        
        {/* --- DESKTOP LINKS UPDATED --- */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true} // Enables active class highlighting
              smooth={true} // Enables smooth scrolling
              offset={-70} // Adjusts scroll position to account for the navbar height
              duration={500} // Animation duration in milliseconds
              className={`cursor-pointer ${linkColor} hover:text-indigo-500 font-medium transition-colors duration-300`}
              activeClass="text-indigo-600" // Class to apply when link is active
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`${linkColor} focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* --- MOBILE LINKS UPDATED --- */}
      {isOpen && (
        <div className={`md:hidden px-6 pt-2 pb-4 ${mobileMenuBg}`}>
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block text-center py-2 ${linkColor} hover:text-indigo-500`}
              activeClass="text-indigo-600"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;