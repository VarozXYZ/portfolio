import type { Project } from "./projectsData";

type ProjectCardProps = {
  project: Project;
};

function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className={`project-preview project-preview-${type}`} aria-hidden="true">
      <div className="project-preview-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-preview-body">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function PrivateProjectPreview() {
  return (
    <div className="project-private-preview" aria-hidden="true">
      <img
        src="https://api.iconify.design/arcticons/privatelock.svg?color=%238b8b8b"
        alt=""
        loading="lazy"
      />
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="project-link-icon"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 1a3 3 0 0 0-3 3v2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1V4a3 3 0 0 0-3-3ZM6 4a2 2 0 1 1 4 0v2H6V4Zm-2 3h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function GitHubLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="project-link-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.51c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.91v2.83c0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LiveDemoIcon() {
  return (
    <svg
      aria-hidden="true"
      className="project-link-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M9 7h8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  function openProject() {
    if (!project.href) {
      return;
    }

    window.open(project.href, "_blank", "noreferrer");
  }

  function handleProjectKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    openProject();
  }

  const cardContent = (
    <>
      {project.private ? (
        <PrivateProjectPreview />
      ) : project.image ? (
        <img
          className="project-image"
          style={{ aspectRatio: project.imageAspectRatio }}
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      ) : (
        <ProjectPreview type={project.preview} />
      )}

      <div className="project-card-body">
        <div>
          <div className="project-title-row">
            <h3>{project.title}</h3>
            {project.badge ? (
              <span className="project-badge">{project.badge}</span>
            ) : null}
          </div>
          <p className="project-period">{project.period}</p>
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-stack" aria-label={`${project.title} technologies`}>
          {project.stack.map((technology) => (
            <span
              className="project-tech"
              data-label={technology.name}
              key={technology.name}
              tabIndex={0}
            >
              <img
                className={technology.invert ? "project-tech-invert" : undefined}
                src={technology.icon}
                alt={technology.name}
                loading="lazy"
              />
            </span>
          ))}
        </div>

        {project.href || project.liveHref ? (
          <div className="project-links">
            {project.href ? (
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                View Project <GitHubLinkIcon />
              </a>
            ) : null}
            {project.liveHref ? (
              <a
                className="project-link project-link-demo"
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Live Demo <LiveDemoIcon />
              </a>
            ) : null}
          </div>
        ) : (
          <span className="project-link project-link-private">
            Private Project <LockIcon />
          </span>
        )}
      </div>
    </>
  );

  if (project.href) {
    return (
      <article
        className="project-card project-card-link"
        role="link"
        tabIndex={0}
        onClick={openProject}
        onKeyDown={handleProjectKeyDown}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <article className="project-card">
      {cardContent}
    </article>
  );
}
