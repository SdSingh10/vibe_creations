import React from 'react';

const testimonials = [
  { id: 1, name: 'Jessica S.', quote: "Pvanit was incredible to work with. He made us feel so comfortable, and the photos exceeded all our expectations. Truly a magical experience!", type: 'Wedding Photoshoot' },
  { id: 2, name: 'Mark Chen', quote: "The best photographer I've ever hired for corporate headshots. Professional, efficient, and the results were sharp and compelling. Highly recommend.", type: 'Corporate Headshots' },
  { id: 3, name: 'The Sharma Family', quote: "He perfectly captured the chaos and love of our family. These aren't just photos; they are treasured memories. We can't thank him enough.", type: 'Family Portraits' },
];

const Review = () => {
  return (
    <section id="review" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 font-serif mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="font-bold text-lg text-indigo-600">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;