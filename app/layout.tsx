import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Anwar Ezzirani | Full-Stack Developer & AI Enthusiast",
  description:
    "4th-year IT Engineering student at EMSI, Casablanca. Full-Stack Developer transitioning into AI & Data Science. Building scalable web apps and intelligent systems.",
  keywords: ["Anwar Ezzirani", "Full-Stack Developer", "AI", "Data Science", "Morocco", "Next.js"],
  authors: [{ name: "Anwar Ezzirani", url: "https://github.com/AnwarEzzy" }],
  openGraph: {
    type: "website",
    title: "Anwar Ezzirani | Full-Stack Developer & AI Enthusiast",
    description: "4th-year IT Engineering student at EMSI, Casablanca — Full-Stack Dev & AI Explorer.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="layout">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
          </div>
          <ThemeToggle />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
