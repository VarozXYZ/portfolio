import HeroCopy from "./HeroCopy";
import PortraitFrame from "./PortraitFrame";
import RippleGrid from "./RippleGrid";

export default function BackgroundRippleShowcase() {
  return (
    <div className="background-layer" aria-hidden="true">
      <RippleGrid />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-label="Introductory profile">
      <div className="hero-content">
        <HeroCopy />
        <PortraitFrame />
      </div>
    </section>
  );
}
