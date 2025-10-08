import React from "react";
import '../../styles/website_styles/Home.css'
const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Welcome to Mini Job Portal</h1>
                <p>
                    Find your next opportunity or hire the best talent with ease.
                </p>
            </section>

            {/* Cards Section */}
            <section className="cards-section">
                <div className="card card-browse">
                    <h2>Browse Jobs</h2>
                    <p>Explore a variety of job listings tailored for you.</p>
                </div>
                <div className="card card-post">
                    <h2>Post a Job</h2>
                    <p>Reach thousands of candidates quickly and easily.</p>
                </div>
                <div className="card card-hire">
                    <h2>Get Hired</h2>
                    <p>Apply to jobs and get hired by top companies.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;