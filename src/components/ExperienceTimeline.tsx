type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    company: "Atlantic International Tecnologies",
    location: "Seville",
    period: "2025 - Present",
    role: "Web developer",
    highlights: [
      "Developed custom internal applications.",
      "Process automation with artificial intelligence.",
      "Website development for business needs.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    period: "2024 - 2025",
    role: "Software developer",
    highlights: [
      "Developed automated trading software for cryptocurrency markets.",
      "Created tools to monitor and analyze blockchain data.",
    ],
  },
  {
    company: "Global Decibel",
    location: "Remote",
    period: "2021 - 2024",
    role: "SEO specialist and copywriter",
    highlights: [
      "SEO optimization to improve search visibility.",
      "Worked on CSS and Google Ads improvements.",
      "Created content strategies to enhance online presence.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Experience</h2>
        <span aria-hidden="true" />
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <article
            className={[
              "timeline-item",
              index % 2 === 0 ? "timeline-item-left" : "timeline-item-right",
            ].join(" ")}
            key={`${experience.company}-${experience.period}`}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-card-header">
                <h3>{experience.role}</h3>
                <p className="timeline-period">{experience.period}</p>
              </div>
              <p className="timeline-company">
                <span>{experience.company}</span> - {experience.location}
              </p>
              <ul className="timeline-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
