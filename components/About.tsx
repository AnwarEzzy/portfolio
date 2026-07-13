"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Briefcase, Award, Globe } from "lucide-react";

const stats = [
  { icon: Cpu, value: 10, suffix: "+", label: "Projects Built" },
  { icon: Briefcase, value: 2, suffix: "", label: "Internships" },
  { icon: Award, value: 15, suffix: "+", label: "Certifications" },
  { icon: Globe, value: 3, suffix: "", label: "Languages" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="counter-num">
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 relative" style={{ background: "#0a0a0f" }}>
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              01 / About Me
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Who I Am
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 leading-relaxed mb-5 text-[15px]"
              >
                I&apos;m a passionate{" "}
                <span className="text-white font-medium">full-stack developer</span> and
                4th-year IT Engineering student at EMSI — Moroccan School of Engineering,
                Casablanca. My journey started with building web applications, and now I&apos;m
                transitioning into the exciting world of{" "}
                <span className="text-cyan-400 font-medium">AI & Data Science</span>.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 leading-relaxed mb-5 text-[15px]"
              >
                I love crafting <span className="text-white">clean, scalable architectures</span>{" "}
                using modern technologies — from React & Next.js on the frontend to Node.js,
                Laravel, Django, and ASP.NET on the backend. My goal is to combine software
                engineering with AI to build{" "}
                <span className="text-blue-400">intelligent, impactful systems</span>.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card border border-orange-500/20 bg-orange-500/5 mt-6"
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-sm font-semibold text-orange-300">Oracle — AI for You</p>
                  <p className="text-xs text-slate-500">
                    Completed full learning path & assessment
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-4 flex flex-wrap gap-2">
                {["Morocco 🇲🇦", "Arabic", "French", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 bg-white/3"
                  >
                    {lang}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ icon: Icon, value, suffix, label }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6 text-center group hover:border-blue-500/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-blue-500/30 transition-all">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <Counter value={value} suffix={suffix} />
                  <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
