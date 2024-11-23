import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Education.css'; // Assuming you'll style your page with a separate CSS file

const Education = () => {
  const educationData = [
    {
      institution: "Zone 2 Del Rosario, Canaman, Cam Sur (Kindergarten)",
      description: "I studied at Zone 2 Del Rosario Canaman, Cam Sur. (na palaging inaaway.)",
    },
    {
      institution: "Tacolod Elementary School Main",
      description: "I graduated at Tacolod Elementary School Main. (When I was in grade 1, pinukpok ko kaklase ko ng payong kasi kinuha so apple ko haha.)",
    },
    {
      institution: "Camaligan National High School",
      description: "I graduated at Camaligan National High School.",
    },
    {
      institution: "Naga College Foundation",
      degree: "2nd Year BS Information System Student",
      description: "Currently studying at Naga College Foundation as a 2nd year BS Information System student.",
    },
  ];

  return (
    <Container className="education-container" style={{ maxWidth: '1200px', margin: '50px auto' }}> {/* Adjusted margin-top to lower the box */}
      <h1 className="education-title">My Education</h1>
      <Row className="justify-content-center">
        {educationData.map((edu, index) => (
          <Col key={index} md={6} lg={4} className="mb-4 d-flex justify-content-center">
            <Card className="education-card" style={{ maxWidth: '320px', width: '100%' }}> {/* Make the card smaller */}
              <Card.Body>
                <Card.Title>{edu.institution}</Card.Title>
                {edu.degree && (
                  <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                )}
                <Card.Text>{edu.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;



