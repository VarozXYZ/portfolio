import { useEffect, useState } from "react";
import PageShell from "./components/PageShell";
import ProjectsPage from "./components/ProjectsPage";
import ResizableNavbar from "./components/ResizableNavbar";

function getCurrentPath() {
  return window.location.pathname;
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

  return (
    <>
      <ResizableNavbar />
      {isProjectsPage ? <ProjectsPage /> : <PageShell />}
    </>
  );
}
