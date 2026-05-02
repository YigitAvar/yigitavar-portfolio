import { BriefcaseBusiness, MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionTitle
        eyebrow="Experience"
        title="Practical experience across IT operations and software development."
        description="My experience combines enterprise IT infrastructure, backend-oriented development, automation, reporting, and applied engineering projects."
      />

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <article className="experience-timeline-item" key={`${item.role}-${item.company}`}>
            <div className="experience-marker">
              <span>{index + 1}</span>
            </div>

            <div className="experience-card">
              <div className="experience-topline">
                <span className="experience-period">{item.period}</span>
                <span className="experience-location">
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>

              <div className="experience-title-row">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>

                <div className="experience-icon">
                  <BriefcaseBusiness size={20} />
                </div>
              </div>

              <ul>
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;