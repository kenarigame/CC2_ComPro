import { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";
import { siteConfig } from "@/data";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya ingin konsultasi mengenai layanan notaris.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-0 hover:gap-3 overflow-hidden bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 h-14 pl-4 pr-4 hover:pr-5"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="text-sm font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
          Konsultasi WA
        </span>
      </a>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-navy/90 text-white border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300",
          showBackTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
