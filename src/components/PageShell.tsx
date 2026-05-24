import BackgroundRippleShowcase, { HeroSection } from "./BackgroundRippleShowcase";
import ExperienceTimeline from "./ExperienceTimeline";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";

export default function PageShell() {
  return (
    <main className="showcase-shell">
      <BackgroundRippleShowcase />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <StackSection />
      <Footer />
    </main>
  );
}
