import React from 'react';
import videoFile from '../assets/img/video/vv.mp4'; // Import the video
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
// import HelpModal from './HelpModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from './WhatsAppButton';

function Home() {
    return (
        <>
            {/* <HelpModal /> */}
            <WhatsAppButton />
            <section className="first-section">
                <video autoPlay muted loop>
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-content">
                    <h1>Transforming Spaces, Crafting Experiences </h1>
                    <p>

                        Premium Interior Design & Visual Merchandising Solutions for Global Luxury Brands</p>
                </div>
            </section>

            <section className="second-section">
                <div className="container text-center py-5">
                    <h2 className="fw-bold1">Our Company</h2>
                    <p className="lead2 mt-3">
                        Rare Interior Group, a leading UAE-based company founded in 2018. With over 7 years of expertise, we
                        specialize in delivering exceptional visual merchandising solutions for retail jewelry stores, dynamic
                        exhibitions, and bespoke interior designs for both residential and commercial spaces.
                        Our accomplished team of top designers employs a meticulous approach to create visual narratives that
                        reflect your unique aspirations and elevate your brand’s presence. Having completed over 1,000 projects
                        worldwide, we are dedicated to transforming your vision into our mission.
                        Experience the Rare Interior Group difference, where unparalleled quality and innovation come together
                        to make your space truly extraordinary.
                    </p>
                    <button className="about-us-btn" style={{ padding: '15px', backgroundColor: 'white' }}>
                        About Us
                    </button>
                </div>
            </section>



            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
            <BlackSection />
            <TestimonialsSection />
            <MeetTeamSection />
            <HelpSection />
            <CallToAction />
        </>
    );
}

export default Home;