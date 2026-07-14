"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Wrench, Briefcase, FolderGit2, Award, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Hamburger Button on Mobile (Left Corner) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-nav fixed z-50 flex flex-col items-center justify-center gap-1 transition-all border active:scale-95"
        style={{
          top: 20,
          left: 24,
          width: 42,
          height: 42,
          borderRadius: 12,
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--text)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
        }}
        aria-label="Toggle Menu"
      >
        <div
          className={`w-5 h-0.5 bg-[var(--text)] rounded-full transition-transform duration-250 ease-in-out ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <div
          className={`w-5 h-0.5 bg-[var(--text)] rounded-full transition-opacity duration-250 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-5 h-0.5 bg-[var(--text)] rounded-full transition-transform duration-250 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-4 md:hidden p-6"
            style={{
              pointerEvents: "auto",
            }}
          >
            <div 
              className="w-full max-w-[280px] rounded-2xl border flex flex-col gap-1 p-3 shadow-2xl"
              style={{
                background: "var(--sidebar-bg)",
                borderColor: "var(--border)",
                backdropFilter: "blur(20px)",
              }}
            >
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all hover:bg-white/5 active:scale-[0.98]"
                    style={{
                      color: isActive ? "#60a5fa" : "var(--text-sub)",
                      background: isActive ? "rgba(59, 130, 246, 0.08)" : "transparent",
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    <Icon size={16} strokeWidth={isActive ? 2 : 1.8} className={isActive ? "text-[#60a5fa]" : "text-[var(--text-muted)]"} />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
