import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// --- SERVICE DATA ---
// Here you will define your services and the links to the portfolios you want to email.
// These links can be to hidden pages on your site, a Dropbox folder, a Pixieset gallery, etc.
const services = [
  { name: 'Creative Portraits', portfolioLink: 'http://localhost:3000/portraits-portfolio' },
  { name: 'Wedding & Couples', portfolioLink: 'http://localhost:3000/weddings-portfolio' },
  { name: 'Events & Parties', portfolioLink: 'http://localhost:3000/events-portfolio' },
  { name: 'Brand & Product', portfolioLink: 'http://localhost:3000/branding-portfolio' },
];

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error', ''

  // Function to open the modal with the selected service
  const handleCardClick = (service) => {
    setSelectedService(service);
    setStatus('');
    setEmail('');
    setModalOpen(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      user_email: email,
      service_name: selectedService.name,
      portfolio_link: selectedService.portfolioLink,
      // You can add more variables here to use in your EmailJS template
    };

    // --- IMPORTANT: Replace with your actual EmailJS credentials ---
    emailjs.send(
      'service_dei8xfw',      // Your Service ID from EmailJS
      'template_sz9yp55',     // Your Template ID from EmailJS
      templateParams,
      'oFMRj5840LoqZcnQk'       // Your Public Key from EmailJS
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setStatus('success');
    }, (err) => {
       console.log('FAILED...', err);
       setStatus('error');
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in a specific type of photography? Select a category below to receive a curated portfolio directly to your inbox.
        </p>

        {/* Service selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div 
              key={service.name} 
              onClick={() => handleCardClick(service)}
              className="p-8 border-2 border-gray-200 rounded-lg shadow-md cursor-pointer transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold font-serif">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Email Input */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800">&times;</button>
            
            <h3 className="text-2xl font-serif font-bold mb-2">Get The <span className="text-indigo-600">{selectedService.name}</span> Portfolio</h3>
            <p className="text-gray-600 mb-6">Enter your email below and we'll send it right over.</p>

            {status !== 'success' ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                />
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 disabled:bg-indigo-400"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Portfolio'}
                </button>
                {status === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
              </form>
            ) : (
              <div>
                <p className="text-xl text-green-600 font-semibold">Success! Check your inbox.</p>
                <p className="text-gray-600 mt-2">We've sent the portfolio to {email}.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;