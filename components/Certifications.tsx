"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "React Native",
    issuer: "Coursera",
    date: "Dec 2025",
    icon: "📱",
    color: "blue",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    date: "Dec 2025",
    icon: "⚛️",
    color: "cyan",
  },
  {
    title: "Software Engineering: Design & Project Management",
    issuer: "HK Univ. of Science & Tech",
    date: "Mar 2025",
    icon: "🏗️",
    color: "purple",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "Mar 2025",
    icon: "🐍",
    color: "green",
  },
  {
    title: "Mastering Laravel Framework and PHP",
    issuer: "Board Infinity",
    date: "Mar 2025",
    icon: "🔴",
    color: "red",
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    date: "Jan 2025",
    icon: "🐧",
    color: "orange",
  },
  {
    title: "Introduction to OOP in C++",
    issuer: "EPFL",
    date: "Jan 2025",
    icon: "⚙️",
    color: "indigo",
  },
  {
    title: "Successful Negotiation: Strategies & Skills",
    issuer: "University of Michigan",
    date: "Jan 2025",
    icon: "🤝",
    color: "teal",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    date: "Dec 2024",
    icon: "🟨",
    color: "yellow",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "Nov 2023",
    icon: "💻",
    color: "green",
  },
  {
    title: "AI for You",
    issuer: "Oracle",
    date: "2024",
    icon: "🤖",
    color: "orange",
    featured: true,
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40",
  cyan: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40",
  purple: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40",
  green: "border-green-500/20 bg-green-500/5 hover:border-green-500/40",
  red: "border-red-500/20 bg-red-500/5 hover:border-red-500/40",
  orange: "border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40",
  indigo: "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40",
  teal: "border-teal-500/20 bg-teal-500/5 hover:border-teal-500/40",
  yellow: "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/40",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      className="py-28 px-6 relative"
      style={{ background: "#0d0d14" }}
    >
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              06 / Certifications
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Certifications
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 mb-10 text-sm">
            15+ certifications from top universities and tech companies
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`cert-card glass-card rounded-xl p-4 border ${
                  colorMap[cert.color]
                } transition-all ${cert.featured ? "ring-1 ring-orange-500/30" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-white text-sm font-semibold leading-tight mb-1">
                        {cert.title}
                        {cert.featured && (
                          <span className="ml-1.5 text-xs text-orange-400">★</span>
                        )}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-slate-600 text-xs">
                      <Calendar size={10} />
                      {cert.date}
                    </div>
                  </div>
                  <Award size={14} className="text-slate-600 shrink-0 mt-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
