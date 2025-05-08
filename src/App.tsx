import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Profile from './components/Profile';
import Features from './components/Features';
import Solution from './components/Solution';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import CGU from './components/CGU';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/cgu" element={<CGU />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <Profile />
              <About />
              <Features />
              <Solution />
              <Contact />
              <Footer />
              <WhatsAppWidget />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;