"use client";

import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t border-white/5"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Designed & Built by</span>
          <span className="text-white font-medium font-mono">Anwar Ezzirani</span>
          <span className="flex items-center gap-1">
            with <Heart size={12} className="text-red-400 fill-red-400" />
          </span>
        </div>

        {/* Middle - logo */}
        <a
          href="#"
          className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm font-mono shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
        >
          AE
        </a>

        {/* Right */}
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <span>© 2026</span>
          <a
            href="https://github.com/AnwarEzzy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github size={14} />
            AnwarEzzy
          </a>
        </div>
      </div>
    </footer>
  );
}
