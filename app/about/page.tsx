"use client";

import { motion } from "framer-motion";
import { GraduationCap, Map, Languages, Cpu, BookOpen, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
};

const stats = [
  { icon: Cpu, value: "10+", label: "Projects Built" },
  { icon: Award, value: "15+", label: "Certifications" },
  { icon: GraduationCap, value: "3", label: "Internships" },
  { icon: Languages, value: "3", label: "Languages" },
];

const langs = [
  { lang: "Arabic", level: "Native", pct: 100, color: "#3b82f6" },
  { lang: "French", level: "Fluent", pct: 70, color: "#06b6d4" },
  { lang: "English", level: "Fluent", pct: 90, color: "#8b5cf6" },
];

const education = [
  {
    school: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI)",
    degree: "IT Engineering — Computer Science",
    period: "2024 – 2027 (ongoing)",
    subjects: "Networks · PL/SQL · ML · IoT · Big Data · BI · .NET · Oracle · C/C++/Java · Cypher · OOP · Embedded Systems · Multi-agent Systems",
    icon: "🏛️",
  },
  {
    school: "Specialized Institute of Applied Technology NTIC",
    degree: "Specialized Technician Diploma — Full-Stack Web Dev",
    period: "2022 – 2024",
    subjects: "Django · Laravel · React · UML · Merise · Agile/Scrum · SonarQube · Postman · GitLab · JIRA",
    icon: "🎓",
  },
];

export default function AboutPage() {
  return (
    <div className="page-in page-section no-scroll-page">
      {/* Orbs */}
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent)", top: 0, right: 0 }} />

      {/* Header */}
      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">About Me</p>
        <h1 className="section-title">Who I Am</h1>
        <div className="divider" />
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 1000, overflowY: "auto", flex: 1, paddingRight: "6px" }}>
        {/* Bio */}
        <div>
          <motion.div custom={1} initial="hidden" animate="show" variants={fadeUp}>
            <p style={{ color: "var(--text-sub)", lineHeight: 1.8, marginBottom: 18, fontSize: "0.95rem" }}>
              I&apos;m a Computer Engineering student at{" "}
              <span style={{ color: "#60a5fa", fontWeight: 600 }}>EMSI</span> with a strong passion for Artificial Intelligence and Software Engineering. I enjoy designing intelligent, scalable, and user-centric applications that combine modern software engineering with AI-driven solutions.
            </p>
            <p style={{ color: "var(--text-sub)", lineHeight: 1.8, marginBottom: 18, fontSize: "0.95rem" }}>
              My journey began with <span style={{ color: "var(--text)", fontWeight: 600 }}>Full-Stack Development</span> and has evolved toward  <span style={{ color: "#60a5fa", fontWeight: 600 }}>AI Engineering</span>, where I focus on building intelligent systems powered by Machine Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Agents. I enjoy transforming complex challenges into practical, reliable, and impactful applications.
            </p>
            <p style={{ color: "var(--text-sub)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              I believe great software is not only functional but also intelligent, scalable, and built to solve real-world problems. My goal is to create AI-powered products that deliver meaningful value while continuously learning and embracing emerging technologies.
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp}>
            <div style={{ marginTop: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <Languages size={14} color="var(--text-muted)" />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Languages</span>
              </div>
              {langs.map(l => (
                <div key={l.lang} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text)" }}>{l.lang}</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{l.level}</span>
                  </div>
                  <div style={{ height: 5, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${l.pct}%` }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      style={{ height: "100%", background: `linear-gradient(90deg, ${l.color}, rgba(6,182,212,0.8))`, borderRadius: 3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Stats + Education */}
        <div>
          {/* Stats grid */}
          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="card" style={{ padding: 20, textAlign: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                    <Icon size={16} color="#60a5fa" />
                  </div>
                  <p className="counter-val">{value}</p>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 4 }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <BookOpen size={14} color="var(--text-muted)" />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Education</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {education.map((edu, i) => (
                <div key={i} className="card" style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontSize: "1.4rem" }}>{edu.icon}</span>
                    <div>
                      <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.85rem", lineHeight: 1.3, marginBottom: 3 }}>{edu.school}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 3 }}>{edu.degree}</p>
                      <p style={{ color: "#3b82f6", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace", marginBottom: 8 }}>{edu.period}</p>
                      <p style={{ color: "var(--text-sub)", fontSize: "0.7rem", lineHeight: 1.6 }}>{edu.subjects}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
