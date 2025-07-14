import React from "react";
import './Projects.css';

const projects = [
  {
    name: "E-Commerce app with AI ChatBot",
    image: "/images/Picture1.png", // put your image in public/images
    description: "E-Commerce App for plumbing and electrician using Flutter and Firebase.",
    codeLink: "https://github.com/AmmarYasser3788"
  },
  {
    name: "Pizza Resturant",
    image: "/images/pizza.jpeg",
    description: "A modern online store with cart and payment features Using .Net."
  },
  {
    name: "To Do List App",
    image: "/images/Todolist.jpeg",
    description: "A modern online To Do List Application using React."
  },
];

function Project() {
  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">
        🧩 My <span className="gradient-underline">Projects</span>
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">

              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-button">
                <img src="/images/github.svg" alt="GitHub" />
                Code
              </a>

            </div>
          </div>
        ))}
         

      </div>
      <div className="github-cta">
  <a
    href="https://github.com/AmmarYasser3788"
    target="_blank"
    rel="noopener noreferrer"
    className="view-more-button"
  >
    View More on GitHub →
  </a>
</div>
    </section>
  );
}

export default Project;
