import { useEffect, useState } from "react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
];

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
      aria-label="Go to top"
    >
      <img src="/arp-logo-blanco.svg" alt="" className="h-15 w-15" />
    </a>
  );
}

export default function ResizableNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 32);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={[
          "mx-auto flex h-16 items-center justify-between border border-white/10 bg-black/45 px-4 text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300",
          isScrolled
            ? "max-w-4xl rounded-full border-white/15 bg-black/70"
            : "max-w-6xl rounded-2xl",
        ].join(" ")}
        aria-label="Primary navigation"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Contact
          </a>
          <a
            href="https://github.com/"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                isMobileOpen ? "translate-y-1.5 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition",
                isMobileOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-3 h-0.5 w-5 bg-current transition",
                isMobileOpen ? "-translate-y-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      <div
        className={[
          "mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/75 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMobileOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm text-white/80"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://github.com/"
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
                onClick={() => setIsMobileOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
