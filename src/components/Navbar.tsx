"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  {
    label: "Layanan",
    href: "#layanan",
    children: [
      { label: "Layanan Notaris", href: "#layanan" },
      { label: "Layanan PPAT", href: "#layanan" },
    ],
  },
  { label: "Artikel", href: "#artikel" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#beranda");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-bold text-lg text-navy-foreground group-hover:scale-105 transition-transform">
              <span className="text-[oklch(0.15_0.025_264)] font-black text-xl">N</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">
                Notaris & PPAT
              </div>
              <div className="text-gold text-xs font-medium leading-tight">
                Dr. Sari Dewi, S.H., M.Kn.
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-navy/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNavClick(child.href)}
                        className="w-full text-left px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">{siteConfig.phone}</span>
            </a>
            <Button
              size="sm"
              onClick={() => handleNavClick("#kontak")}
              className="bg-gold text-[oklch(0.15_0.025_264)] hover:bg-gold/90 font-semibold px-4"
            >
              Konsultasi
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="bg-navy/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-3 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-md transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Button
              size="sm"
              onClick={() => handleNavClick("#kontak")}
              className="w-full bg-gold text-[oklch(0.15_0.025_264)] hover:bg-gold/90 font-semibold"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
