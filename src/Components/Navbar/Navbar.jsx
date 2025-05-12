import React, { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute("id");
                }
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">GR</div>
                <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a
                            href="#home"
                            className={activeSection === "home" ? "active" : ""}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={activeSection === "about" ? "active" : ""}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={activeSection === "skills" ? "active" : ""}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={activeSection === "projects" ? "active" : ""}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeSection === "contact" ? "active" : ""}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
