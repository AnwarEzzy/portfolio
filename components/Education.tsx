"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    school: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI)",
    degree: "IT Engineering — Computer Science",
    period: "2024 – 2027",
    icon: "🏛️",
    color: "blue",
    subjects: [
      "Networks", "PL/SQL", "Machine Learning", "IoT", "Big Data",
      "Business Intelligence", "Embedded Systems", "OOP", "Data Science",
      "Multi-agent Systems", "Virtualization", ".NET", "Oracle", "C/C++/Java",
      "Cypher", "Operations Research",
    ],
  },
  {
    school: "Specialized Institute of Applied Technology NTIC",
    degree: "Specialized Technician Diploma — Full-Stack Web Development",
    period: "2022 – 2024",
    icon: "🎓",
    color: "cyan",
    subjects: [
      "Django", "Laravel", "React", "UML", "Merise", "Agile/Scrum",
      "Tkinter", "SonarQube", "jQuery", "Postman", "GitLab", "JIRA",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; badge: string; badgeText: string }> = {
  blue: {
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-transparent",
    badge: "bg-blue-500/10 border-blue-500/30",
    badgeText: "text-blue-300",
  },
  cyan: {
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-transparent",
    badge: "bg-cyan-500/10 border-cyan-500/30",
    badgeText: "text-cyan-300",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6 relative" style={{ background: "#0d0d14" }}>
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              04 / Education
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Academic Background
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => {
              const c = colorMap[edu.color];
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`glass-card rounded-2xl p-7 border ${c.border} relative overflow-hidden group hover:border-opacity-40 transition-all`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-40`}
                  />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{edu.icon}</span>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-white text-base leading-tight mb-1"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {edu.school}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2">{edu.degree}</p>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Calendar size={11} />
                          {edu.period}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={12} className="text-slate-500" />
                        <span className="text-xs text-slate-500 font-medium">Key Subjects</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.subjects.map((subj) => (
                          <span
                            key={subj}
                            className={`text-xs px-2 py-0.5 rounded-full border ${c.badge} ${c.badgeText}`}
                          >
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
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
