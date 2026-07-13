"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        position: "fixed",
        top: 20,
        right: 24,
        zIndex: 100,
        width: 42,
        height: 42,
        borderRadius: 12,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "rotate(20deg) scale(1.08)";
        el.style.borderColor = "rgba(59,130,246,0.4)";
        el.style.boxShadow = "0 6px 20px rgba(59,130,246,0.25)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "rotate(0deg) scale(1)";
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
      }}
    >
      {theme === "dark"
        ? <Sun size={18} color="#f59e0b" />
        : <Moon size={18} color="#6366f1" />
      }
    </button>
  );
}
