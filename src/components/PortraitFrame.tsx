export default function PortraitFrame() {
  return (
    <div className="portrait-shell">
      <div className="portrait-orbit portrait-orbit-back" />
      <div className="portrait-orbit portrait-orbit-front" />
      <div className="portrait-accent portrait-accent-right" />
      <div className="portrait-accent portrait-accent-left" />
      <div className="portrait-dots" />
      <div className="portrait-frame">
        <img
          className="portrait-image"
          src="/arp-picture-bnw.png"
          alt="Portrait of Alvaro R. Pizarro"
        />
      </div>
    </div>
  );
}
