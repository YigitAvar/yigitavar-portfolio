import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import { labItems } from "../data/labItems";

function Lab() {
  return (
    <section className="section-container lab-page">
      <SectionTitle
        eyebrow="Developer Lab"
        title="A personal space for experiments, tools, and engineering demos."
        description="This area extends the portfolio beyond a CV-style website. It includes UI experiments, technical demos, and small tools built around real software and IT workflows."
      />

      <div className="lab-grid">
        {labItems.map((item) => (
          <article className="lab-card" key={item.title}>
            <div className="lab-card-header">
              <span className={`lab-status ${item.status.toLowerCase().replace(" ", "-")}`}>
                {item.status}
              </span>
              {item.path !== "#" && <ArrowRight size={18} />}
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="lab-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="lab-card-actions">
              {item.path !== "#" ? (
                <Link className="lab-link" to={item.path}>
                  Open demo
                  <ArrowRight size={16} />
                </Link>
              ) : (
                !item.github && (
                  <span className="lab-link disabled">
                    {item.status === "In Progress" ? "In development" : "Coming soon"}
                  </span>
                )
              )}

              {item.github && (
                <a
                  className="lab-link lab-link--github"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Lab;