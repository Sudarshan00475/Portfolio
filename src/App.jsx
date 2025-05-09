import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from './components/ThemeContext.jsx';


function App() {

  return (
    <ThemeProvider>
      <Nav />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
