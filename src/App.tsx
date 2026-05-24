import PageShell from "./components/PageShell";
import ProjectsPage from "./components/ProjectsPage";
import ResizableNavbar from "./components/ResizableNavbar";

export default function App() {
  const isProjectsPage = window.location.pathname === "/projects";

  return (
    <>
      <ResizableNavbar />
      {isProjectsPage ? <ProjectsPage /> : <PageShell />}
    </>
  );
}
