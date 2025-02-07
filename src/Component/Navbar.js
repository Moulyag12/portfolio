import React, { useState } from "react";
import './Navbar.css'; 
import { FaBolt, FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope, FaBars, FaTimes,FaBriefcase } from 'react-icons/fa'; 
import { SiHyperskill } from "react-icons/si";

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event, sectionId) => {
        event.preventDefault();  

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setSelectedLink(sectionId); 
        }
        setIsMobileMenuOpen(false); 
    };

    return (
        <div>
            <div className="navbar">
                <span className="navbar-name">
                    <FaBolt className="nav-icon" /> Moulya G
                </span>
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />} 
                </div>
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#home" className={`nav-link ${selectedLink === 'home' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'home')}>
                        <FaHome className="nav-icon" /> Home
                    </a>
                    <a href="#about" className={`nav-link ${selectedLink === 'about' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'about')}>
                        <FaUserAlt className="nav-icon" /> About Me
                    </a>
                    <a href="#skills" className={`nav-link ${selectedLink === 'skills' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'skills')}>
                        <SiHyperskill className="nav-icon" /> Skills
                    </a>
                    <a href="#projects" className={`nav-link ${selectedLink === 'projects' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'projects')}>
                        <FaProjectDiagram className="nav-icon" /> Projects
                    </a>
                    <a href="#experience" className={`nav-link ${selectedLink === 'experience' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'experience')}>
                        <FaBriefcase className="nav-icon" /> Experience
                    </a>
                    <a href="#contact" className={`nav-link ${selectedLink === 'contact' ? 'selected' : ''}`}
                        onClick={(e) => handleScroll(e, 'contact')}>
                        <FaEnvelope className="nav-icon" /> Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
