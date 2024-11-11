import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';

import first from './images/Rare interior portfolio inmg/portfolio img (1).webp';
import second from './images/Rare interior portfolio inmg/portfolio img (2).webp';
import third from './images/Rare interior portfolio inmg/portfolio img (3).webp';
import four from './images/Rare interior portfolio inmg/portfolio img (4).webp';
import five from './images/Rare interior portfolio inmg/portfolio img (5).webp';
import six from './images/Rare interior portfolio inmg/portfolio img (6).webp';
import seven from './images/Rare interior portfolio inmg/portfolio img (7).webp';
import eight from './images/Rare interior portfolio inmg/portfolio img (8).webp';

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
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                    <div key={project.id} className="px-2"> {/* 5px gap achieved by px-2 */}
                        <Card
                            className="rounded-0"
                            style={{
                                width: '300px', // Fixed width of 300px
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for elevation
                               
                                border: '4px inset rgba(0, 0, 0, 0.2)', // Inset inner border
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
