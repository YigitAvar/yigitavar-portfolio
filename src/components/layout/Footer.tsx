import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#" className="footer-logo">
          Yiğit<span>Avar</span>
        </a>

        <p>
          Built with React, TypeScript and Vite. Designed as a personal engineering
          portfolio for software, infrastructure and data-driven systems.
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-socials">
          <a href="https://github.com/YigitAvar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>

          <a href="https://www.linkedin.com/in/yigit-avar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={18} />
          </a>

          <a href="mailto:yigitavar@hotmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <a href="#" className="back-to-top">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;