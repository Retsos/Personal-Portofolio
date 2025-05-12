import React, { useState } from "react";
import { FaGithub, FaCode, FaLaptopCode, FaUserGraduate, FaLanguage } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail, MdPhone, MdOutlineWork } from "react-icons/md";
import './MainPage.css'
import Navbar from "../Navbar/Navbar";


const projectsData = [
    {
        id: 1,
        title: "Recipe Realm",
        description: "A full-featured cross-platform recipe app built with Flutter and Dart, with Firebase Firestore and Supabase Storage.",
        tags: ["Mobile", "Flutter", "Firebase"],
        link: "https://github.com/Retsos/Recipe-Realm"
    },
    {
        id: 2,
        title: "E-shop Project",
        description: "A custom and fully functional e-shop using React.js for the frontend and Python for the backend.",
        tags: ["Web", "React", "Python"],
        link: "https://users.it.teithe.gr/~georrets/Eshop/"
    },
    {
        id: 3,
        title: "Monopoly Game",
        description: "A desktop game application developed for a university project using the JavaFX library.",
        tags: ["Desktop", "Java", "JavaFX"],
        link: "https://github.com/Retsos/MonopolyGame"
    },
    {
        id: 4,
        title: "ThessInfo",
        description: "A location-based app providing specialized information about Thessaloniki, including air quality and waste management data.",
        tags: ["Web", "React", "Python"],
        link: "https://github.com/Retsos/ThessInfo"
    },
];

const categories = ["All", "Web", "Mobile", "Desktop"];

const ModernPortfolio = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = projectsData.filter(proj => {
        if (selectedCategory === "All") return true;
        return proj.tags.includes(selectedCategory);
    });

    return (
        <div className="portfolio-container">
            <Navbar></Navbar>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1>Gewrgios Retsilas</h1>
                    <h2>Computer Science Student & Developer</h2>
                    <div className="hero-social">
                        <a href="https://github.com/Retsos" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/gewrgios-retsilas-b8787230b/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <IoLogoLinkedin />
                        </a>
                    </div>
                    <a href="#contact" className="cta-button">Get in Touch</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <div className="section-container">
                    <div className="section-header">
                        <h2>About Me</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I'm a Computer Science and Engineering student at the International Hellenic University,
                                passionate about creating intuitive and functional web applications. I'm currently
                                expanding my skills in mobile development and backend development to better support full-stack projects.
                            </p>
                            <div className="about-details">
                                <div className="about-detail">
                                    <MdEmail className="detail-icon" />
                                    <p>GeorgeRets@gmail.com</p>
                                </div>
                                <div className="about-detail">
                                    <MdPhone className="detail-icon" />
                                    <p>+30 6982063181</p>
                                </div>
                                <div className="about-detail">
                                    <FaUserGraduate className="detail-icon" />
                                    <p>Computer Science and Engineering Student</p>
                                </div>
                                <div className="about-detail">
                                    <FaLanguage className="detail-icon" />
                                    <p>Greek (Native), English (B2)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
                <div className="section-container">
                    <div className="section-header">
                        <h2>My Skills</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <div className="skill-items">
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>JavaScript</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "55%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>React</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>Bootstrap</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Mobile Development</h3>
                            <div className="skill-items">
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>Flutter</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "35%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>FireStore-FireBasae</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "40%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>SQLite</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "30%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Other Skills</h3>
                            <div className="skill-items">
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>Java</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "35%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>JavaFX</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">
                                        <FaCode />
                                    </div>
                                    <div className="skill-info">
                                        <h4>Git</h4>
                                        <div className="skill-bar">
                                            <div className="skill-level" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <div className="section-container">
                    <div className="section-header">
                        <h2>My Projects</h2>
                        <div className="section-divider"></div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="projects-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid με φιλτραρισμένα projects */}
                    <div className="projects-grid">
                        {filteredProjects.map(proj => (
                            <div key={proj.id} className="project-card">
                                <div className="project-image">
                                    <div className="project-overlay">
                                        <FaLaptopCode className="project-icon" />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{proj.title}</h3>
                                    <p>{proj.description}</p>
                                    <div className="project-tags">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View {proj.title === "E-shop Project" ? "Project" : "Details"}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="section-container">
                    <div className="section-header">
                        <h2>Get In Touch</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <MdEmail className="contact-icon" />
                                <div>
                                    <h3>Email</h3>
                                    <p>GeorgeRets@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <MdPhone className="contact-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <p>+30 6982063181</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <MdOutlineWork className="contact-icon" />
                                <div>
                                    <h3>Social Profiles</h3>
                                    <div className="contact-social">
                                        <a href="https://github.com/Retsos" target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                        <a href="https://www.linkedin.com/in/gewrgios-retsilas-b8787230b/" target="_blank" rel="noopener noreferrer">
                                            <IoLogoLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Gewrgios Retsilas - All rights reserved</p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ModernPortfolio;