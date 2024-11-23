import React from "react";
import "./About.css"; // Assuming your CSS is in 'about.css'

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
      Hello, I'm Jenelyn Miraflor you can call me Lyn na lang po, 
      21 years old and my birthday is on (secret po baka kaya may mag dula hahaha) . I’m from Del Rosario Canaman and currently studying at Naga College Foundation Inc.My favorite food is boiled egg and ice cream, and I hate banana. Some of my hobbies I really enjoy are watching movies/series and scrolling my TikTok feed when i am bored.
      </p>
      <img src="/lyn.jpg" alt="Jenelyn" className="about-image" />
    </div>
  );
};

export default About;
