import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

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

      {hasLinks && (
        <div className="project-links">
          {project.liveUrl && (
            <a
              className="project-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}

          {project.repoUrl && (
            <a
              className="project-link"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={15} />
              GitHub
            </a>
          )}
        </div>
      )}

      <div className="project-footer">
        <span>{project.status}</span>
        {project.note && <span className="project-note">{project.note}</span>}
      </div>
    </article>
  );
}

export default ProjectCard;
