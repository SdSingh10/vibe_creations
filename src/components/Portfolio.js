import React, { useState, useEffect } from 'react';
import { FaCamera, FaPlay } from 'react-icons/fa';

// --- SAMPLE DATA STRUCTURE ---
// Replace this with your client's actual portfolio items.
// For videos, the 'src' can be a thumbnail image. You'd handle the video play in a lightbox.
const portfolioData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop', title: 'Street Style', category: 'portraits', type: 'photo' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop', title: 'Birthday Bash', category: 'events', type: 'photo' },
  { id: 3, src: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop', title: 'Reel Thumbnail', category: 'reels', type: 'video' },
  { id: 4, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop', title: 'Editorial Look', category: 'portraits', type: 'photo' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', title: 'Wedding Day', category: 'events', type: 'photo' },
  { id: 6, src: 'https://images.unsplash.com/photo-1605346428243-74b4347b4173?q=80&w=2070&auto=format&fit=crop', title: 'Cafe Branding', category: 'branding', type: 'photo' },
  { id: 7, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop', title: 'Candid Moments', category: 'portraits', type: 'photo' },
  { id: 8, src: 'https://images.unsplash.com/photo-1615911217312-73819a556bd4?q=80&w=1887&auto=format&fit=crop', title: 'Concert Lights', category: 'events', type: 'video' },
];

const categories = ['all', 'portraits', 'events', 'branding', 'reels'];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioData);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 font-serif mb-12">Our Work</h2>
        
        {/* --- PART 1: SIGNATURE SERVICES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
          {/* You can map this out, but for 4 distinct services, manual is fine */}
          <div className="service-card p-8 bg-gray-200 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => setFilter('portraits')}>
            <h3 className="text-2xl font-bold font-serif mb-2">Creative Portraits</h3>
            <p className="text-gray-600">For individuals, artists, and brands.</p>
          </div>
          <div className="service-card p-8 bg-gray-200 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => setFilter('events')}>
            <h3 className="text-2xl font-bold font-serif mb-2">Event Coverage</h3>
            <p className="text-gray-600">Capturing the energy of any occasion.</p>
          </div>
          <div className="service-card p-8 bg-gray-200 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => setFilter('branding')}>
            <h3 className="text-2xl font-bold font-serif mb-2">Brand & Product</h3>
            <p className="text-gray-600">Visuals that tell your brand's story.</p>
          </div>
          <div className="service-card p-8 bg-gray-200 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => setFilter('reels')}>
            <h3 className="text-2xl font-bold font-serif mb-2">Cinematic Reels</h3>
            <p className="text-gray-600">Dynamic video for social media.</p>
          </div>
        </div>

        {/* --- PART 2: INTERACTIVE GALLERY --- */}
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`capitalize font-semibold py-2 px-6 rounded-full transition-all duration-300 ${filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid (Masonry-like) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg">
              <img src={item.src} alt={item.title} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col items-center justify-center text-white p-4 text-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.type === 'video' ? <FaPlay size={40} /> : <FaCamera size={40} />}
                  <h3 className="font-bold text-xl mt-2">{item.title}</h3>
                </div>
              </div>
              {/* This is where you would trigger a lightbox onClick */}
            </div>
          ))}
        </div>
        
        {/* --- PART 3: LIVE INSTAGRAM FEED --- */}
        {/* Add a placeholder for your Instagram feed embed code here */}
        <div className="text-center mt-20">
            <h3 className="text-3xl font-bold font-serif mb-4">Latest on Instagram</h3>
            <div className="bg-gray-200 p-8 rounded-lg shadow-inner h-64 flex items-center justify-center">
                <p className="text-gray-500">[ Live Instagram Feed Embed Goes Here ]</p>
            </div>
            <a href="https://www.instagram.com/vibecitycreations" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Follow on Instagram
            </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;