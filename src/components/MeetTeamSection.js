import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

// Team members data
const teamMembers = [
  {
    img: 'https://wp-themes.com/wp-content/themes/inspiro/assets/images/team1.png',
    name: 'John Doe',
    text: `"This is the best service I've ever experienced! Highly recommended."`,
  },
  {
    img: 'https://wp-themes.com/wp-content/themes/inspiro/assets/images/team2.png',
    name: 'Jane Smith',
    text: `"Fantastic experience. Will definitely use this service again."`,
  },
  {
    img: 'https://wp-themes.com/wp-content/themes/inspiro/assets/images/team3.png',
    name: 'Alice Johnson',
    text: `"Highly professional and reliable. Five stars! Have a nice day"`,
  },
];

const MeetTeamSection = () => {
  return (
    <section className="meet-team py-5">
      <Container>
        <div className="text-center mb-4">
          <Typography variant="h2" style={{ color: 'black' }}>MEET US Our Team</Typography>
        </div>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index} className="mb-4">
              <Card className="border-0">
                <CardMedia
                  component="img"
                  height="auto"
                  image={member.img}
                  alt={`Team Member ${index + 1}`}
                  className="card-img-top"
                />
                <CardContent className="card-body">
                  <Typography variant="h5" className="card-title">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    {member.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="text-center">
          <Button
            style={{ padding: '15px', backgroundColor: 'black' }}
            variant="contained"
          >
            VIEW ALL
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MeetTeamSection;
