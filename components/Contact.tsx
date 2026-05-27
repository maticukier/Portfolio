import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="rounded-2xl border border-blue-900/40 bg-[#060d1c] p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative">
          <p className="text-xs text-blue-400 tracking-widest uppercase mb-4">
            Let's talk
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
            Open to opportunities
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Whether it's a full-time role, freelance project, or just a
            conversation — I'm happy to connect.
          </p>

          <a
            href="mailto:maticukier1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors font-medium mb-10"
          >
            <Mail size={14} />
            maticukier1@gmail.com
          </a>

          <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/[0.06]">
            <a
              href="https://github.com/maticukier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <span className="text-zinc-800">·</span>
            <a
              href="https://www.linkedin.com/in/matias-cukier-034004230/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-zinc-700 text-xs mt-10">
        © 2026 Matias Cukier — Built with Next.js & Tailwind
      </p>
    </section>
  );
}
