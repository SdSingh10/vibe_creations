import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPlay } from 'react-icons/fa';

// Import Swiper React components and styles for the mobile view
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- YOUR CLIENT'S PORTFOLIO DATA ---
// Replace these with actual image imports from src/assets/portfolio/
// Example: import portrait1 from '../assets/portfolio/portrait-1.jpg';
const portfolioData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop', title: 'Street Style', category: 'portraits', type: 'photo' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop', title: 'Birthday Bash', category: 'events', type: 'photo' },
  { id: 3, src: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop', title: 'Reel Thumbnail', category: 'reels', type: 'video' },
  { id: 4, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop', title: 'Editorial Look', category: 'portraits', type: 'photo' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', title: 'Wedding Day', category: 'events', type: 'photo' },
  { id: 6, src: 'https://images.unsplash.com/photo-1605346428243-74b4347b4173?q=80&w=2070&auto=format&fit=crop', title: 'Cafe Branding', category: 'branding', type: 'photo' },
  { id: 7, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop', title: 'Candid Moments', category: 'portraits', type: 'photo' },
  { id: 8, src: 'https://images.unsplash.com/photo-1615911217312-73819a556bd4?q=80&w=1887&auto=format&fit=crop', title: 'Concert Lights', category: 'reels', type: 'video' },
];

const categories = [
    { key: 'portraits', name: 'Creative Portraits' },
    { key: 'events', name: 'Event Coverage' },
    { key: 'branding', name: 'Brand & Product' },
    { key: 'reels', name: 'Cinematic Reels' },
];

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
    <motion.section 
      id="portfolio" 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 font-heading uppercase tracking-wider mb-16">
          Our Work
        </h2>
        
        {/* --- DESKTOP VIEW: The Filterable Grid (Hidden on mobile) --- */}
        <div className="hidden md:block">
            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`capitalize font-semibold py-2 px-6 rounded-full transition-all duration-300 ${filter === cat.key ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                >
                  {cat.name}
                </button>
              ))}
              <button onClick={() => setFilter('all')} className={`font-semibold py-2 px-6 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>All</button>
            </div>
            
            {/* Portfolio Grid */}
             <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {filteredItems.map(item => (
                <div key={item.id} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <img src={item.src} alt={item.title} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col items-center justify-center text-white p-4 text-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.type === 'video' ? <FaPlay size={40} /> : <FaCamera size={40} />}
                      <h3 className="font-bold text-xl mt-2">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* --- MOBILE VIEW: The Carousel Showcase (Visible only on mobile) --- */}
        <div className="md:hidden space-y-12">
            {categories.map(category => {
                const items = portfolioData.filter(item => item.category === category.key);
                if (items.length === 0) return null;
                
                return (
                    <div key={category.key}>
                        <h3 className="text-2xl font-bold font-serif text-gray-800 mb-4">{category.name}</h3>
                        <Swiper
                          modules={[Pagination]}
                          spaceBetween={15}
                          slidesPerView={1.25} // Shows one slide and a peek of the next
                          pagination={{ clickable: true, el: `.swiper-pagination-${category.key}` }}
                        >
                          {items.map(item => (
                            <SwiperSlide key={item.id}>
                              <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                  <h4 className="text-white font-bold text-lg drop-shadow-md">{item.title}</h4>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        {/* Custom pagination container for each swiper instance */}
                        <div className={`swiper-pagination-${category.key} mt-4 text-center`}></div>
                    </div>
                )
            })}
        </div>

      </div>
    </motion.section>
  );
};

export default Portfolio;