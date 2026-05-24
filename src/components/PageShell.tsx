import BackgroundRippleShowcase, { HeroSection } from "./BackgroundRippleShowcase";
import ExperienceTimeline from "./ExperienceTimeline";

export default function PageShell() {
  return (
    <main className="showcase-shell">
      <BackgroundRippleShowcase />
      <HeroSection />
      <ExperienceTimeline />
    </main>
  );
}
