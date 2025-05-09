import { useEffect, useState } from 'react';
import './All.css';

const roles = ["I'm a Web Developer", "I'm a Problem Solver"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const fullText = roles[currentRoleIndex];
    if (typing) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setTyping(true);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentRoleIndex]);

  return (
    <section id="home" className="hero-section">
      <img src="/sid1.jpg" alt="Sudarshan Patil" />

      <p className="subtitle1">Available for hire</p>

      <h1>Hi, I'm <span>Sudarshan Patil</span></h1>

      <div className="typed-role">
        {displayedText}
        <span className="cursor">|</span>
      </div>

      <p className="subtitle2">
        Creative Web & Software Developer | Building Engaging & Scalable Solutions with HTML, CSS, JavaScript, Java & Python.
      </p>

      <div className="buttons">
        <a href="#projects"><button>View My Work</button></a>
        <a href="mailto:sudarshanpatil7599@gmail.com"><button>Contact Me</button></a>
      </div>

      <div className="social-icons">
        <a href="https://linkedin.com/in/sudarshan-patil-5581aa292" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Sudarshan00475" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.codechef.com/users/rcp_231106004" aria-label="CodeChef"><i className="fas fa-code"></i></a>
      </div>
    </section>
  );
};

export default Hero;
