"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certs = [
  {
    title: "AI for You (Learning Path & Assessment)",
    issuer: "Oracle",
    date: "Mar 2026",
    icon: "🤖",
    color: "#f97316",
    featured: true,
  },
  {
    title: "Application of AI in Anomaly Detection",
    issuer: "NVIDIA",
    date: "Mar 2026",
    icon: "🧠",
    color: "#22c55e",
    featured: true,
  },
  {
    title: "Introduction to Cloud Computing, Data & Artificial Intelligence",
    issuer: "Orange Digital Center",
    date: "Apr 2026",
    icon: "🍊",
    color: "#f97316",
    featured: true,
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    date: "Apr 2026",
    icon: "📋",
    color: "#4285F4",
  },
  {
    title: "Introduction to Big Data",
    issuer: "University of California San Diego",
    date: "Apr 2026",
    icon: "📊",
    color: "#2563eb",
  },
  {
    title: "React Native",
    issuer: "Meta",
    date: "Dec 2025",
    icon: "📱",
    color: "#3b82f6",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "Dec 2025",
    icon: "⚛️",
    color: "#06b6d4",
  },
  {
    title: "Software Engineering: Design & Project Management",
    issuer: "HK University of Science & Technology",
    date: "Mar 2025",
    icon: "🏗️",
    color: "#8b5cf6",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "Mar 2025",
    icon: "🐍",
    color: "#10b981",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    issuer: "Board Infinity",
    date: "Mar 2025",
    icon: "🔴",
    color: "#ef4444",
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    date: "Jan 2025",
    icon: "🐧",
    color: "#f59e0b",
  },
  {
    title: "Introduction to OOP in C++",
    issuer: "EPFL",
    date: "Jan 2025",
    icon: "⚙️",
    color: "#6366f1",
  },
  {
    title: "Successful Negotiation: Strategies & Skills",
    issuer: "University of Michigan",
    date: "Jan 2025",
    icon: "🤝",
    color: "#14b8a6",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    date: "Dec 2024",
    icon: "🟨",
    color: "#eab308",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "Nov 2023",
    icon: "💻",
    color: "#10b981",
  },
];

const fadeUp = {
  hidden: { opacity: 0, scale: 0.93 },
  show: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: Math.min(i * 0.06, 0.5), duration: 0.4 } }),
};

export default function CertificationsPage() {
  return (
    <div className="page-in page-section no-scroll-page">
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(245,158,11,0.06), transparent)", top: 0, right: 0 }} />

      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">Credentials</p>
        <h1 className="section-title">Certifications</h1>
        <div className="divider" style={{ marginBottom: "16px" }} />
        <p style={{ color: "var(--text-sub)", fontSize: "0.875rem", marginBottom: 20 }}>
          {certs.length} certifications from top universities and tech companies
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14, maxWidth: 1000, overflowY: "auto", flex: 1, paddingRight: "6px" }}>
        {certs.map((cert, i) => (
          <motion.div key={i} custom={i + 1} initial="hidden" animate="show" variants={fadeUp}>
            <div className="cert-card" style={{
              borderColor: (cert as { featured?: boolean }).featured ? `${cert.color}30` : undefined,
              background: (cert as { featured?: boolean }).featured ? `${cert.color}06` : undefined,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${cert.color}12`, border: `1px solid ${cert.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "var(--text)", fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.35, marginBottom: 4 }}>
                    {cert.title}
                    {(cert as { featured?: boolean }).featured && (
                      <span style={{
                        marginLeft: 6,
                        fontSize: "0.58rem",
                        padding: "1px 6px",
                        borderRadius: 99,
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}30`,
                        color: cert.color,
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontWeight: 500,
                        whiteSpace: "nowrap"
                      }}>
                        ★ Featured
                      </span>
                    )}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginBottom: 6 }}>{cert.issuer}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--text-sub)", fontSize: "0.68rem" }}>
                    <Calendar size={10} /> {cert.date}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
