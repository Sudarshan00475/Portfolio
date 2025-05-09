import './All.css';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <a className="navbar-brand fw-bold text-primary" href="#">My Portfolio</a>
          <button className="btn btn-sm theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-nav">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#resume">Resume</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>

          <div className="navbar-icons d-none d-lg-flex gap-3">
            <a href="https://linkedin.com/in/sudarshan-patil-5581aa292" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon-link" /></a>
            <a href="https://github.com/Sudarshan00475" target="_blank" rel="noopener noreferrer"><FaGithub className="icon-link" /></a>
            <a href="tel:+919876543210"><FaPhoneAlt className="icon-link" /></a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column gap-2">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#resume">Resume</a>
            <a className="nav-link" href="#contact">Contact</a>
            <hr />
            <a className="nav-link" href="https://linkedin.com/in/sudarshan-patil-5581aa292" target="_blank"><FaLinkedin /> LinkedIn</a>
            <a className="nav-link" href="https://github.com/Sudarshan00475" target="_blank"><FaGithub /> GitHub</a>
            <a className="nav-link" href="mailto:sudarshanpatil7599@gmail.com"><FaPhoneAlt /> Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
