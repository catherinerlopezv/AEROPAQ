import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Coverage from './components/Coverage/Coverage';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Services />
        <Coverage />
        <HowItWorks />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;