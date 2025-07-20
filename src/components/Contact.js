import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        📬 Get in <span className="gradient-underline">Touch</span>
      </h2>

      <p className="contact-text">
        I'm always open to opportunities, collaborations, or a friendly chat!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <span>📞</span>
          <a href="tel:01120285523">+20 112 028 5523</a> 
        </div>

        <div className="contact-item">
          <span>✉️</span>
          <p>
            <a href="mailto:ammar.abassery@gmail.com">ammar.abassery@gmail.com</a>
          </p>
        </div>

        <div className="contact-item">
          <span>💼</span>
          <p>
            <a href="https://www.linkedin.com/in/ammar-yasser-682132282" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
