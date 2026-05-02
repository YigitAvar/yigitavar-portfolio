import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero section-container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            Computer Engineering · IT Infrastructure · Full-Stack
          </span>

            <h1>
            I build full-stack software systems with real infrastructure experience.
            </h1>

            <p>
            Final-year Computer Engineering student focused on enterprise IT, backend
            development, database-backed systems, and modern web applications. I combine
            hands-on infrastructure operations with practical software engineering projects.
            </p>

            <div className="hero-actions">
            <a href="#projects" className="primary-button">
                View Projects
                <ArrowRight size={18} />
            </a>

            <a href="/cv/Yigit_Avar_CV.pdf" className="secondary-button" target="_blank">
                Download CV
            </a>

            <a href="#contact" className="secondary-button">
                Contact Me
            </a>
            </div>

            <div className="hero-socials">
            <a href="https://github.com/YigitAvar" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yigit-avar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
            </a>
            <a href="mailto:yigitavar@hotmail.com" aria-label="Email">
                <Mail size={20} />
            </a>
            </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-card">
          <img src={heroImage} alt="Yiğit Avar portfolio visual" />
        </div>

        <div className="floating-card floating-card-top">
          <strong>React + TypeScript</strong>
          <span>Modern frontend systems</span>
        </div>

        <div className="floating-card floating-card-bottom">
          <strong>IT Operations</strong>
          <span>Microsoft 365 · AD · Endpoint</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;