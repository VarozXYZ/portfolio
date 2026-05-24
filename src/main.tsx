import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BackgroundRippleShowcase from "./components/BackgroundRippleShowcase";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundRippleShowcase />
  </StrictMode>,
);
