import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-highlight">{project.highlight}</span>
        <ArrowUpRight size={18} />
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-impact">
        <span>Impact</span>
        <p>{project.impact}</p>
      </div>

      <div className="project-tech-list">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-footer">
        <span>{project.status}</span>
      </div>
    </article>
  );
}

export default ProjectCard;