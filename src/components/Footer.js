import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ammar Yasser. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:your.email@example.com" aria-label="Email">
            📧
          </a>
          <a href="https://github.com/AmmarYasser3788" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            🐱‍💻
          </a>
          <a href="https://www.linkedin.com/in/ammar-yasser-682132282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            💼
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
