import React, { useRef } from 'react'; // Import useRef here
import videoFile from './images/rare interior hero video.mp4'; // Import the video
import ff from './images/rare interior hero new img without content.png';
import './Home.css'; // Import the CSS file
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import { motion } from 'framer-motion'; // Use framer-motion for animations
import TestimonialsSection from './TestimonialsSection';
import MeetTeamSection from './MeetTeamSection';
import CallToAction from './CallToAction';
import BlackSection from './BlackSection';
import HelpSection from './HelpSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from './WhatsAppButton';
import InspireSection from './InspireSection';
import NewPortfolioSection from './NewPortfolioSection';
import NavbarComponent from './Navbar';

function Home() {
    const blogSectionRef = useRef(null);

    // Scroll to Blog section
    const scrollToBlog = () => {
        blogSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <WhatsAppButton />
            <NavbarComponent scrollToBlog={scrollToBlog} />

            <section className="first-section">
                <video autoPlay muted loop>
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-content">
                    <h1>Transforming Spaces, Crafting Experiences</h1>
                    <p>Premium interior design and visual merchandising solutions for global luxury brands.</p>
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            color: '#ffffff',
                            padding: '12px 24px',
                            border: '1px solid white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'background-color 0.3s',
                            marginTop: '10px',
                        }}
                    >
                        Start Your Journey
                    </button>
                </div>
            </section>

            <section className="second-section" id="blog" ref={blogSectionRef}>
                <div className="container text-center py-5">
                    <motion.h2
                        className="fw-bold1"
                        style={{ color: 'black' }}
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }} // Duration for fade-in
                    >
                        About Us
                    </motion.h2>

                    <motion.p
                        className="lead2 mt-3"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.2 }} // Adding delay for staggered effect
                    >
                        Rare Interior Group, a leading UAE-based company founded in 2018. With over 7 years of expertise, we specialize in delivering exceptional visual merchandising solutions for retail jewelry stores, dynamic exhibitions, and bespoke interior designs for both residential and commercial spaces.
                    </motion.p>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.4 }} // Increasing delay for second paragraph
                    >
                        Our accomplished team of top designers employs a meticulous approach to create visual narratives that reflect your unique aspirations and elevate your brand’s presence. Having completed over 1,000 projects worldwide, we are dedicated to transforming your vision into our mission.
                    </motion.p>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.6 }} // Increasing delay for third paragraph
                    >
                        Experience the Rare Interior Group difference, where unparalleled quality and innovation come together to make your space truly extraordinary.
                    </motion.p>

                    <motion.button
                        className="about-us-btn"
                        style={{ padding: '6px 20px', backgroundColor: 'white' }}
                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        whileTap={{ scale: 0.95 }} // Scale effect on tap
                    >
                        About Us
                    </motion.button>
                </div>
            </section>

            {/* Other Sections */}
            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
            <BlackSection />
            <NewPortfolioSection />
            <TestimonialsSection />
            <InspireSection />
            <HelpSection />
            <CallToAction />
        </>
    );
}

export default Home;
