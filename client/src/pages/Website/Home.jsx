import React, { useState } from "react";
import "../../styles/website_styles/Home.css";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Acme Corp",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Beta Labs",
    location: "New York, NY",
    type: "Contract",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "San Francisco, CA",
    type: "Part-time",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sofia R.",
    role: "Product Designer",
    text: "I found my current role within a week. The listings are high quality and easy to filter.",
  },
  {
    id: 2,
    name: "Jake P.",
    role: "Full-stack Developer",
    text: "Posting a job was straightforward and we received excellent candidates quickly.",
  },
];

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    // placeholder for actual subscribe action
    setMessage("Thanks for subscribing!");
    setEmail("");
    setTimeout(() => setMessage(""), 4000);
  };

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

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat">
            <h3>10k+</h3>
            <p>Jobs Listed</p>
          </div>
          <div className="stat">
            <h3>5k+</h3>
            <p>Active Employers</p>
          </div>
          <div className="stat">
            <h3>20k+</h3>
            <p>Registered Users</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="section-title">How It Works</h2>
        <div className="how-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Search</h4>
            <p>Use filters to find roles that match your skills and location.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Apply</h4>
            <p>Apply with your profile or upload a resume in seconds.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Get Hired</h4>
            <p>Schedule interviews and start your new role.</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="jobs-section">
        <h2 className="section-title">Featured Jobs</h2>
        <div className="jobs-grid">
          {sampleJobs.map((job) => (
            <article key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p className="job-company">{job.company} • {job.location}</p>
              <p className="job-type">{job.type}</p>
              <div className="job-actions">
                <button className="btn small">View</button>
                <button className="btn outline small">Apply</button>
              </div>
            </article>
          ))}
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

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <p className="quote">“{t.text}”</p>
              <p className="author">{t.name}, <span className="role">{t.role}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Subscribe to get the latest jobs and career tips delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn primary">Subscribe</button>
          </form>
          {message && <p className="newsletter-message">{message}</p>}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          <details>
            <summary>How do I apply for a job?</summary>
            <p>Click "Apply" on a job listing and follow the instructions. You can apply with your profile or upload a resume.</p>
          </details>
          <details>
            <summary>How can I post a job?</summary>
            <p>Create an employer account, then use "Post a Job" to create a listing with role details and requirements.</p>
          </details>
          <details>
            <summary>Is there a fee to use the portal?</summary>
            <p>Basic browsing and job applications are free. Employers can pay for premium job boosts.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>Mini Job Portal</h4>
            <p>Connecting talent with opportunity.</p>
          </div>
          <nav className="footer-nav">
            <a href="#browse">Browse Jobs</a>
            <a href="#post">Post a Job</a>
            <a href="#faq">Help</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="copyright">© {new Date().getFullYear()} Mini Job Portal</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;</div>
