import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "@/data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Pertanyaan yang{" "}
            <span className="gold-text-gradient">Sering Diajukan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Temukan jawaban atas pertanyaan umum seputar layanan notaris dan PPAT
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl border transition-all duration-200 overflow-hidden",
                openIndex === i
                  ? "border-gold/40 shadow-lg shadow-navy/5"
                  : "border-border bg-card"
              )}
            >
              <button
                onClick={() => toggle(i)}
                className={cn(
                  "w-full text-left flex items-start gap-4 p-5 transition-colors",
                  openIndex === i ? "bg-navy" : "bg-card hover:bg-secondary/50"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                    openIndex === i
                      ? "bg-gold/20 border border-gold/30"
                      : "bg-secondary"
                  )}
                >
                  <HelpCircle
                    className={cn(
                      "w-4 h-4",
                      openIndex === i ? "text-gold" : "text-muted-foreground"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "font-semibold flex-1 text-sm leading-snug",
                    openIndex === i ? "text-white" : "text-foreground"
                  )}
                >
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                )}
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === i ? "max-h-48" : "max-h-0"
                )}
              >
                <div className="px-5 pb-5 pt-3 bg-card">
                  <div className="pl-12">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Masih punya pertanyaan? Hubungi kami langsung.
          </p>
          <button
            onClick={() => {
              document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
