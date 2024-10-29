import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <Router>
      <div>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testing" element={<TestimonialsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
