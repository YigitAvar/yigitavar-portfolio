import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-container">
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
    </section>
  );
}

export default Projects;