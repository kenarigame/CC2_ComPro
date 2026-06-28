import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

  return (
    <section id="testimoni" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Apa Kata <span className="gold-text-gradient">Klien Kami</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 right-8 text-gold/10">
              <Quote className="w-24 h-24 fill-current" />
            </div>

            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={cn(
                      "w-5 h-5",
                      s <= current.rating
                        ? "text-gold fill-gold"
                        : "text-muted-foreground",
                    )}
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground text-lg md:text-xl leading-relaxed font-medium mb-8 italic">
                "{current.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy border-2 border-gold/40 flex items-center justify-center shrink-0">
                  <span className="text-gold font-black text-xl">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {current.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {current.role} · {current.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === active
                      ? "w-8 h-2.5 bg-gold"
                      : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground",
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All testimonials mini */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={cn(
                "group rounded-2xl p-4 border text-left transition-all duration-200",
                i === active
                  ? "bg-navy border-gold/40 shadow-lg"
                  : "bg-card border-border hover:border-gold/30",
              )}
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-gold fill-gold" />
                ))}
              </div>
              <div
                className={cn(
                  "font-semibold text-xs mb-0.5",
                  i === active ? "text-white" : "text-foreground",
                )}
              >
                {t.name}
              </div>
              <div
                className={cn(
                  "text-xs",
                  i === active ? "text-white/50" : "text-muted-foreground",
                )}
              >
                {t.company}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
