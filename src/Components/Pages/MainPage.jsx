import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import './MainPage.css'

export default function MainPage() {

    return (
        <>
            <div className="main-content">
                <div className="main-page d-flex align-items-center justify-content-center">
                    <div className="icon-container">
                        <a href="https://github.com/Retsos" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/gewrgios-retsilas-b8787230b/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin className="social-icon" />
                        </a>
                    </div>
                </div>

                <div className="container cont my-5">
                    <section id="personal-info" >
                        <h2 >Personal Information</h2>
                        <p><strong>Name:</strong> Gewrgios Retsilas</p>
                        <p><strong>Email:</strong> GeorgeRets@gmail.com</p>
                        <p><strong>Phone:</strong> +30 6982063181</p>
                    </section>

                    <section id="education" >
                        <h2>Education</h2>
                        <div>
                            <h5>Bachelor in Computer Science and Engineering</h5>
                            <p>
                                Currently studying in the International Hellenic University at Department of Information and Electronic Engineering
                            </p>
                        </div>
                    </section>

                    <section id="skills" className="mb-4">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript, React, Java</li>
                            <li>Bootstrap, JavaFX, Git</li>
                        </ul>
                    </section>

                    <section id="projects" className="mb-4">
                        <h2>Projects</h2>
                        <div>
                            <h4>Completed Projects</h4>
                            <div>
                                <h6>Personal Portfolio</h6>
                                <p>
                                    A fully responsive personal portfolio built using React and Bootstrap.
                                </p>
                            </div>
                            <div>
                                <h6>Monopoly Game</h6>
                                <p>
                                    A desktop game application developed for a university project using the JavaFX library.
                                </p>
                            </div>

                            <div>
                                <h6>Eshop Project</h6>
                                <p>
                                    A custom and fully functional e-shop developed by a team of two. We used React.js for the frontend and Python for the backend.
                                    <a href="https://users.it.teithe.gr/~georrets/Eshop/" className="text-decoration-none ms-2" style={{ color: "blue" }} target="_blank">
                                        Check it out here
                                    </a>
                                </p>
                            </div>

                            <h4>Ongoing Projects</h4>

                            <div>
                                <h6>Employee Management</h6>
                                <p>
                                    An ongoing web application for employee management, built with React and Bootstrap on the frontend and Django on the backend.
                                </p>
                            </div>
                            <div>
                                <h6>ThessInfo</h6>
                                <p>
                                    A location-based app providing specialized information about
                                    Thessaloniki, including air quality and waste management data. It helps users make
                                    informed health decisions and raises environmental awareness, enhancing the
                                    quality of life for city residents.
                                </p>
                            </div>
                        </div>

                        {/* Additional note about backend learning */}
                        <div className="mt-3">
                            <p>
                                Note: I am currently learning backend development to expand my skills and better support full-stack projects.
                            </p>
                        </div>
                    </section>


                    <section id="languages" className="mb-4">
                        <h2>Languages</h2>
                        <ul>
                            <li>Greek (Native)</li>
                            <li>English (B2)</li>
                        </ul>
                    </section>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 George Retsilas - All rights reserved.</p>
                    <p>Personal Portfolio</p>
                </div>
            </footer>
        </>
    )
}