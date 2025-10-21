// rafce
import React from 'react';
import '../../styles/website_styles/AboutUs-style.css';

const AboutUs = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <section className="about-container" aria-labelledby="about-title">
      <article className="about-card">
        <header>
          <h1 id="about-title" className="about-title">About Us</h1>
          <p className="about-subtitle">
            We build simple, reliable digital products that help businesses grow and people do meaningful work.
          </p>
        </header>

        <div className="about-content">
          <p className="about-text">
            Founded on a commitment to craftsmanship and collaboration, our team combines product thinking,
            modern engineering, and thoughtful design to deliver software that solves real problems.
          </p>

          <section aria-labelledby="mission-title" className="about-section">
            <h2 id="mission-title" className="about-section-title">Our Mission</h2>
            <p className="about-text">
              Empower small and growing businesses with affordable, scalable technology so they can focus on what matters most — their customers.
            </p>
          </section>

          <section aria-labelledby="what-title" className="about-section">
            <h2 id="what-title" className="about-section-title">What We Do</h2>
            <ul className="about-list">
              <li>Custom web and mobile applications</li>
              <li>UX-focused product design</li>
              <li>API integrations and automation</li>
              <li>Ongoing support and performance improvements</li>
            </ul>
          </section>

          <section aria-labelledby="values-title" className="about-section">
            <h2 id="values-title" className="about-section-title">Our Values</h2>
            <ul className="about-values">
              <li>Quality — delivering work we’re proud of</li>
              <li>Transparency — clear communication and expectations</li>
              <li>Practicality — pragmatic solutions that deliver value</li>
              <li>Respect — collaborative relationships with clients and teammates</li>
            </ul>
          </section>
        </div>

        <footer className="about-signature">
          <span>— The Team</span>
          <button type="button" className="about-cta" onClick={scrollToContact} aria-label="Contact us">
            Get in touch
          </button>
        </footer>
      </article>
    </section>
    </>
  );
};

export default AboutUs;