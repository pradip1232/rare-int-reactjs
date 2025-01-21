import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';

import first from './images/portfolio/13.webp';
import second from './images/portfolio/14.webp';
import third from './images/portfolio/15.webp';
import four from './images/portfolio/16.webp';
import five from './images/portfolio/17.webp';
import six from './images/portfolio/18.webp';
import seven from './images/portfolio/19.webp';
import eight from './images/portfolio/20.webp';
import nine from './images/portfolio/21.webp';
import ten from './images/portfolio/22.webp';
import elevan from './images/portfolio/23.webp';
import twelve from './images/portfolio/24.webp';
import thirteen from './images/portfolio/25.webp';
import fourteen from './images/portfolio/26.webp';
import fifteen from './images/portfolio/27.webp';
import sixteen from './images/portfolio/28.webp';
import seventeen from './images/portfolio/29.webp';
import eighteen from './images/portfolio/30.webp';

const NewPortfolioSection = () => {
    const projects = [
        { id: 1, title: 'New Agro', img: first },
        { id: 2, title: 'Squib React Project', img: second },
        { id: 3, title: 'E-commerce Website', img: third },
        { id: 4, title: 'Interior Design', img: four },
        { id: 5, title: 'Photography Portfolio', img: five },
        { id: 6, title: 'Web Application', img: six },
        { id: 7, title: 'Mobile App', img: seven },
        { id: 8, title: 'Graphic Design', img: eight },
        { id: 9, title: 'Graphic Design', img: nine },
        { id: 10, title: 'Web Development', img: ten },
        { id: 11, title: 'Web Development', img: elevan },
        { id: 12, title: 'Web Development', img: twelve },
        { id: 13, title: 'Web Development', img: thirteen },
        { id: 14, title: 'Web Development', img: fourteen },
        { id: 15, title: 'Web Development', img: fifteen },
        { id: 16, title: 'Web Development', img: sixteen },
        { id: 17, title: 'Web Development', img: seventeen },
        { id: 18, title: 'Web Development', img: eighteen },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: i < 4 ? '#dee2e6' : 'transparent',
                    borderRadius: '50%',
                    margin: '10px auto',
                }}
            ></div>
        ),
        appendDots: (dots) => <ul style={{ display: 'flex', justifyContent: 'center' }}>{dots.slice(0, 4)}</ul>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Container className="my-5 px-4">
            <Slider {...sliderSettings}>
                {projects.map((project) => (
                    <div key={project.id} className="px-2">
                        <Card
                            className="rounded-0"
                            style={{
                                width: '325px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '4px inset rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <Card.Img variant="top" className="border-0 rounded-0" src={project.img} />
                        </Card>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default NewPortfolioSection;
