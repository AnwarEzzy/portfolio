"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Engineering Intern",
    company: "OCP Group",
    period: "Jul 2025 – Aug 2025",
    location: "Khouribga, Morocco • On-site",
    description:
      "Built the Technical Intervention Management Platform — an enterprise system to manage technical interventions across departments with role-based workflows, real-time dashboards, and advanced analytics.",
    highlights: [
      "Role-based auth (NextAuth) with Admin/Manager/Technician roles",
      "Dynamic dashboards with Chart.js visualization",
      "PDF/Excel export via jsPDF and XLSX libraries",
      "Integrated chatbot assistant for workflow guidance",
      "Intervention tracking with status management & notifications",
    ],
    tech: [
      "React.js", "Next.js", "Tailwind CSS", "PostgreSQL",
      "Prisma ORM", "JWT", "Chart.js", "Git", "GitHub", "UML",
    ],
    color: "blue",
    link: "https://github.com/AnwarEzzy/intervention-management-app",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "1337 Coding School",
    period: "Feb 2024",
    location: "Khouribga, Morocco • On-site",
    description:
      "Developed a full-featured Currency Converter App supporting real-time conversion for all world currencies, with a modern UI built in React.js and a robust Laravel backend.",
    highlights: [
      "Real-time currency conversion via external API",
      "Support for all world currencies",
      "Clean, responsive UI with Bootstrap",
    ],
    tech: ["React.js", "Laravel", "Bootstrap", "JavaScript", "Git"],
    color: "cyan",
    link: "https://github.com/AnwarEzzy/neo-currency-converter",
  },
];

const colorMap: Record<string, { dot: string; border: string; tag: string; tagText: string }> = {
  blue: {
    dot: "bg-blue-500 shadow-blue-500/50",
    border: "border-blue-500/20",
    tag: "bg-blue-500/10 border-blue-500/30",
    tagText: "text-blue-300",
  },
  cyan: {
    dot: "bg-cyan-400 shadow-cyan-400/50",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/10 border-cyan-500/30",
    tagText: "text-cyan-300",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 relative" style={{ background: "#0a0a0f" }}>
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              03 / Experience
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Work Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative pl-10">
            <div className="timeline-line" />

            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <motion.div key={i} variants={itemVariants} className="relative mb-12 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`absolute -left-10 top-1 w-4 h-4 rounded-full ${c.dot} shadow-lg border-2 border-[#0a0a0f]`}
                  />

                  <div
                    className={`glass-card rounded-2xl p-6 border ${c.border} hover:border-opacity-40 transition-all`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="text-lg font-bold text-white mb-0.5"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="mb-4 space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2 py-0.5 rounded-full border ${c.tag} ${c.tagText}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={12} />
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
