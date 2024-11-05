import React, { useState, useEffect } from 'react';
import './InspireSection.css'; // CSS file for styling

const InspireSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('inspire-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="inspire-section" className="inspire-section " >
      <div className={"text-center bg-dark-treanlent color-white container `inspire-content ${isVisible ? 'visible' : ''}`"}  >
        <h2>Get in Touch</h2>
        <p>
          Whether you're looking to redesign your space or create an unforgettable visual display, we're here to help
        </p>
        <button className="contact-button">CONTACT US</button>
      </div>
    </div>
  );
};

export default InspireSection;
