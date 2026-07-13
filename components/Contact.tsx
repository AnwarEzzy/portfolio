"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Linkedin, Send, Github, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ background: "#0a0a0f" }}>
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              07 / Contact
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 mb-12 text-sm max-w-xl">
            I&apos;m actively looking for{" "}
            <span className="text-cyan-400">AI & Data Science internship</span> opportunities.
            Reach out — I&apos;d love to connect!
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-white/5">
                <h3 className="text-white font-semibold mb-4 text-sm">Contact Info</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:anwarezzirani69@gmail.com"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail size={15} className="text-blue-400" />
                    </div>
                    <span className="text-sm">anwarezzirani69@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <MapPin size={15} className="text-green-400" />
                    </div>
                    <span className="text-sm">Casablanca, Morocco 🇲🇦</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/anwar-ezzirani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <Linkedin size={15} className="text-blue-500" />
                    </div>
                    <span className="text-sm">linkedin/anwar-ezzirani</span>
                  </a>
                  <a
                    href="https://github.com/AnwarEzzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Github size={15} className="text-white" />
                    </div>
                    <span className="text-sm">github.com/AnwarEzzy</span>
                  </a>
                </div>
              </div>

              {/* Status */}
              <div className="glass-card rounded-2xl p-5 border border-green-500/15 bg-green-500/5">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-white text-sm font-semibold">Available for Internship</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Actively seeking AI & Data Science opportunities — open to remote or on-site
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form side */}
            <motion.div variants={itemVariants}>
              {submitted ? (
                <div className="glass-card rounded-2xl p-8 border border-green-500/20 text-center">
                  <CheckCircle size={40} className="text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-6 border border-white/5 space-y-4"
                >
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity..."
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm hover:from-blue-500 hover:to-cyan-400 disabled:opacity-60 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
