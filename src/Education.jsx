import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Education.css'; // Assuming you'll style your page with a separate CSS file

const Education = () => {
  const educationData = [
    {
      institution: "school",
      duration: "2018 - 2022",
      description: "Specialized in software engineering, data structures, and algorithms. Graduated with honors.",
    },
    {
      institution: "school",
      duration: "2016 - 2018",
      description: "Focused on front-end and back-end web development, including HTML, CSS, JavaScript, and React.",
    },
    {
      institution: "school",
      degree: "",
      duration: "2012 - 2016",
      description: "Graduated with a strong interest in technology, leading to a focus on computer science and mathematics.",
    },
  ];

  return (
    <Container className="education-container">
      <h1 className="education-title">My Education</h1>
      <Row className="justify-content-center">
        {educationData.map((edu, index) => (
          <Col key={index} md={8} className="mb-4">
            <Card className="education-card">
              <Card.Body>
                <Card.Title>{edu.institution}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                <Card.Text>
                  <strong>Duration:</strong> {edu.duration}
                </Card.Text>
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
