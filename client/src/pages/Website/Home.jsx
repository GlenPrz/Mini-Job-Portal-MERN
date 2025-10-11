import React from "react";
import "../../styles/website_styles/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Mini Job Portal</h1>
          <p className="hero-subtitle">
            Discover opportunities, connect with employers, and take the next step in your career.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Browse Jobs</button>
            <button className="btn secondary">Post a Job</button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2 className="section-title">What You Can Do</h2>
        <div className="cards-grid">
          <div className="card card-browse">
            <h3>Browse Jobs</h3>
            <p>Explore thousands of job listings tailored to your skills and interests.</p>
          </div>
          <div className="card card-post">
            <h3>Post a Job</h3>
            <p>Quickly reach top talent by posting your company’s open roles.</p>
          </div>
          <div className="card card-hire">
            <h3>Get Hired</h3>
            <p>Apply with ease and get noticed by leading employers in your field.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
