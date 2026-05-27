import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 border border-white/[0.06] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Buenos Aires, Argentina
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-3">
            Matias Cukier
          </h1>

          <p className="text-2xl sm:text-3xl font-medium text-blue-400 mb-6">
            Full Stack Developer
          </p>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            Building fast, modern web apps and AI integrations with React, Next.js & TypeScript. Currently at{" "}
            <span className="text-zinc-300">Accenture</span>, developing AI agents on Salesforce Agentforce.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors font-medium">
              View my work
            </a>
            <a href="https://github.com/maticukier" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white text-sm rounded-full transition-all">
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex justify-center lg:justify-end shrink-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute -inset-1 rounded-full border border-amber-400/20" />
            <div className="absolute -inset-2 rounded-full border border-blue-500/10" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30">
              <Image src="/avatar.png" alt="Matias Cukier" fill className="object-cover object-top" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#060d1c] border border-blue-500/20 rounded-full px-3 py-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-zinc-400">@ Accenture</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-2 text-zinc-600 text-xs">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        scroll
      </div>
    </section>
  );
}
