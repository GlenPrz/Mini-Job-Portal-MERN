import React from 'react';
import './CareersPage.css';

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    description: 'Build and maintain user-facing features using React.',
    type: 'Full-time',
  },
  {
    title: 'Backend Engineer',
    location: 'Manila, Philippines',
    description: 'Design and implement scalable backend services.',
    type: 'Full-time',
  },
  {
    title: 'UX Designer',
    location: 'Singapore',
    description: 'Create intuitive and engaging user experiences.',
    type: 'Contract',
  },
];

const CareersPage = () => {
  const handleApply = (jobTitle) => {
    window.location.href = `mailto:careers@example.com?subject=Application for ${encodeURIComponent(jobTitle)}`;
  };

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
            <p><strong>Type:</strong> {job.type}</p>
            <p>{job.description}</p>
            <button
              className="apply-button"
              onClick={() => handleApply(job.title)}
              aria-label={`Apply for ${job.title}`}
            >
              Apply Now
            </button>
          </div>
        ))}
        {jobs.length === 0 && (
          <div className="no-jobs">
            <p>No current openings. Please check back soon!</p>
          </div>
        )}
      </section>

      <footer className="careers-footer">
        <p>
          For inquiries, email us at{' '}
          <a href="mailto:careers@example.com">careers@example.com</a>
        </p>
      </footer>
    </div>
  );
};

export default CareersPage;