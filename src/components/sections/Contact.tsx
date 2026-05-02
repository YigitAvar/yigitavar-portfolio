import { Mail, Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const contactLinks = [
  {
    label: "Email",
    value: "yigitavar@hotmail.com",
    href: "mailto:yigitavar@hotmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yigit-avar",
    href: "https://www.linkedin.com/in/yigit-avar",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    label: "GitHub",
    value: "github.com/YigitAvar",
    href: "https://github.com/YigitAvar",
    icon: <FaGithub size={20} />,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-container contact-section">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s build something practical."
        description="I am open to internship, junior developer, full-stack development, and IT infrastructure opportunities."
      />

      <div className="contact-panel">
        <div className="contact-main-card">
          <div className="contact-icon">
            <Send size={24} />
          </div>

          <h3>Have an opportunity or project in mind?</h3>

          <p>
            I am especially interested in software projects that combine backend
            systems, databases, infrastructure awareness, automation, and real
            operational needs.
          </p>

          <a href="mailto:yigitavar@hotmail.com" className="contact-primary-link">
            Send Email
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="contact-links-grid">
          {contactLinks.map((item) => (
            <a
              className="contact-link-card"
              href={item.href}
              key={item.label}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noreferrer"}
            >
              <div className="contact-link-icon">{item.icon}</div>

              <div>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>

              <ArrowRight className="contact-link-arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;