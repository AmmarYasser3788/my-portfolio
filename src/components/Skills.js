import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const frontendSkills = [
  { name: "React", percent: 90 },
  { name: "TypeScript", percent: 85 },
  { name: "JavaScript", percent: 95 },
  { name: "HTML5", percent: 95 },
  { name: "CSS3", percent: 90 },
  { name: "Tailwind CSS", percent: 85 },
];

const toolsSkills = [
  { name: "Git", percent: 80 },
  { name: "Flutter", percent: 95 },
  { name: "Node.js", percent: 80 },
  { name: "Responsive UI", percent: 90 },
];

function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderSkillCard = (title, skillsArray) => (
    <div className="skills-card">
      <h3>{title}</h3>
      {skillsArray.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-title">
            {skill.name} <span>{skill.percent}%</span>
          </div>
          <div className="skill-bar">
            <div
              className={`skill-bar-inner ${inView ? "animate" : ""}`}
              style={inView ? { width: `${skill.percent}%` } : {}}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="section-title">
        🧠 My <span className="gradient-underline">Skills</span>
      </h2>

      <div className="skills-cards-container">
        {renderSkillCard("Frontend Skills", frontendSkills)}
        {renderSkillCard("Tools & Frameworks", toolsSkills)}
      </div>
      {/* Certificates Section */}
<div className="certificates-section">
  <h3 className="certificates-title">📜 Certifications</h3>
  <div className="certificates-grid">
    <div className="certificate-card">
      <h4>Flutter and Dart: Developing iOS, Android, and Mobile Apps</h4>
      <p>IBM · 2025</p>
    </div>
    <div className="certificate-card">
      <h4>React Basics</h4>
      
      <p>Meta · 2025</p>
    </div>
    <div className="certificate-card">
      <h4>Python for Data Science, AI & Development</h4>
      <p>IBM · 2023</p>
    </div>
    <div className="certificate-card">
      <h4>Advanced React</h4>
      <p>Meta · 2025</p>
    </div>
    {/* Add more as needed */}
  </div>
</div>

    </section>
  );
}

export default Skills;
