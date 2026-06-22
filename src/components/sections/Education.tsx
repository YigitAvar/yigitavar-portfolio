import { GraduationCap, MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

function Education() {
  return (
    <section id="education" className="section-container">
      <SectionTitle eyebrow="Education" title="Academic background." />

      <div className="education-card">
        <div className="education-icon">
          <GraduationCap size={20} />
        </div>

        <div className="education-info">
          <h3>Kadir Has University — B.Sc. Computer Engineering</h3>
          <span className="education-meta">
            2021 – 2026
            <span className="education-location">
              <MapPin size={14} />
              Istanbul, Turkey
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;
