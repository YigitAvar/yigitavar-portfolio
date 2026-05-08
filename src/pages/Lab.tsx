import { ArrowRight } from "lucide-react";
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

            {item.path !== "#" ? (
              <Link className="lab-link" to={item.path}>
                Open demo
                <ArrowRight size={16} />
              </Link>
            ) : (
              <span className="lab-link disabled">Coming soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Lab;