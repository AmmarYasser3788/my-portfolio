import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Digital Transformation Intern",
    company: "Giza Systems",
    duration: "Aug 2023 – Sept 2023",
    bullets: [
      "Developed interactive dashboards and reports using Power BI, enhancing data visualization and business insights.",
      "Automated repetitive business processes and tasks through UiPath, improving workflow efficiency.",
      "Executed data querying, manipulation, and management using SQL, ensuring accurate data handling.",
      "Collaborated with the business intelligence team to support data-driven decisionmaking and strategic planning.",
      "Participated in team meetings and presentations, effectively communicating findings and project progress.",
    ]
  },
 
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        💼 My <span className="gradient-underline"> Experience</span>
      </h2>

      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="circle-dot" />
            <div className="experience-content">
              <h4>{exp.title}</h4>
              <span className="company">{exp.company}</span>
              <span className="duration">{exp.duration}</span>
              <ul className="bullet-list">
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
