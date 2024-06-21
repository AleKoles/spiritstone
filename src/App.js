import React from 'react';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Clients from './components/Clients';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
