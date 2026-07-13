"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, User, Wrench, Briefcase, FolderGit2, Award, Mail, Github, Linkedin, Phone
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div style={{ marginBottom: "44px" }}>
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", fontFamily: "'Space Mono', monospace", boxShadow: "0 4px 16px rgba(59,130,246,0.4)" }}
          >
            AE
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight" style={{ color: "var(--text)" }}>Anwar Ezzirani</p>
            <p className="text-xs" style={{ color: "#06b6d4" }}>AI Engineer</p>
          </div>
        </Link>
      </div>

      {/* Divider */}
      <div className="mb-6" style={{ height: "1px", background: "var(--border)" }} />

      {/* Nav items */}
      <nav className="flex flex-col gap-1 flex-1">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className={`nav-item${isActive ? " active" : ""}`}>
              <span className="dot" />
              <Icon size={16} strokeWidth={1.8} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-6" style={{ borderTop: "1px solid var(--border)" }}>
        {/* Social icons + theme toggle */}
        <div className="flex items-center gap-2 mb-4" style={{ marginTop: 16 }}>
          <a href="https://github.com/AnwarEzzy" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}>
            <Github size={14} color="var(--text-muted)" />
          </a>
          <a href="https://www.linkedin.com/in/anwar-ezzirani" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}>
            <Linkedin size={14} color="var(--text-muted)" />
          </a>
          <a href="mailto:anwarezzirani69@gmail.com"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}>
            <Mail size={14} color="var(--text-muted)" />
          </a>
          <a href="https://wa.me/212709281228" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}>
            <Phone size={14} color="var(--text-muted)" />
          </a>
        </div>

      </div>
    </aside>
  );
}



