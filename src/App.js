import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Merch from './components/Merch';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Merch /> 
        <About />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;