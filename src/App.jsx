import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import router components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import About from './About';
import Home from './Home'; // Import the actual Home component
//import Photos from './Photos';
//import Education from './Education';
//import Hobbies from './Hobbies';
//import Contact from './Contact';  // Importing the Contact component correctly

// Placeholder components for other pages
const Education = () => <div style={{ color: 'white', padding: '20px' }}><h2>Education Page</h2></div>;
const Hobbies = () => <div style={{ color: 'white', padding: '20px' }}><h2>Hobbies Page</h2></div>;
const Skills = () => <div style={{ color: 'white', padding: '20px' }}><h2>Skills Page</h2></div>;
const Photos = () => <div style={{ color: 'white', padding: '20px' }}><h2>Photos Page</h2></div>;

// Adding the Contact Component
const Contact = () => (
  <div style={{ color: 'white', padding: '20px' }}>
    <h2>Contact Page</h2>
    <p>Feel free to reach out to me for any inquiries or collaborations!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: 'url(/pink2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: "100vh",
          width: "100vw",
          paddingTop: "60px",
          position: "relative"
        }}
      >
        {/* Bootstrap navbar for navigation */}
        <Navbar data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
              WINTER BEAR
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
              <Nav.Link as={Link} to="/photos" className="nav-link-hover">Photos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Main content area */}
        <div className="mt-5">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: "center", paddingTop: "224px", backgroundColor: "transparent" }}>
          Jenelyn Miraflor
        </footer>
      </div>
    </Router>
  );
}

export default App;
