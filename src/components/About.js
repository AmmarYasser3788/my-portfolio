import React, { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter span");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 35);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        👤 About <span className="gradient-underline">Me</span>
      </h2>

      {/* Top Flex Layout */}
      <div className="about-top">
        {/* Left Text */}
        <div className="about-text">
          <h3>Frontend Developer with Passion</h3>
          <p>
            I'm a Frontend Developer based in Cairo, Egypt. I enjoy building clean, responsive web apps using React and modern CSS.
          </p>
          <p>
            I focus on user experience, performance, and accessible design. I'm always learning new things and improving my skills.
          </p>
          <p>
            Whether it's crafting UIs, writing scalable code, or collaborating on a team, I care deeply about quality and results.
          </p>
        </div>

        {/* Right Feature Cards */}
        <div className="about-cards">
          <div className="card">
            <span>💻</span>
            <h4>Clean Code</h4>
            <p>Writing scalable and maintainable code.</p>
          </div>
          <div className="card">
            <span>🎨</span>
            <h4>UI/UX Focus</h4>
            <p>Designing intuitive and beautiful interfaces.</p>
          </div>
          <div className="card">
            <span>⚡</span>
            <h4>Performance</h4>
            <p>Optimizing speed and smooth experience.</p>
          </div>
          <div className="card">
            <span>🎯</span>
            <h4>Quality Driven</h4>
            <p>Delivering reliable, tested code every time.</p>
          </div>
        </div>
      </div>

      {/* Bottom Counters */}
     {/* Counters (outside cards) */}
  <div className="about-counters">
    <div className="counter">
      <div className="emoji">🚀</div>
      <span data-target="10">0</span>+
      <p>Projects Completed</p>
    </div>
    <div className="counter">
      <div className="emoji">😊</div>
      <span data-target="100">0</span>%
      <p>Customer Satisfaction</p>
    </div>
    <div className="counter">
      <div className="emoji">🛠️</div>
      <span data-target="5">0</span>+
      <p>Technologies Mastered</p>
    </div>
    <div className="counter">
      <div className="emoji">📜</div>
      <span data-target="20">0</span>+
      <p>Certificates</p>
    </div>
    <div className="counter">
      <div className="emoji">☕</div>
      <span data-target="97">0</span>+
      <p>Coffee Cups</p>
    </div>
  </div>
    </section>
  );
}

export default About;
