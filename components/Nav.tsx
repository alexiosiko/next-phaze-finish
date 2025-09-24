"use client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Before/After", id: "beforeafter" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Clients", id: "clients" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleMobileNavClick = (linkId: string) => {
    // For mobile navigation, we need to handle the sheet closing differently
    const el = document.getElementById(linkId);
    if (el) {
      // Close the sheet immediately
      setIsOpen(false);
      
      // Calculate scroll position while sheet is still open
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Wait for sheet to close completely before scrolling
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 350); // Increased delay for sheet animation
    }
  };

  const handleDesktopNavClick = (linkId: string) => {
    const el = document.getElementById(linkId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-neutral-900 text-neutral-100 sticky top-0 z-50 shadow">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-4">
        <div className="flex gap-6 px-4">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleDesktopNavClick(link.id)}
              className={`transition-colors px-3 py-2 rounded text-base hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none ${active === link.id ? "bg-neutral-700 text-[#CD9B6A]" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-[#CD9B6A]">Next Phaze Finish</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-neutral-800 rounded-md transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-neutral-900 border-neutral-700">
            <SheetTitle className="text-2xl font-bold text-[#CD9B6A] mb-6">Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to different sections of the Next Phaze Finish website
            </SheetDescription>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleMobileNavClick(link.id)}
                  className={`w-full text-left text-lg py-3 px-4 rounded-lg transition-colors hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none ${active === link.id ? "bg-neutral-700 text-[#CD9B6A]" : "text-neutral-100"}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}