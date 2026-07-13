"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "🔴",
    title: "NeoFraud Sentinel",
    period: "Nov 2025 – Jan 2026",
    description:
      "Intelligent fraud detection platform leveraging Isolation Forest and Neo4j graph analytics to detect anomalous financial transactions and uncover hidden relationships between users, devices, IPs, and merchants.",
    highlights: [
      "Interactive fraud analytics dashboard",
      "Isolation Forest anomaly detection",
      "Neo4j Graph Explorer",
      "RBAC: Admin / Analyst / Agent",
    ],
    tech: [
      "Neo4j",
      "Machine Learning",
      "Isolation Forest",
      "Node.js",
      "React.js",
      "Cypher",
      "JWT",
      "Recharts",
    ],
    github: "https://github.com/AnwarEzzy/NeoFraud-Sentinel",
    featured: true,
    color: "red",
  },
  {
    emoji: "🔧",
    title: "Technical Intervention Management",
    period: "Jul – Aug 2025",
    description:
      "Enterprise platform for OCP Group to manage technical interventions across departments with role-based workflows, analytics dashboards, and document exports.",
    highlights: [
      "NextAuth role-based authentication",
      "PDF/Excel export with jsPDF & XLSX",
      "Integrated chatbot assistant",
      "Real-time intervention tracking",
    ],
    tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Chart.js", "jsPDF", "XLSX"],
    github: "https://github.com/AnwarEzzy/intervention-management-app",
    featured: true,
    color: "blue",
  },
  {
    emoji: "🏨",
    title: "Online Hotel Reservation Platform",
    period: "Apr – May 2025",
    description:
      "Full-featured hotel booking system with client, hotelier, and admin roles. Includes invoice generation, email confirmation, and reservation management.",
    highlights: [
      "Multi-role system: Client / Hotelier / Admin",
      "Invoice generation & email confirmation",
      "Full booking lifecycle management",
    ],
    tech: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/AnwarEzzy/Hotel-management-app",
    color: "purple",
  },
  {
    emoji: "👔",
    title: "ModeMen E-commerce Platform",
    period: null,
    description:
      "Complete e-commerce platform for men's clothing built with Clean Architecture (DDD). Features product catalog with variants, cart management, and payment simulation.",
    highlights: [
      "Clean Architecture with DDD principles",
      "Stripe integration (simulated), MAD currency",
      "ASP.NET Core Identity authentication",
      "Product variants & cart management",
    ],
    tech: ["ASP.NET MVC", "Entity Framework Core", "SQL Server", "C#", ".NET"],
    github: null,
    color: "indigo",
  },
  {
    emoji: "📱",
    title: "Weather Mobile App",
    period: null,
    description:
      "Advanced mobile weather app with glassmorphism design and real-time meteorological data from external APIs.",
    highlights: [
      "Real-time weather data integration",
      "Glassmorphism UI design",
      "Location-based forecasting",
    ],
    tech: ["React Native", "Expo"],
    github: "https://github.com/AnwarEzzy/Weather-Mobile-App",
    color: "sky",
  },
  {
    emoji: "🏠",
    title: "Home Services Platform",
    period: "Apr – Jun 2024",
    description:
      "Service booking platform for cleaning, maintenance, gardening, and pest control with secure auth and appointment booking.",
    highlights: [
      "Multi-category service booking",
      "Secure authentication flow",
      "Appointment scheduling system",
    ],
    tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/AnwarEzzy/home-services-app",
    color: "green",
  },
  {
    emoji: "💱",
    title: "Currency Converter",
    period: "Feb 2024",
    description:
      "Real-time currency conversion app supporting all world currencies with a clean, responsive interface.",
    highlights: [
      "Real-time exchange rates via API",
      "Support for all world currencies",
      "Responsive mobile-first design",
    ],
    tech: ["React.js", "JavaScript", "Bootstrap", "CSS"],
    github: "https://github.com/AnwarEzzy/neo-currency-converter",
    color: "yellow",
  },
  {
    emoji: "🛢️",
    title: "StationManager",
    period: null,
    description:
      "Gas station management system for vehicles, fueling operations, staff, and reservoir tracking with secure admin access.",
    highlights: [
      "Vehicle & fueling operation tracking",
      "Staff management module",
      "Reservoir level monitoring",
    ],
    tech: ["Laravel", "MySQL", "Eloquent ORM", "Vite"],
    github: "https://github.com/AnwarEzzy/StationManager",
    color: "orange",
  },
  {
    emoji: "📦",
    title: "Product Management System",
    period: null,
    description:
      "Full CRUD product catalog with Symfony, Doctrine ORM, Twig templates, flash messages, and Docker support.",
    highlights: [
      "Full CRUD with Doctrine ORM",
      "Twig templating with flash messages",
      "Dockerized deployment",
    ],
    tech: ["Symfony 5.4", "PHP", "Doctrine ORM", "Twig", "Docker"],
    github: "https://github.com/AnwarEzzy/product-management-system",
    color: "purple",
  },
  {
    emoji: "🌍",
    title: "Interactive Translation Game",
    period: null,
    description:
      "Browser-based gamified language learning tool with 60-second timer, score system, audio feedback, and API-fetched vocabulary.",
    highlights: [
      "60-second timed challenge mode",
      "Audio feedback system",
      "API-fetched vocabulary database",
      "Score leaderboard",
    ],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "FontAwesome"],
    github: "https://github.com/AnwarEzzy/interactive-translation-game",
    color: "teal",
  },
];

