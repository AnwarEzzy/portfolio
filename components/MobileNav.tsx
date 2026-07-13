"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Wrench, Briefcase, FolderGit2, Award, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/experience", label: "Exp", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/certifications", label: "Certs", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="mobile-nav fixed bottom-0 left-0 right-0 z-50 border-t"
      style={{
        background: "rgba(5,5,8,0.95)",
        borderColor: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        padding: "8px 0",
      }}
    >
      {navLinks.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 py-1 px-2 flex-1"
            style={{
              color: isActive ? "#60a5fa" : "#475569",
              fontSize: "0.6rem",
              fontWeight: 500,
            }}
          >
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
