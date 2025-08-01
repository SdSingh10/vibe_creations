import React from 'react';
import { motion } from 'framer-motion';
// Place a professional headshot in `src/assets`
import profilePic from '../assets/guriqbal_singh_1.jpg';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    {/* <section id="about" className="py-20 bg-gray-50"> */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 font-serif mb-12">About Me</h2><br></br>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
            src={profilePic} // This part already uses the variable, so no change is needed here
            alt="Guriqbal Singh from Vibe City Creations" 
            className="rounded-lg shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover object-top"
          />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-4xl lg:text-2xl  text-gray-900 leading-relaxed mb-4">
              Guriqbal Singh
            </h3>
            <p className=" text-gray-600 italic mt-4 font-sans">
              "Project engineer by profession and a passionate photographer by heart."
            </p>
            <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-6 font-sans max-w-prose">
              <p>
                While engineering gave me the tools to build with precision, photography gave me the purpose to capture emotion. That's how <span className="font-semibold text-black-600">Vibe City Creations</span> was born — from a love of moments that are felt, not just seen.
              </p>
              <p>
                Every face has a story. Every couple shares a unique energy. My lens is simply a witness to that connection. Whether it's a candid glance during a wedding or the quiet strength in a portrait, I strive to freeze real emotion — the kind that gives you chills years later.
              </p>
              <p>
                Rooted in detail from my engineering mind and inspired by emotion from my creative soul, my approach is both intentional and heartfelt. At <span className="font-semibold text-black-600">Vibe City Creations</span>, you won't find forced poses — just real people, true vibes, and timeless frames.
              </p>
              <p className="text-gray-600  leading-relaxed">
              Thanks for stopping by. I’d love to tell your story through my lens.
            </p>
            </div>
          </div>
        </div>
      </div>
    {/* </section> */}
    </motion.section>
  );
};

export default About;