// rafce
import React from 'react';
import '../../styles/website_styles/AboutUs-style.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to our company! We are a passionate team dedicated to delivering exceptional digital experiences.
          Our mission is to empower businesses through innovative technology and creative solutions.
        </p>
        <p className="about-text">
          With a focus on quality, integrity, and collaboration, we strive to exceed expectations and build lasting relationships.
          Whether you're a startup or an enterprise, we're here to help you grow and succeed.
        </p>
        <div className="about-signature">
          <span>— The Team</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;