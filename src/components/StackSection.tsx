import type { Technology } from "./projectsData";
import { tech } from "./projectsData";

type StackGroup = {
  title: string;
  description: string;
  items: Technology[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, SPAs, styling systems and browser experiences.",
    items: [
      tech.react,
      tech.typescript,
      tech.javascript,
      tech.nextjs,
      tech.vite,
      tech.tailwind,
      tech.css,
    ],
  },
  {
    title: "Backend",
    description: "APIs, server-side applications and integration layers.",
    items: [tech.nodejs, tech.express, tech.python, tech.django, tech.go],
  },
  {
    title: "Data",
    description: "Persistence, validation and structured data workflows.",
    items: [tech.postgresql, tech.mongodb, tech.sqlite, tech.supabase, tech.pydantic],
  },
  {
    title: "DevOps & QA",
    description: "Shipping, containers, deployment and test automation.",
    items: [tech.docker, tech.vercel, tech.pytest],
  },
  {
    title: "Web3",
    description: "Blockchain integrations, trading systems and contract tooling.",
    items: [tech.viem],
  },
  {
    title: "Reporting",
    description: "Document generation and automated client deliverables.",
    items: [tech.latex],
  },
];

function StackIcon({ technology }: { technology: Technology }) {
  return (
    <span className="stack-icon" data-label={technology.name} tabIndex={0}>
      <img
        className={technology.invert ? "project-tech-invert" : undefined}
        src={technology.icon}
        alt={technology.name}
        loading="lazy"
      />
    </span>
  );
}

export default function StackSection() {
  return (
    <section className="stack-section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading">
        <h2 id="stack-title">Stack</h2>
        <span aria-hidden="true" />
      </div>

      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article className="stack-column" key={group.title}>
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className="stack-icons" aria-label={`${group.title} technologies`}>
              {group.items.map((technology) => (
                <StackIcon technology={technology} key={technology.name} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
