import { Database, ServerCog, Code2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const aboutCards = [
  {
    icon: <Code2 size={22} />,
    title: "Software Engineering",
    description:
      "I build full-stack applications with React, TypeScript, backend APIs, databases, and structured project workflows.",
  },
  {
    icon: <ServerCog size={22} />,
    title: "Enterprise IT Operations",
    description:
      "I have hands-on experience with Active Directory, Office 365, endpoint setup, domain joining, user support, and IT service workflows.",
  },
  {
    icon: <Database size={22} />,
    title: "Data-Driven Systems",
    description:
      "I work on database-backed systems, reporting workflows, fleet analytics, driver scoring, and anomaly-oriented project development.",
  },
];

function About() {
  return (
    <section id="about" className="section-container about-section">
      <SectionTitle
        eyebrow="About"
        title="A practical engineering profile shaped by software and infrastructure."
        description="I combine software development, enterprise IT operations, and data-driven project experience to build systems that are both technical and usable."
      />

      <div className="about-highlight">
        <div>
          <span className="about-kicker">Current Direction</span>
          <h3>Full-stack development with strong infrastructure awareness.</h3>
        </div>

        <p>
          I am a final-year Computer Engineering student focused on modern web
          applications, backend development, enterprise IT infrastructure, and
          database-backed systems. My practical experience includes daily IT
          operations, Microsoft 365 administration, Active Directory workflows,
          endpoint preparation, and applied software projects.
        </p>
      </div>

      <div className="about-grid-v2">
        {aboutCards.map((card) => (
          <article className="about-feature-card" key={card.title}>
            <div className="about-feature-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;