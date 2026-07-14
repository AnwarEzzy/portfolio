"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, MapPin } from "lucide-react";

const roles = [
  "AI Engineer",
  "LLM & AI Agents Builder",
  "Full-Stack Developer",
  "Problem Solver"
];

function TypingText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 45 : char === current.length ? 1800 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        if (char < current.length) { setDisplay(current.slice(0, char + 1)); setChar(c => c + 1); }
        else setDeleting(true);
      } else {
        if (char > 0) { setDisplay(current.slice(0, char - 1)); setChar(c => c - 1); }
        else { setDeleting(false); setIdx(i => (i + 1) % texts.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [char, deleting, idx, texts]);

  return (
    <span style={{ color: "#06b6d4", fontFamily: "'Space Mono', monospace" }}>
      {display}<span className="cursor" />
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function HomePage() {
  return (
    <div className="page-in" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Background orbs */}
      <div className="bg-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent)", top: "-100px", right: "-100px" }} />
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent)", bottom: "-100px", left: "-50px" }} />

      {/* Grid pattern */}
      <div className="grid-pattern" style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Hero Section */}
      <div className="px-4 md:px-[56px] py-12 md:py-0" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 920, width: "100%" }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-[60px] items-center w-full">
            {/* LEFT: Text */}
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Greeting */}
              <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: "#64748b", marginBottom: 10, letterSpacing: "0.05em" }}>
                Hi there, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1 custom={2} initial="hidden" animate="show" variants={fadeUp}
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.03em" }}>
                Anwar<span className="grad" style={{ marginLeft: "24px" }}>Ezzirani</span>
              </motion.h1>

              {/* Typing */}
              <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp}
                style={{ fontSize: "1.15rem", marginBottom: 20, fontWeight: 400 }}>
                <span style={{ color: "#475569" }}>I&apos;m a </span>
                <TypingText texts={roles} />
              </motion.div>

              {/* Bio */}
              <motion.p custom={4} initial="hidden" animate="show" variants={fadeUp}
                className="mx-auto md:mx-0"
                style={{ color: "#64748b", lineHeight: 1.75, marginBottom: 36, fontSize: "0.95rem", maxWidth: 480 }}>
                Building intelligent software by combining Artificial Intelligence, LLMs, AI Agents, and modern Full-Stack Engineering to solve real-world problems.
              </motion.p>

              {/* CTA */}
              <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp}
                className="flex flex-wrap justify-center md:justify-start gap-3"
                style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="/AEzzirani-Resume.pdf" download="AEzzirani-Resume.pdf" className="btn-primary">
                  <Download size={16} />
                  Download Resume
                </a>
                <Link href="/projects" className="btn-outline">
                  View Projects
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Me
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div custom={6} initial="hidden" animate="show" variants={fadeUp}
                className="flex items-center justify-center md:justify-start gap-4 w-full"
                style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <a href="https://github.com/AnwarEzzy" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}>
                  <Github size={16} /> AnwarEzzy
                </a>
                <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
                <a href="https://www.linkedin.com/in/anwar-ezzirani" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#60a5fa"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}>
                  <Linkedin size={16} /> anwar-ezzirani
                </a>
              </motion.div>
            </div>

            {/* RIGHT: Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 md:order-2 relative justify-self-center w-[140px] h-[140px] md:w-[240px] md:h-[240px] md:-translate-y-10"
            >
              {/* Outer glow ring */}
              <div style={{
                position: "absolute", inset: -3,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6)",
                padding: 3,
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg)" }} />
              </div>

              {/* Avatar */}
              <div className="avatar-glow relative w-full h-full rounded-full overflow-hidden border-[3px] border-transparent" style={{
                background: "linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box",
              }}>
                <Image
                  src="/profile.png"
                  alt="Anwar Ezzirani"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
