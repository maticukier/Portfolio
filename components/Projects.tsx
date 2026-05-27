import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    name: "Watch The Match",
    tagline: "The Letterboxd of football",
    description:
      "Global platform to log matches you watched, rate them, and track player performance through community podiums. Real product in active beta with real users.",
    stack: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Vercel"],
    live: "https://watchtm.vercel.app",
    github: null,
    star: true,
    highlight: "Clever workaround: GitHub Actions cron every 10min on Vercel Hobby plan.",
  },
  {
    name: "E-Commerce",
    tagline: "Full store prototype",
    description:
      "Web application prototype for an online store. Product catalog, cart functionality, and responsive UI built with React.",
    stack: ["React", "CSS3", "JavaScript"],
    live: null,
    github: "https://github.com/maticukier/E-Commerce",
    star: false,
    highlight: null,
  },
  {
    name: "Weather App",
    tagline: "Real-time weather",
    description:
      "Weather web app integrating with a public weather API to display real-time data with a clean, responsive interface.",
    stack: ["React", "REST API", "CSS3"],
    live: null,
    github: "https://github.com/maticukier/WeatherApp",
    star: false,
    highlight: null,
  },
  {
    name: "TechNews",
    tagline: "Mobile news forum",
    description:
      "Mobile news forum application built with Expo Go. Collaborative project with article browsing and forum features.",
    stack: ["React Native", "Expo", "JavaScript"],
    live: null,
    github: "https://github.com/juanmotok32/ProyectoTecNew",
    star: false,
    highlight: null,
  },
  {
    name: "Burger Web",
    tagline: "Restaurant web app",
    description:
      "Complete web application prototype for a burger company. Full menu, responsive design, and polished UI.",
    stack: ["React", "CSS3", "JavaScript"],
    live: null,
    github: "https://github.com/maticukier/Burger",
    star: false,
    highlight: null,
  },
  {
    name: "60 Days Challenge",
    tagline: "Personal coding challenge",
    description:
      "60 consecutive days of building — a new project or feature every day. A commitment to continuous improvement.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    live: null,
    github: "https://github.com/maticukier/60Days",
    star: false,
    highlight: null,
  },
];

export default function Projects() {
  const [star, ...rest] = projects;

  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-xs text-blue-400 tracking-widest uppercase mb-3">
          Selected work
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white">
          Projects
        </h2>
      </div>

      {/* Star project — large card */}
      <div className="mb-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-[#0e0e18] p-6 sm:p-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star size={14} className="text-blue-400 fill-blue-400" />
              <span className="text-xs text-blue-400 font-medium">
                Star project
              </span>
            </div>
            <h3 className="text-2xl font-medium text-white">{star.name}</h3>
            <p className="text-zinc-400 text-sm mt-0.5">{star.tagline}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            {star.live && (
              <a
                href={star.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors"
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
          {star.description}
        </p>

        {star.highlight && (
          <div className="mb-4 text-xs text-cyan-300 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
            ⚡ {star.highlight}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {star.stack.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Other projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-white/[0.07] bg-[#060d1c] p-5 flex flex-col hover:border-white/[0.12] transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm font-medium text-white">{p.name}</h3>
                <p className="text-xs text-zinc-500 mt-0.5">{p.tagline}</p>
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-300 transition-colors shrink-0"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                </a>
              )}
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
