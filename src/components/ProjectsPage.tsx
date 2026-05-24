import BackgroundRippleShowcase from "./BackgroundRippleShowcase";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="showcase-shell projects-page">
      <BackgroundRippleShowcase />
      <section className="all-projects-section" aria-labelledby="all-projects-title">
        <div className="section-heading">
          <h1 id="all-projects-title">All Projects</h1>
          <span aria-hidden="true" />
        </div>

        <div className="projects-grid projects-grid-all">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
