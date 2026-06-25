import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X, Scale } from "lucide-react";
import { SITE } from "../../data/site";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";

type NavItem = { label: string; to: string; hash?: string };
const NAV: NavItem[] = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/about" },
  { label: "Layanan", to: "/services" },
  { label: "Artikel", to: "/blog" },
  { label: "Teams", to: "/teams"},
  { label: "Testimoni", to: "/", hash: "testimoni" },
  { label: "Kontak", to: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-[0_4px_20px_-12px_rgba(15,23,42,0.18)]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold transition-transform group-hover:scale-105">
            <Scale className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-navy text-[15px]">
              {SITE.brandShort}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Trusted Law Office
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: item.to === "/" && !item.hash }}
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gold transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Button className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-gold text-sm"
          >
            Konsultasi Sekarang
          </a>
        </Button>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                //   hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2.5 text-sm font-medium text-foreground/80 hover:text-navy"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-2 text-sm"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
