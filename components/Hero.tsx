import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs border rounded-full px-3 py-1"
              style={{ color: "rgba(96,165,250,0.8)", borderColor: "rgba(59,130,246,0.25)", background: "rgba(37,99,235,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Buenos Aires, Argentina
            </span>
          </div>

          {/* Gradient name */}
          <h1 className="text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight mb-4"
            style={{ background: "linear-gradient(135deg, #fff 30%, #60a5fa 65%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Matias<br />Cukier
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
            <p className="text-lg font-medium" style={{ color: "#60a5fa" }}>
              Full Stack Developer
            </p>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Building fast, modern web apps and AI integrations. React, Next.js & TypeScript. Currently at{" "}
            <span className="text-zinc-200 font-medium">Accenture</span>, developing AI agents on Salesforce Agentforce.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#work"
              className="px-6 py-2.5 text-sm font-medium text-white rounded-full transition-all"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}>
              View my work
            </a>
            <a href="https://www.linkedin.com/in/matias-cukier-034004230/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm text-zinc-300 rounded-full transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/maticukier" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm text-zinc-400 rounded-full transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex justify-center lg:justify-end shrink-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            {/* Glow rings */}
            <div className="absolute -inset-3 rounded-full"
              style={{ border: "1px solid rgba(59,130,246,0.2)", boxShadow: "0 0 30px rgba(37,99,235,0.15)" }} />
            <div className="absolute -inset-6 rounded-full"
              style={{ border: "1px solid rgba(6,182,212,0.1)" }} />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden"
              style={{ border: "2px solid rgba(59,130,246,0.4)", boxShadow: "0 0 40px rgba(37,99,235,0.2)" }}>
              <Image src="/avatar.png" alt="Matias Cukier" fill className="object-cover object-top" priority />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-3 -right-3 rounded-full px-3 py-1.5 flex items-center gap-1.5"
              style={{ background: "#060d1c", border: "1px solid rgba(59,130,246,0.3)", boxShadow: "0 0 12px rgba(37,99,235,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-zinc-300">@ Accenture</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-2 text-xs" style={{ color: "rgba(96,165,250,0.4)" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        scroll
      </div>
    </section>
  );
}
