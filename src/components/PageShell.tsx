import BackgroundRippleShowcase, { HeroSection } from "./BackgroundRippleShowcase";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsSection from "./ProjectsSection";

export default function PageShell() {
  return (
    <main className="showcase-shell">
      <BackgroundRippleShowcase />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsSection />
    </main>
  );
}
