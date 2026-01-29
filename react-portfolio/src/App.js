import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Dark Mode Toggle */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* HERO */}
      <header className="hero">
        <h1>Hi, I’m <span>Abhirami Sanal</span></h1>
        <p>React Developer • Frontend Enthusiast</p>
        <a href="#projects" className="btn">View My Work</a>
      </header>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate React developer focused on building modern,
          responsive, and user-friendly web applications. I enjoy turning
          ideas into real-world projects that make a difference. My goal is
          to write clean, efficient code while constantly learning new
          technologies.
        </p>
        <p>
          I have experience with React, JavaScript, HTML, CSS, and modern
          frontend tools. I love collaborating with other developers and
          designers to create seamless user experiences. I am always excited
          to take on new challenges and improve my skills to build innovative
          and scalable web applications.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>HTML + CSS Portfolio</h3>
            <p>My first portfolio project using HTML and CSS, showcasing my early web development skills.</p>
          </div>
          <div className="card">
            <h3>React Portfolio</h3>
            <p>A modern, responsive portfolio website built with React.js to display my projects and skills.</p>
          </div>
          <div className="card">
            <h3>Internship Assignments</h3>
            <p>Completed assignments and small projects during my internship, improving my coding and problem-solving skills.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: <b>abhisanal50@gmail.com</b></p>
        <p>
          GitHub: 
          <a href="https://github.com/abhiramihub" target="_blank" rel="noreferrer">
            abhiramihub
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Abhirami Sanal | React Portfolio
      </footer>
    </div>
  );
}

export default App;
