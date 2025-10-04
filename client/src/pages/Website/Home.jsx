import React from "react";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                style={{
                    background: "#4f8cff",
                    color: "#fff",
                    padding: "60px 20px",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                    Welcome to Mini Job Portal
                </h1>
                <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
                    Find your next opportunity or hire the best talent with ease.
                </p>
            </section>

            {/* Cards Section */}
            <section
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "24px",
                    padding: "40px 20px",
                    background: "#f5f7fa",
                }}
            >
                <div
                    style={{
                        background: "#ffb347",
                        color: "#222",
                        flex: "1 1 250px",
                        minWidth: "250px",
                        maxWidth: "320px",
                        padding: "32px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        textAlign: "center",
                    }}
                >
                    <h2>Browse Jobs</h2>
                    <p>Explore a variety of job listings tailored for you.</p>
                </div>
                <div
                    style={{
                        background: "#6ee7b7",
                        color: "#222",
                        flex: "1 1 250px",
                        minWidth: "250px",
                        maxWidth: "320px",
                        padding: "32px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        textAlign: "center",
                    }}
                >
                    <h2>Post a Job</h2>
                    <p>Reach thousands of candidates quickly and easily.</p>
                </div>
                <div
                    style={{
                        background: "#f87171",
                        color: "#fff",
                        flex: "1 1 250px",
                        minWidth: "250px",
                        maxWidth: "320px",
                        padding: "32px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        textAlign: "center",
                    }}
                >
                    <h2>Get Hired</h2>
                    <p>Apply to jobs and get hired by top companies.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;</div>