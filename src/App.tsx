import { useEffect, useState } from "react";
import PageShell from "./components/PageShell";
import ProjectsPage from "./components/ProjectsPage";
import ResizableNavbar from "./components/ResizableNavbar";

function getCurrentPath() {
  return window.location.pathname;
}

function getCurrentSection() {
  const sections = ["top", "experience", "projects", "stack"]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => Boolean(section));
  const headerOffset = 96;
  let current: HTMLElement | undefined;

  for (let index = sections.length - 1; index >= 0; index -= 1) {
    const section = sections[index];

    if (section.getBoundingClientRect().top <= headerOffset) {
      current = section;
      break;
    }
  }

  return current ?? sections[0];
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath);
  const isProjectsPage = path === "/projects";

  useEffect(() => {
    const handleLocationChange = () => setPath(getCurrentPath());

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("portfolio:navigate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("portfolio:navigate", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (isProjectsPage || !window.location.hash) {
      return;
    }

    const target = document.querySelector(window.location.hash);

    if (!target) {
      return;
    }

    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  }, [isProjectsPage, path]);

  useEffect(() => {
    if (isProjectsPage) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 1150px)");
    let isMobileLayout = mediaQuery.matches;
    let resizeFrame = 0;

    const realignCurrentSection = () => {
      const nextIsMobileLayout = mediaQuery.matches;

      if (nextIsMobileLayout === isMobileLayout) {
        return;
      }

      isMobileLayout = nextIsMobileLayout;
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        const currentSection = getCurrentSection();

        if (!currentSection) {
          return;
        }

        const headerOffset = nextIsMobileLayout ? 104 : 96;
        const targetTop =
          currentSection.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "auto",
        });
      });
    };

    window.addEventListener("resize", realignCurrentSection);

    return () => {
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", realignCurrentSection);
    };
  }, [isProjectsPage]);

  return (
    <>
      <ResizableNavbar />
      {isProjectsPage ? <ProjectsPage /> : <PageShell />}
    </>
  );
}
