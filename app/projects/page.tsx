"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    emoji: "🔴", title: "NeoFraud Sentinel", period: "Nov 2025 – Jan 2026", featured: true,
    description: "Intelligent fraud detection platform leveraging Isolation Forest and Neo4j graph analytics to detect anomalous financial transactions and uncover hidden relationships between users, devices, IPs, and merchants.",
    highlights: ["Interactive fraud analytics dashboard", "Isolation Forest anomaly detection", "Neo4j Graph Explorer", "RBAC: Admin / Analyst / Agent"],
    tech: ["Neo4j", "Machine Learning", "Isolation Forest", "Node.js", "React.js", "Cypher", "JWT", "Recharts"],
    github: "https://github.com/AnwarEzzy/NeoFraud-Sentinel", color: "#ef4444",
    image: "/neofraud.png"
  },
  {
    emoji: "🔧", title: "Technical Intervention Management", period: "Jul – Aug 2025", featured: true,
    description: "Enterprise platform for OCP Group to manage technical interventions across departments with role-based workflows, analytics dashboards, and document exports.",
    highlights: ["NextAuth role-based auth", "Chart.js dashboards", "PDF/Excel export", "Chatbot assistant"],
    tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Chart.js", "jsPDF", "XLSX"],
    github: "https://github.com/AnwarEzzy/intervention-management-app", color: "#3b82f6",
    image: "/intervention.png"
  },
  {
    emoji: "🏨", title: "Online Hotel Reservation Platform", period: "Apr – May 2025", featured: false,
    description: "Full-featured hotel booking system with client, hotelier, and admin roles. Includes invoice generation, email confirmation, and reservation management.",
    highlights: ["Multi-role system", "Invoice generation", "Email confirmation", "Full booking lifecycle"],
    tech: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/AnwarEzzy/Hotel-management-app", color: "#8b5cf6",
    image: "/Hotel.png"
  },
  {
    emoji: "👔", title: "ModeMen E-commerce Platform", period: null, featured: false,
    description: "Complete e-commerce platform for men's clothing built with Clean Architecture (DDD). Stripe integration, ASP.NET Core Identity auth, and product variants.",
    highlights: ["DDD / Clean Architecture", "Stripe integration (simulated)", "Product catalog with variants"],
    tech: ["ASP.NET MVC", "Entity Framework Core", "SQL Server", "C#", ".NET"],
    github: "https://github.com/AnwarEzzy/modemen-ecommerce-platform", color: "#6366f1",
    image: "/modemen.png"
  },
  {
    emoji: "📱", title: "Weather Mobile App", period: null, featured: false,
    description: "Advanced mobile weather app with glassmorphism design and real-time meteorological data from external APIs.",
    highlights: ["Real-time weather data", "Glassmorphism UI", "Location-based forecast"],
    tech: ["React Native", "Expo"],
    github: "https://github.com/AnwarEzzy/Weather-Mobile-App", color: "#0ea5e9",
    image: "/weather.png"
  },
  {
    emoji: "🏠", title: "Home Services Platform", period: "Apr – Jun 2024", featured: false,
    description: "Service booking platform for cleaning, maintenance, gardening, and pest control with secure auth and appointment booking.",
    highlights: ["Multi-category booking", "Secure auth", "Appointment scheduling"],
    tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/AnwarEzzy/home-services-app", color: "#10b981",
    image: "/travail a domicile.png"
  },
  {
    emoji: "💱", title: "Currency Converter", period: "Feb 2024", featured: false,
    description: "Real-time currency conversion app supporting all world currencies with a clean, responsive interface.",
    highlights: ["Real-time exchange rates", "All world currencies", "Responsive design"],
    tech: ["React.js", "JavaScript", "Bootstrap", "CSS"],
    github: "https://github.com/AnwarEzzy/neo-currency-converter", color: "#f59e0b",
    image: "/currency converter.png"
  },
  {
    emoji: "🛢️", title: "StationManager", period: null, featured: false,
    description: "Gas station management system for vehicles, fueling operations, staff, and reservoir tracking with secure admin access.",
    highlights: ["Vehicle & fueling tracking", "Staff management", "Reservoir monitoring"],
    tech: ["Laravel", "MySQL", "Eloquent ORM", "Vite"],
    github: "https://github.com/AnwarEzzy/StationManager", color: "#f97316",
    image: "/station manager.png"
  },
  {
    emoji: "📦", title: "Product Management System", period: null, featured: false,
    description: "Full CRUD product catalog with Symfony, Doctrine ORM, Twig templates, flash messages, and Docker support.",
    highlights: ["Full CRUD with Doctrine ORM", "Twig templating", "Docker containerized"],
    tech: ["Symfony 5.4", "PHP", "Doctrine ORM", "Twig", "Docker"],
    github: "https://github.com/AnwarEzzy/product-management-system", color: "#6366f1",
    image: "/product management.png"
  },
  {
    emoji: "🌍", title: "Interactive Translation Game", period: null, featured: false,
    description: "Browser-based gamified language learning tool with 60-second timer, score system, audio feedback, and API-fetched vocabulary.",
    highlights: ["60-second timed game", "Audio feedback", "API vocabulary", "Score tracking"],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "FontAwesome"],
    github: "https://github.com/AnwarEzzy/interactive-translation-game", color: "#14b8a6",
    image: "/translation game.png"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: Math.min(i * 0.07, 0.5), duration: 0.5 } }),
};

