const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
  "AI & Automation": ["Salesforce Agentforce", "n8n", "AI Agents"],
  Tools: ["Git", "GitHub", "Figma", "Postman", "Vercel"],
};

const experience = [
  {
    role: "Salesforce Developer",
    company: "Accenture",
    period: "May 2025 – Present",
    desc: "AI agents & workflow automations for internal Salesforce services.",
    current: true,
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Fiverr",
    period: "Sep 2024 – May 2025",
    desc: "React interfaces and performance optimization for international clients.",
    current: false,
  },
  {
    role: "Web Maintenance Developer",
    company: "Fundación ADOS",
    period: "Nov 2023 – Mar 2025",
    desc: "Website optimization — 40% performance improvement.",
    current: false,
  },
  {
    role: "IT Teacher",
    company: "St. Patrick's School",
    period: "2024",
    desc: "Computer science classes for children aged 6–10.",
    current: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-xs text-blue-400 tracking-widest uppercase mb-3">
          Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white">About</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — bio + experience */}
        <div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
            Full Stack Developer based in Buenos Aires with a strong focus on
            front-end. I build fast, modern web apps and love working at the
            intersection of great UI and smart backend decisions.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10">
            Currently at Accenture building AI agents on Salesforce Agentforce.
            Certified Agentblazer Champion. Started freelancing on Fiverr, then
            moved into full-time AI development — all within two years of
            landing my first developer role.
          </p>

          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">
              Experience
            </p>
            <div className="space-y-5">
              {experience.map((e) => (
                <div key={e.role} className="flex gap-3">
                  <div className="mt-1.5 flex flex-col items-center">
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        e.current ? "bg-blue-500" : "bg-zinc-700"
                      }`}
                    />
                    {!e.current && (
                      <div className="w-px flex-1 bg-zinc-800 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-white font-medium">
                        {e.role}
                      </span>
                      {e.current && (
                        <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                          current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {e.company} · {e.period}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1.5">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — skills */}
        <div>
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-6">
            Technical skills
          </p>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs text-zinc-500 mb-2.5">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full border border-blue-900/40 bg-[#060d1c] text-zinc-300 hover:border-blue-500/30 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">
              Certifications
            </p>
            <div className="space-y-2.5">
              {[
                { name: "Agentblazer Champion", org: "Salesforce · 2025" },
                { name: "Front-End Web Developer", org: "Udemy · 2024" },
                { name: "Cambridge First Certificate B2", org: "English · 2019" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">{c.name}</span>
                  <span className="text-xs text-zinc-600">{c.org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
