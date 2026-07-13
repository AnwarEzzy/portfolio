"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    emoji: "🎨",
    color: "#3b82f6",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite"
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "#8b5cf6",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Laravel",
      "Symfony",
      "ASP.NET Core",
      "REST APIs",
      "JWT Authentication"
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    color: "#10b981",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Apache Cassandra",
      "Oracle Database",
      "SQL Server",
      "PL/SQL",
      "Prisma ORM",
      "Doctrine ORM",
      "Eloquent ORM"
    ],
  },
  {
    title: "Artificial Intelligence",
    emoji: "🤖",
    color: "#f59e0b",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "Data Science"
    ],
  },
  {
    title: "DevOps / Tools",
    emoji: "🛠️",
    color: "#06b6d4",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Postman",
      "JIRA",
      "SonarQube",
      "Linux",
      "Agile/Scrum"
    ],
  },
  {
    title: "Programming & Concepts",
    emoji: "💻",
    color: "#ec4899",
    skills: [
      "Java",
      "C#",
      "C++",
      "C",
      "Cypher",
      "Object-Oriented Programming",
      "UML",
      "Merise",
      "Embedded Systems",
      "Multi-Agent Systems"
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function SkillsPage() {
  return (
    <div className="page-in page-section no-scroll-page">
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.07), transparent)", top: 0, right: 0 }} />

      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">Tech Stack</p>
        <h1 className="section-title">Skills & Tools</h1>
        <div className="divider" />
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, maxWidth: 1000, overflowY: "auto", flex: 1, paddingRight: "6px" }}>
        {categories.map((cat, i) => (
          <motion.div key={cat.title} custom={i + 1} initial="hidden" animate="show" variants={fadeUp}>
            <div className="skill-box">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${cat.color}18`,
                  border: `1px solid ${cat.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                }}>
                  {cat.emoji}
                </div>
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", fontWeight: 700, color: cat.color }}>
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: "3px 10px", borderRadius: 99,
                      fontSize: "0.72rem", fontWeight: 500,
                      border: `1px solid ${cat.color}28`,
                      background: `${cat.color}0d`,
                      color: `${cat.color}cc`,
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