export default function ProjectsPage() {
  return (
    <div className="page-in page-section no-scroll-page">
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent)", top: 0, right: 0 }} />

      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">Portfolio</p>
        <h1 className="section-title">Featured Projects</h1>
        <div className="divider" />
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, maxWidth: 1100, overflowY: "auto", flex: 1, paddingRight: "6px" }}>
        {projects.map((p, i) => (
          <motion.div key={i} custom={i + 1} initial="hidden" animate="show" variants={fadeUp}>
            <div className="card" style={{ padding: "0", height: "100%", display: "flex", flexDirection: "column", borderColor: p.featured ? `${p.color}20` : undefined, overflow: "hidden" }}>

              {/* Image Preview */}
              <div style={{ width: "100%", height: 160, position: "relative", borderBottom: "1px solid var(--border)" }}>
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: "fill", opacity: 1 }} />
                ) : (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", opacity: 0.2 }}>
                    {p.emoji}
                  </div>
                )}
                {/* Gradient overlay for blending */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--surface) 0%, transparent 100%)", opacity: 0.2 }} />
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>

                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: "1.5rem" }}>{p.emoji}</span>
                    <div>
                      <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.3 }}>{p.title}</h3>
                      {p.period && <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 2 }}>{p.period}</p>}
                    </div>
                  </div>
                  {p.featured && (
                    <span style={{ fontSize: "0.65rem", padding: "2px 8px", borderRadius: 99, background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)", color: "#fbbf24", flexShrink: 0 }}>★ Featured</span>
                  )}
                </div>

                <p style={{ color: "var(--text-sub)", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: 12, flex: 1 }}>{p.description}</p>

                {/* Highlights */}
                <ul style={{ marginBottom: 14 }}>
                  {p.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 6, color: "var(--text-sub)", fontSize: "0.75rem", marginBottom: 4 }}>
                      <span style={{ color: p.color, marginTop: 1, opacity: 0.8 }}>›</span> {h}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      padding: "2px 9px", borderRadius: 99, fontSize: "0.68rem",
                      background: `${p.color}0c`, border: `1px solid ${p.color}22`, color: `${p.color}bb`
                    }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-sub)", textDecoration: "none", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 12px", transition: "all 0.2s", marginTop: "auto", alignSelf: "flex-start" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                    <Github size={13} /> GitHub
                  </a>
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-sub)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 12px", marginTop: "auto", alignSelf: "flex-start", opacity: 0.7 }}>
                    <Github size={13} /> Private Repo
                  </span>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
