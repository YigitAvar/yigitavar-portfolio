import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { fadeInUp, viewportOnce } from "../../lib/motion";

function Education() {
  return (
    <motion.section
      id="education"
      className="section-container"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
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
    </motion.section>
  );
}

export default Education;
