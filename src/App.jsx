import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import router components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import About from './About';
import Home from './Home'; // Import the actual Home component
import Education from './Education'; // Import the Education component
import Hobbies from './Hobbies'; // Import the Hobbies component
import Contact from './Contact'; // Import the Contact component
import Photos from './Photos'; // Import the Photos component

// Main App Component
function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: 'url(/dog.gif)',  // Ensure the image is in the public folder
          backgroundSize: 'cover',           // Ensure the image fully covers the container
          backgroundRepeat: 'no-repeat',     // Prevent tiling
          backgroundPosition: 'center',      // Center the image
          height: "100vh",                    // Full viewport height
          width: "100vw",                     // Full viewport width
          paddingTop: "60px",                 // Adjust padding for the navbar
          position: "relative",
        }}
      >
        {/* Bootstrap navbar for navigation */}
        <Navbar className="navbar" fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
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
        <div className="mt-5" style={{ marginTop: '80px' }}> {/* Adjust margin-top here */}
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
        <footer style={{ textAlign: "center", paddingTop: "224px", backgroundColor: "transparent" }}></footer>
      </div>
    </Router>
  );
}

export default App;

