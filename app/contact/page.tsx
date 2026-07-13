"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone, AlertCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55 } }),
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "An error occurred while sending the message.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-in page-section no-scroll-page" style={{ padding: "36px 56px 24px" }}>
      <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(6,182,212,0.07), transparent)", top: 0, right: 0 }} />

      <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp}>
        <p className="section-tag">Get In Touch</p>
        <h1 className="section-title">Let&apos;s Connect</h1>
        <div className="divider" style={{ marginBottom: "12px" }} />
        <p style={{ color: "var(--text-sub)", fontSize: "0.875rem", maxWidth: 480, marginBottom: 16, lineHeight: 1.6 }}>
          Passionate about building intelligent software through Artificial Intelligence and modern Software Engineering. Whether you have an AI project, software opportunity, or simply want to connect, feel free to reach out.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900 }}>
        {/* Info */}
        <div>
          <motion.div custom={1} initial="hidden" animate="show" variants={fadeUp}>
            {/* Availability card */}
            <div style={{
              padding: "12px 18px", borderRadius: 14, marginBottom: 14,
              background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
                <div>
                  <p style={{ color: "#4ade80", fontWeight: 600, fontSize: "0.8rem" }}>Available for AI & Software Projects</p>
                  <p style={{ color: "var(--text-sub)", fontSize: "0.7rem", marginTop: 1 }}>AI Engineering • Full-Stack Development • AI Solutions</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="card" style={{ padding: "16px 20px" }}>
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact Info</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:anwarezzirani69@gmail.com"
                   style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-sub)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={12} color="#60a5fa" />
                  </div>
                  anwarezzirani69@gmail.com
                </a>
                <a href="https://wa.me/212709281228" target="_blank" rel="noopener noreferrer"
                   style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-sub)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#4ade80"}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={12} color="#4ade80" />
                  </div>
                  +212 709 281 228 · WhatsApp
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-sub)", fontSize: "0.8rem" }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MapPin size={12} color="#34d399" />
                  </div>
                  Casablanca, Morocco 🇲🇦
                </div>
                <a href="https://github.com/AnwarEzzy" target="_blank" rel="noopener noreferrer"
                   style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-sub)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Github size={12} color="#fff" />
                  </div>
                  github.com/AnwarEzzy
                </a>
                <a href="https://www.linkedin.com/in/anwar-ezzirani" target="_blank" rel="noopener noreferrer"
                   style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-sub)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#60a5fa"}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sub)"}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Linkedin size={12} color="#60a5fa" />
                  </div>
                  linkedin/anwar-ezzirani
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp}>
          {submitted ? (
            <div className="card" style={{ padding: "40px 32px", textAlign: "center" }}>
              <CheckCircle size={44} color="#4ade80" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ color: "var(--text)", fontWeight: 700, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>Message Sent!</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" style={{ padding: "16px 20px" }}>
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Send a Message</h3>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: "block", fontSize: "0.7rem", color: "var(--text-sub)", marginBottom: 4 }}>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" style={{ padding: "8px 12px", fontSize: "0.8rem" }} />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: "block", fontSize: "0.7rem", color: "var(--text-sub)", marginBottom: 4 }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" style={{ padding: "8px 12px", fontSize: "0.8rem" }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: "block", fontSize: "0.7rem", color: "var(--text-sub)", marginBottom: 4 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={3} placeholder="Tell me about the opportunity..." className="form-input" style={{ resize: "none", padding: "8px 12px", fontSize: "0.8rem" }} />
              </div>
              {error && (
                <div style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  marginBottom: 12,
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#f87171",
                  fontSize: "0.75rem",
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8
                }}>
                  <AlertCircle size={14} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, padding: "10px 20px", fontSize: "0.8rem" }}>
                {loading ? (
                  <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                ) : <Send size={13} />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
