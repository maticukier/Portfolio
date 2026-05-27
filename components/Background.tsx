export default function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "#02060f" }} />

      {/* Strong blue orb top-left */}
      <div className="absolute" style={{
        top: "-20%", left: "-15%",
        width: "70vw", height: "70vw",
        background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(29,78,216,0.15) 40%, transparent 65%)",
        animation: "orb1 16s ease-in-out infinite alternate",
      }} />

      {/* Cyan orb bottom-right */}
      <div className="absolute" style={{
        bottom: "-15%", right: "-15%",
        width: "65vw", height: "65vw",
        background: "radial-gradient(circle, rgba(6,182,212,0.28) 0%, rgba(8,145,178,0.12) 40%, transparent 65%)",
        animation: "orb2 20s ease-in-out infinite alternate",
      }} />

      {/* Amber accent center-right */}
      <div className="absolute" style={{
        top: "20%", right: "5%",
        width: "30vw", height: "30vw",
        background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 60%)",
        animation: "orb3 24s ease-in-out infinite alternate",
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(96,165,250,0.25) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* Horizontal glow line */}
      <div className="absolute left-0 right-0" style={{
        top: "50%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.15) 30%, rgba(6,182,212,0.2) 50%, rgba(59,130,246,0.15) 70%, transparent)",
      }} />
    </div>
  );
}
