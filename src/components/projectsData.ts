export type Technology = {
  name: string;
  icon: string;
  invert?: boolean;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  href?: string;
  liveHref?: string;
  image?: string;
  imageAspectRatio?: string;
  badge?: string;
  private?: boolean;
  stack: Technology[];
  featured?: boolean;
  preview: "terminal" | "dashboard" | "docs" | "chart" | "game" | "landing";
};

export const tech = {
  css: { name: "CSS", icon: "/tech/css3.svg" },
  django: { name: "Django", icon: "/tech/django.svg" },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
  express: { name: "Express", icon: "/tech/expressjs.svg" },
  go: { name: "Go", icon: "/tech/go.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
  latex: { name: "LaTeX", icon: "/tech/tex.svg" },
  mongodb: { name: "MongoDB", icon: "/tech/mongodb.svg" },
  nextjs: { name: "Next.js", icon: "/tech/nextjs.svg" },
  nodejs: { name: "Node.js", icon: "/tech/nodejs.svg" },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  pydantic: {
    name: "Pydantic",
    icon: "https://api.iconify.design/simple-icons/pydantic.svg?color=%23e92063",
  },
  pytest: { name: "Pytest", icon: "/tech/pytest.svg" },
  python: { name: "Python", icon: "/tech/python.svg" },
  react: { name: "React", icon: "/tech/react.svg" },
  sqlite: { name: "SQLite", icon: "/tech/sqlite.svg" },
  supabase: { name: "Supabase", icon: "/tech/supabase.svg" },
  tailwind: { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  vercel: { name: "Vercel", icon: "/tech/vercel.svg" },
  viem: { name: "Viem", icon: "https://viem.sh/logo-light-hug.svg", invert: true },
  vite: { name: "Vite", icon: "/tech/vitejs.svg" },
} satisfies Record<string, Technology>;

export const projects: Project[] = [
  {
    title: "Didactio",
    period: "2026",
    description:
      "Educational platform powered by AI. Generates personalized learning units, exercises and feedback.",
    href: "https://github.com/VarozXYZ/didactio",
    image: "/didactio.png",
    imageAspectRatio: "16 / 9",
    stack: [
      tech.react,
      tech.typescript,
      tech.tailwind,
      tech.mongodb,
      tech.nodejs,
      tech.express,
      tech.docker,
      tech.vite,
      tech.vercel,
    ],
    featured: true,
    preview: "dashboard",
  },
  {
    title: "Public Tender Analyzer",
    period: "2026",
    description:
      "Private system that fetches and analyzes public procurement opportunities tailored to a company profile.",
    private: true,
    stack: [
      tech.python,
      tech.pydantic,
      tech.postgresql,
      tech.docker,
      tech.pytest,
    ],
    featured: true,
    preview: "chart",
  },
  {
    title: "Client Hub",
    period: "2026",
    description:
      "Private React platform to manage clients, website maintenance work, and automated reporting.",
    private: true,
    stack: [
      tech.react,
      tech.typescript,
      tech.tailwind,
      tech.nodejs,
      tech.express,
      tech.docker,
      tech.vite,
      tech.sqlite,
      tech.latex,
    ],
    featured: true,
    preview: "terminal",
  },
  {
    title: "Quant trading systems",
    period: "2024-2025",
    description:
      "Private arbitrage and market-making systems across blockchain networks and centralized exchanges.",
    private: true,
    stack: [tech.typescript, tech.nodejs, tech.viem, tech.go],
    preview: "chart",
  },
  {
    title: "Runaterra Archive",
    period: "2026",
    description:
      "Interactive wiki project around League of Legends data and content exploration.",
    href: "https://github.com/VarozXYZ/wiki-league-of-legends",
    image: "/runaterra-archive.png",
    imageAspectRatio: "16 / 10",
    stack: [tech.python, tech.django, tech.css, tech.sqlite],
    preview: "docs",
  },
  {
    title: "Fury of Thor",
    period: "2025",
    description:
      "Game-oriented web project focused on interactive UI and playful front-end behavior.",
    href: "https://github.com/VarozXYZ/fury-of-thor",
    liveHref: "https://fury-rouge.vercel.app/",
    image: "/fury-of-thor.png",
    imageAspectRatio: "86 / 50",
    stack: [tech.javascript, tech.css, tech.nodejs],
    preview: "game",
  },
  {
    title: "Summer",
    period: "2026",
    badge: "Work in progress",
    description:
      "A Google Chrome extension that can summarize Google Drive video files using AI.",
    href: "https://github.com/VarozXYZ/summer",
    stack: [tech.typescript, tech.supabase, tech.nextjs, tech.nodejs],
    preview: "landing",
  },
];
