import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Styled component for animated text
const AnimatedText = motion.div;

const BlackSection = () => {
  return (
    <section className="black-section" style={{ backgroundColor: '#000', color: '#fff', padding: '10px 100px' }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={10}>
            <AnimatedText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ color: 'white', textAlign: 'left', padding: '20px' }}
            >
              <h2>FROM THE PORTFOLIO</h2>
              <p style={{marginTop:'0'}}>
                Over the years, we’ve had the privilege of working with some of the most
                prestigious brands across the globe. <br/>From creating bespoke retail
                environments to designing luxurious living spaces, our work speaks for
                itself.
              </p>
            </AnimatedText>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlackSection;
