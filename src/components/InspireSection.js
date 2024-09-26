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
    <div id="inspire-section" className="inspire-section ">
      <div className={"text-center color-white container `inspire-content ${isVisible ? 'visible' : ''}`"} >
        <h2>UNLEASH YOUR CREATIVITY WITH INSPIRO</h2>
        <p>
          This is some dummy copy. You're not really supposed to read this dummy copy,
          it is just a placeholder for people who need some type to visualize what the
          actual copy might look like if it were real content.
        </p>
        <button className="contact-button">CONTACT US</button>
      </div>
    </div>
  );
};

export default InspireSection;
