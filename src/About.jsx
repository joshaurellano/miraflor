import React from "react";
import "./About.css"; // Assuming your CSS is in 'about.css'

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        This is where your about paragraph goes. Feel free to replace this with your own story or description!
      </p>
      <img src="/lyn.jpg" alt="Jenelyn" className="about-image" />
    </div>
  );
};

export default About;