const colorMap: Record<string, { border: string; badge: string; badgeText: string; glow: string }> = {
  red: {
    border: "border-red-500/20 hover:border-red-500/40",
    badge: "bg-red-500/10 border-red-500/30 text-red-300",
    badgeText: "text-red-300",
    glow: "hover:shadow-red-500/10",
  },
  blue: {
    border: "border-blue-500/20 hover:border-blue-500/40",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    badgeText: "text-blue-300",
    glow: "hover:shadow-blue-500/10",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-500/40",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    badgeText: "text-purple-300",
    glow: "hover:shadow-purple-500/10",
  },
  indigo: {
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    badge: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    badgeText: "text-indigo-300",
    glow: "hover:shadow-indigo-500/10",
  },
  sky: {
    border: "border-sky-500/20 hover:border-sky-500/40",
    badge: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    badgeText: "text-sky-300",
    glow: "hover:shadow-sky-500/10",
  },
  green: {
    border: "border-green-500/20 hover:border-green-500/40",
    badge: "bg-green-500/10 border-green-500/30 text-green-300",
    badgeText: "text-green-300",
    glow: "hover:shadow-green-500/10",
  },
  yellow: {
    border: "border-yellow-500/20 hover:border-yellow-500/40",
    badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    badgeText: "text-yellow-300",
    glow: "hover:shadow-yellow-500/10",
  },
  orange: {
    border: "border-orange-500/20 hover:border-orange-500/40",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-300",
    badgeText: "text-orange-300",
    glow: "hover:shadow-orange-500/10",
  },
  teal: {
    border: "border-teal-500/20 hover:border-teal-500/40",
    badge: "bg-teal-500/10 border-teal-500/30 text-teal-300",
    badgeText: "text-teal-300",
    glow: "hover:shadow-teal-500/10",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 relative" style={{ background: "#0a0a0f" }}>
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              05 / Projects
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Featured Work
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 mb-10 text-sm">
            10 projects spanning web, mobile, AI, and enterprise apps
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => {
              const c = colorMap[project.color] ?? colorMap.blue;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`project-card glass-card rounded-2xl p-5 border ${c.border} ${c.glow} hover:shadow-xl flex flex-col`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.emoji}</span>
                      <div>
                        <h3
                          className="text-white font-bold text-sm leading-tight"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {project.title}
                        </h3>
                        {project.period && (
                          <p className="text-slate-600 text-xs">{project.period}</p>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-0.5 rounded-full border ${c.badge}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/25 rounded-lg px-3 py-1.5 transition-all"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 border border-white/5 rounded-lg px-3 py-1.5">
                        <Github size={12} />
                        Private
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/AnwarEzzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/60 transition-all text-sm font-medium"
            >
              <Github size={16} />
              View All Projects on GitHub
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
