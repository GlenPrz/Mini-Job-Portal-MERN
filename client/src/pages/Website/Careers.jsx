import React from 'react';
import './CareersPage.css';

const CareersPage = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'Build and maintain user-facing features using React.'
    },
    {
      title: 'Backend Engineer',
      location: 'Manila, Philippines',
      description: 'Design and implement scalable backend services.'
    },
    {
      title: 'UX Designer',
      location: 'Singapore',
      description: 'Create intuitive and engaging user experiences.'
    }
  ];

  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>Join Our Team</h1>
        <p>Explore exciting career opportunities with us!</p>
      </header>

      <section className="job-listings">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </section>

      <footer className="careers-footer">
        <p>For inquiries, email us at <a href="mailto:careers@example.com">careers@example.com</a></p>
      </footer>
    </div>
  );
};

export default CareersPage;