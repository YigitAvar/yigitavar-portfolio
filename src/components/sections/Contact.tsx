import { motion } from "framer-motion";
import { Mail, Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { fadeInUp, viewportOnce } from "../../lib/motion";

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
    href: "https://www.linkedin.com/in/yiğit-avar-567a38299",
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
    <motion.section
      id="contact"
      className="section-container contact-section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <SectionTitle
        eyebrow="Contact"
        title="Let’s build something practical."
        description="I am looking for full-time opportunities in enterprise IT infrastructure and system administration."
      />

      <div className="contact-panel">
        <div className="contact-main-card">
          <div className="contact-icon">
            <Send size={24} />
          </div>

          <h3>Have an opportunity or project in mind?</h3>

          <p>
            My main focus is enterprise IT infrastructure and system administration —
            daily operations, Active Directory, Microsoft 365, and endpoint management.
            I also bring backend development and automation experience that adds value
            on the operational side.
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
    </motion.section>
  );
}

export default Contact;