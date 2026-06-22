import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { fadeInUp, viewportOnce } from "../../lib/motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-container"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <SectionTitle
        eyebrow="Projects"
        title="Selected projects with real technical direction."
        description="These projects represent my focus on full-stack development, infrastructure-oriented systems and data-driven applications."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;