"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "blue",
    emoji: "🎨",
    skills: [
      "React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap",
      "HTML5", "CSS3", "JavaScript (ES6+)", "Vite", "Chart.js", "Recharts",
    ],
  },
  {
    title: "Backend",
    color: "purple",
    emoji: "⚙️",
    skills: [
      "Node.js", "Express.js", "Laravel (PHP)", "Django (Python)",
      "Symfony (PHP)", "ASP.NET Core (.NET / C#)", "JWT Auth", "REST APIs",
    ],
  },
  {
    title: "Databases",
    color: "green",
    emoji: "🗄️",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "Neo4j (Graph DB)", "Oracle Database",
      "PL/SQL", "Prisma ORM", "Doctrine ORM", "Eloquent ORM", "SQL Server",
    ],
  },
  {
    title: "AI / Data Science",
    color: "orange",
    emoji: "🤖",
    skills: [
      "Python", "Machine Learning", "Deep Learning", "Data Science",
      "Data Mining", "Big Data", "Business Intelligence", "Data Architecture",
    ],
  },
  {
    title: "DevOps / Tools",
    color: "cyan",
    emoji: "🛠️",
    skills: [
      "Git", "GitHub", "GitLab", "Docker", "Postman",
      "SonarQube", "JIRA", "Unix/Linux (RHEL)", "Virtualization", "Agile / Scrum",
    ],
  },
  {
    title: "Other",
    color: "pink",
    emoji: "💻",
    skills: [
      "C", "C++", "Java", "C#", "Cypher Query Language",
      "UML", "Merise", "OOP", "IoT", "Embedded Systems", "Multi-agent Systems",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; shadow: string }> = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    shadow: "hover:shadow-blue-500/20",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-300",
    shadow: "hover:shadow-purple-500/20",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    text: "text-green-300",
    shadow: "hover:shadow-green-500/20",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    text: "text-orange-300",
    shadow: "hover:shadow-orange-500/20",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    shadow: "hover:shadow-cyan-500/20",
  },
  pink: {
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    text: "text-pink-300",
    shadow: "hover:shadow-pink-500/20",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              02 / Skills
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Tech Stack
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 mb-10 text-sm">
            Technologies and tools I work with regularly
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => {
              const c = colorMap[cat.color];
              return (
                <motion.div
                  key={cat.title}
                  variants={itemVariants}
                  className={`glass-card rounded-2xl p-6 group hover:border-white/10 transition-all ${c.shadow} hover:shadow-xl`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{cat.emoji}</span>
                    <h3
                      className={`font-semibold text-sm ${c.text}`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${c.border} ${c.bg} ${c.text} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
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
