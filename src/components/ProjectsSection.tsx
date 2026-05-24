import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Projects</h2>
        <span aria-hidden="true" />
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}

        <a className="more-projects-card" href="/projects">
          <span aria-hidden="true">+</span>
          <strong>More Projects</strong>
          <small>Explore all my work</small>
        </a>
      </div>
    </section>
  );
}
