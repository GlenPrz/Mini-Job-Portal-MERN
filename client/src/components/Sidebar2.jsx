import React from 'react'

const Sidebar2 = () => {
  return (
    <div>
        <nav className="sidebar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/applications">Applications</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
            <style>{`
                .sidebar {
                    width: 220px;
                    background: #222;
                    color: #fff;
                    height: 100vh;
                    padding: 1rem 0;
                    position: fixed;
                    top: 0;
                    left: 0;
                    transition: width 0.3s;
                    z-index: 100;
                }
                .sidebar ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }s
                .sidebar li {
                    margin: 1rem 0;
                    text-align: center;
                }
                .sidebar a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 1.1rem;
                    display: block;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    transition: background 0.2s;
                }
                .sidebar a:hover {
                    background: #444;
                }
                @media (max-width: 768px) {
                    .sidebar {
                        width: 60px;
                        padding: 1rem 0.2rem;
                    }
                    .sidebar a {
                        font-size: 0.9rem;
                        padding: 0.5rem 0.2rem;
                    }
                    .sidebar li {
                        margin: 0.5rem 0;
                    }
                    .sidebar ul {
                        text-align: left;
                    }
                    .sidebar a::after {
                        content: '';
                    }
                }
                @media (max-width: 480px) {
                    .sidebar {
                        position: relative;
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        padding: 0.5rem 0;
                    }
                    .sidebar ul {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        justify-content: space-around;
                    }
                    .sidebar li {
                        margin: 0;
                    }
                }
            `}</style>
        </nav>
    </div>
  )
}

export default Sidebar2