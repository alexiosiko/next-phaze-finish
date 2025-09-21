"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Brands", id: "brands" },
  { label: "Before/After", id: "beforeafter" },
  { label: "Clients", id: "clients" },
  { label: "Process", id: "process" },
  { label: "Stats", id: "stats" },
  { label: "Reviews", id: "reviews" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex justify-center py-4 bg-neutral-900 text-neutral-100 sticky top-0 z-50 shadow">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto px-2">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById(link.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`transition-colors px-2 py-1 rounded hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none ${active === link.id ? "bg-neutral-700 text-yellow-300 animate-pulse" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}