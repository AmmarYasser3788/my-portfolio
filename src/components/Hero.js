import React from 'react';
import './Hero.css';

function Hero() {
  // 💡 Fast scroll function
  const fastScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startY = window.pageYOffset;
    const endY = target.offsetTop;
    const distance = endY - startY;
    const duration = 200; // milliseconds — fast!

    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startY + distance * percent);
      if (percent < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };
  return (
    <section className="hero" id="home">
      <div className="avatar">
        <div className="avatar-inner">AY</div>
      </div>
      <h1>
        <span className="name-dark">Ammar</span> <br />
        <span className="name-colored">Yasser</span>
      </h1>
      <p className="location">
        <i className="fas fa-map-marker-alt"></i> New Cairo, Egypt
      </p>
      <h3>Frontend Developer & Software Engineer</h3>
      <p className="description">
        Passionate about building fast, elegant web applications using modern technologies. Specialized in React, JavaScript, and building integrated frontend-backend solutions
      </p>
      <div className="hero-buttons">
        <button
          onClick={() => fastScrollTo("contact")}
          className="btn primary"
        >
          Get in Touch
        </button>
        <a href="/Ammar-Yasser-CV.pdf" className="btn secondary" download="Ammar-Yasser-CV.pdf" >
          Download CV
        </a>
      </div>
    </section>

  );
}

export default Hero;
