import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav">
                <div className="container">
                    <a className="navbar-brand text-white">My Resume</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto items">
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#personal-info">Personal Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#languages">Languages</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
