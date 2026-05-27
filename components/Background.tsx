export default function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: "#02060f" }} />

      {/* Orb top-left — blue */}
      <div className="absolute rounded-full" style={{
        top: "-15%", left: "-10%",
        width: "60vw", height: "60vw",
        background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 60%)",
        animation: "orb1 18s ease-in-out infinite alternate",
      }} />

      {/* Orb bottom-right — cyan */}
      <div className="absolute rounded-full" style={{
        bottom: "-10%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(8,145,178,0.14) 0%, transparent 60%)",
        animation: "orb2 22s ease-in-out infinite alternate",
      }} />

      {/* Orb center — amber subtle */}
      <div className="absolute rounded-full" style={{
        top: "35%", left: "35%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(180,100,10,0.07) 0%, transparent 60%)",
        animation: "orb3 26s ease-in-out infinite alternate",
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(96,165,250,0.15) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
    </div>
  );
}
