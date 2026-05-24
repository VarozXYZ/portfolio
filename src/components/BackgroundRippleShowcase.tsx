import HeroCopy from "./HeroCopy";
import PortraitFrame from "./PortraitFrame";
import RippleGrid from "./RippleGrid";

export default function BackgroundRippleShowcase() {
  return (
    <main className="showcase-shell" id="top">
      <section className="hero" aria-label="Background ripple effect">
        <div className="background-stage">
          <RippleGrid />
        </div>

        <div className="hero-content">
          <HeroCopy />
          <PortraitFrame />
        </div>
      </section>
    </main>
  );
}
