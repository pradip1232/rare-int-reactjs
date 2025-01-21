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
    const clickContact = () => {
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
            <NavbarComponent clickContact={clickContact} />
            <NavbarComponent scrollToBlog={scrollToBlog} />

            <style>
                {`
                        .hover-button {
                            background-color: transparent;
                            color: #ffffff;
                            padding: 12px 24px;
                            border: 1px solid white;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 16px;
                            transition: background-color 0.3s, color 0.3s;
                            margin-top: 10px;
                        }

                        .hover-button:hover {
                            background-color: white;
                            color: black;
                        }
                        `}
            </style>

            <section className="first-section">
                <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                    <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            textAlign: 'center',
                            padding: '20px',
                        }}
                    >
                        <h1>Designing Dreams, Elevating Brands</h1>
                        <p>Luxury Interior Design and Visual Merchandising Solutions Tailored to Perfection</p>
                        <button className="hover-button">
                            Explore Our Creations
                        </button>
                    </div>
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
                        About Rare Interior Group
                    </motion.h2>

                    <motion.p
                        className="lead2 mt-3"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.2 }} // Adding delay for staggered effect
                    >
                        Welcome to Rare Interior Group, where luxury, innovation, and sustainability come together. We specialize in designing exceptional interior spaces and creating impactful visual merchandising displays that seamlessly blend aesthetics with functionality. With a commitment to quality and cutting-edge design, we bring your vision to life through solutions that inspire and endure. Serving clients across the GCC, Hong Kong, Saudi Arabia, and India, we deliver transformative designs with a global perspective. Discover how our expertise can elevate your space and redefine your brand.
                    </motion.p>

                    {/* <motion.button
                        className="about-us-btn"
                        style={{ padding: '6px 20px', backgroundColor: 'white' }}
                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        whileTap={{ scale: 0.95 }} // Scale effect on tap
                    >
                        About Us
                    </motion.button> */}
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
