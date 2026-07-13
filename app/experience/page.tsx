"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "AI Engineering Intern",
    company: "Orange Maroc",
    period: "Jul 2026 – Sep 2026",
    location: "Casablanca, Morocco • On-site",
    type: "AI Engineering Internship",
    color: "#f97316",
    description:
      "Contributing to the design and development of AI-powered solutions, with a focus on Generative AI, Large Language Models (LLMs), AI Agents, Retrieval-Augmented Generation (RAG), and intelligent automation.",
    highlights: [
      "Develop AI-powered applications using modern AI technologies",
      "Design and integrate LLM-based solutions and AI Agents",
      "Build scalable backend services and REST APIs",
      "Collaborate in an Agile engineering environment",
      "Contribute to real-world AI projects and intelligent automation"
    ],
    tech: [
      "Python",
      "LLMs",
      "RAG",
      "AI Agents",
      "Node.js",
      "REST APIs",
      "Git",
      "Docker"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "OCP Group",
    period: "Jul 2025 – Aug 2025",
    location: "Khouribga, Morocco • On-site",
    type: "Engineering Internship",
    color: "#3b82f6",
    description:
      "Built the Technical Intervention Management Platform — an enterprise system to manage technical interventions across departments with role-based workflows, real-time dashboards, and advanced analytics.",
    highlights: [
      "Role-based auth (NextAuth) with Admin / Manager / Technician roles",
      "Dynamic Chart.js dashboards with department-level analytics",
      "PDF export via jsPDF and Excel export via XLSX",
      "Integrated chatbot assistant for workflow guidance",
      "Intervention tracking with status management & notifications",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "JWT", "Chart.js", "jsPDF", "XLSX", "Git", "UML"],
    link: "https://github.com/AnwarEzzy/intervention-management-app",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "1337 Coding School",
    period: "Feb 2024",
    location: "Khouribga, Morocco • On-site",
    type: "Development Internship",
    color: "#06b6d4",
    description:
      "Developed a full-featured Currency Converter App supporting real-time conversion for all world currencies, with a clean modern UI in React.js and a robust REST API backend in Laravel.",
    highlights: [
      "Real-time currency rates via external financial API",
      "Support for all world currencies with search",
      "Clean responsive UI with Bootstrap",
    ],
    tech: ["React.js", "Laravel", "JavaScript", "Bootstrap", "CSS", "Git"],
    link: "https://github.com/AnwarEzzy/neo-currency-converter",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function ExperiencePage() {
  return (
    <div className="page-in page-section no-scroll-page">
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent)", top: 0, right: 0 }} />

      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">Work Experience</p>
        <h1 className="section-title">Where I&apos;ve Worked</h1>
        <div className="divider" />
      </motion.div>

      <div style={{ maxWidth: 800, position: "relative", overflowY: "auto", flex: 1, paddingRight: "6px", paddingLeft: "4px" }}>
        {/* Timeline line */}
        <div style={{ position: "absolute", left: 20, top: 8, bottom: 8, width: 2, background: "linear-gradient(180deg, #3b82f6, #06b6d4, transparent)", borderRadius: 2 }} />

        {experiences.map((exp, i) => (
          <motion.div key={i} custom={i + 1} initial="hidden" animate="show" variants={fadeUp}
            style={{ display: "flex", gap: 28, marginBottom: 36, paddingLeft: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
              <div className="timeline-dot" style={{ background: `linear-gradient(135deg, ${exp.color}, #06b6d4)`, boxShadow: `0 0 14px ${exp.color}60` }} />
            </div>

            <div className="card" style={{ padding: "24px 28px", flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>{exp.title}</h3>
                    <span style={{ fontSize: "0.65rem", padding: "2px 8px", borderRadius: 99, background: `${exp.color}18`, border: `1px solid ${exp.color}30`, color: exp.color }}>{exp.type}</span>
                  </div>
                  <p style={{ color: exp.color, fontWeight: 600, fontSize: "0.875rem" }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 3, justifyContent: "flex-end" }}>
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--text-sub)", fontSize: "0.75rem", justifyContent: "flex-end" }}>
                    <MapPin size={11} /> {exp.location}
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-sub)", fontSize: "0.855rem", lineHeight: 1.75, marginBottom: 14 }}>{exp.description}</p>

              <ul style={{ marginBottom: 16 }}>
                {exp.highlights.map((h, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "var(--text-sub)", fontSize: "0.8rem", marginBottom: 6 }}>
                    <span style={{ color: "#06b6d4", marginTop: 2, fontSize: "0.7rem" }}>▸</span> {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                {exp.tech.map(t => (
                  <span key={t} style={{
                    padding: "2px 9px", borderRadius: 99, fontSize: "0.7rem",
                    background: `${exp.color}10`, border: `1px solid ${exp.color}25`, color: `${exp.color}bb`
                  }}>{t}</span>
                ))}
              </div>

              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "var(--text-sub)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#60a5fa"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"}>
                  <ExternalLink size={12} /> View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
