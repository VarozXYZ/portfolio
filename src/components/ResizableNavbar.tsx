import { useEffect, useState } from "react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Stack", href: "/#stack" },
];

function Logo() {
  const href = "/#top";

  return (
    <a
      href={href}
      className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
      aria-label="Go to top"
      onClick={(event) => handlePageAnchorClick(event, href)}
    >
      <img src="/arp-logo-blanco.svg" alt="" className="h-15 w-15" />
    </a>
  );
}

function ContactIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5.25 7.25 6.75 5.5 6.75-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.7c-2.74.6-3.32-1.17-3.32-1.17-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.31 1.07 2.88.82.09-.64.35-1.07.63-1.32-2.19-.25-4.49-1.09-4.49-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.27 2.72 1.01A9.36 9.36 0 0 1 12 5.97c.84 0 1.68.11 2.47.33 1.89-1.28 2.72-1.01 2.72-1.01.54 1.35.2 2.35.1 2.6.64.69 1.02 1.57 1.02 2.64 0 3.78-2.3 4.61-4.5 4.86.36.31.68.92.68 1.86v2.75c0 .26.18.56.68.47A9.75 9.75 0 0 0 12 2.25Z" />
    </svg>
  );
}

type ActionIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  isScrolled: boolean;
  inverted?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

function ActionIconLink({
  href,
  label,
  children,
  isScrolled,
  inverted = false,
  onClick,
}: ActionIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      onClick={onClick}
      className={[
        "flex h-10 w-10 items-center justify-center border transition-[border-radius,background-color,border-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2",
        isScrolled ? "rounded-full" : "rounded-xl",
        inverted
          ? "border-white bg-white text-black hover:bg-white/85 focus-visible:ring-white/60"
          : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:ring-white/40",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function handlePageAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  afterNavigate?: () => void,
) {
  if (!href.startsWith("/#") || window.location.pathname !== "/") {
    afterNavigate?.();
    return;
  }

  const target = document.querySelector(href.slice(1));

  if (!target) {
    afterNavigate?.();
    return;
  }

  event.preventDefault();
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
  window.history.pushState(null, "", href);
  afterNavigate?.();
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
          "mx-auto flex h-16 items-center justify-between border border-white/10 bg-black/45 px-4 text-white shadow-lg shadow-black/25 backdrop-blur-md transition-[width,border-radius,background-color,border-color] duration-300 ease-out will-change-[width,border-radius]",
          isScrolled
            ? "w-[min(100%,56rem)] rounded-full border-white/15 bg-black/70"
            : "w-[min(100%,72rem)] rounded-2xl",
        ].join(" ")}
        aria-label="Primary navigation"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handlePageAnchorClick(event, item.href)}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ActionIconLink
            href="/#contact"
            label="Get in touch"
            isScrolled={isScrolled}
            onClick={(event) => handlePageAnchorClick(event, "/#contact")}
          >
            <ContactIcon />
          </ActionIconLink>
          <ActionIconLink
            href="https://github.com/"
            label="Open GitHub profile"
            isScrolled={isScrolled}
            inverted
          >
            <GitHubIcon />
          </ActionIconLink>
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
          "mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/75 text-white shadow-lg shadow-black/35 backdrop-blur-md transition-[grid-template-rows,opacity] duration-300 md:hidden",
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
                onClick={(event) =>
                  handlePageAnchorClick(event, item.href, () => setIsMobileOpen(false))
                }
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <ActionIconLink
                href="/#contact"
                label="Get in touch"
                isScrolled={isScrolled}
                onClick={(event) =>
                  handlePageAnchorClick(event, "/#contact", () => setIsMobileOpen(false))
                }
              >
                <ContactIcon />
              </ActionIconLink>
              <ActionIconLink
                href="https://github.com/"
                label="Open GitHub profile"
                isScrolled={isScrolled}
                inverted
                onClick={() => setIsMobileOpen(false)}
              >
                <GitHubIcon />
              </ActionIconLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
