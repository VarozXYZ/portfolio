import ButtonLink from "./ui/ButtonLink";

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="hero-location-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 12.2A3.2 3.2 0 1 0 12 5.8a3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ContactArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="hero-button-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m13.5 6.5 5.5 5.5-5.5 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function HeroCopy() {
  return (
    <div className="hero-copy">
      <h1 className="hero-title">
        Alvaro R.
        <span>Pizarro</span>
      </h1>

      <div className="hero-intro" aria-label="Professional focus areas">
        <p>Software developer focused on</p>
        <div className="focus-list">
          <p>
            <span className="focus-marker" aria-hidden="true" />
            <span className="focus-text">
              Converting <span className="accent-text">data</span> into valuable{" "}
              <span className="accent-text">information</span>
            </span>
          </p>
          <p>
            <span className="focus-marker" aria-hidden="true" />
            <span className="focus-text">
              <span className="accent-text">Automatization</span> of processes
            </span>
          </p>
          <p>
            <span className="focus-marker" aria-hidden="true" />
            <span className="focus-text">
              Designing <span className="accent-text">UI/UX</span> that users love
            </span>
          </p>
        </div>
      </div>

      <p className="hero-location" aria-label="Location">
        <LocationIcon />
        Seville, Spain
      </p>

      <div className="hero-actions">
        <ButtonLink href="mailto:alvarorodriguezpizarro@gmail.com">
          Get in touch
          <ContactArrowIcon />
        </ButtonLink>
      </div>
    </div>
  );
}
