import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 

// --- IMPORTANT ---
// Replace these with the BEST photos from the client's Instagram feed.
const slides = [
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop', // Example: Modern male portrait
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop', // Example: Expressive female portrait
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop', // Example: Candid, personality-driven shot
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <section id="home" className="h-screen w-full relative group bg-black">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        {/* UPDATED HEADLINE AND TEXT */}
        <h1 className="text-5xl md:text-7xl font-serif leading-tight drop-shadow-md mb-4">
          Vibe City Creations
        </h1>
        <p className="text-lg md:text-xl font-sans max-w-2xl drop-shadow-md mb-8">
          Creative portraits and visuals that tell your story. Based in Toronto, serving clients with bold personalities.
        </p>
        <ScrollLink
          to="portfolio" // This is the ID of the section we want to scroll to
          smooth={true}
          duration={500}
          offset={-70} // Offset to account for the navbar
          className="cursor-pointer inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
        >
          View The Work
        </ScrollLink>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black/60 transition-colors text-white cursor-pointer">
        <FaChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black/60 transition-colors text-white cursor-pointer">
        <FaChevronRight onClick={nextSlide} size={30} />
      </div>
    </section>
  );
};

export default Hero;