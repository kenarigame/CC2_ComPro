import {
  MessageCircle,
  FolderOpen,
  Search,
  FileText,
  PenLine,
  CheckCircle2,
} from "lucide-react";
import { processSteps } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  FolderOpen,
  Search,
  FileText,
  PenLine,
  CheckCircle2,
};

function ProcessSection() {
  return (
    <section id="proses" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Alur Pelayanan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Proses yang{" "}
            <span className="gold-text-gradient">Mudah & Transparan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami memastikan setiap langkah proses berjalan dengan jelas dan
            efisien untuk kenyamanan Anda
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block">
          {/* Steps row */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
            <div
              className="absolute top-10 left-0 h-0.5 bg-gold transition-all duration-1000"
              style={{ width: "100%" }}
            />

            <div className="grid grid-cols-6 gap-4 relative">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon] || CheckCircle2;
                return (
                  <div key={step.step} className="flex flex-col items-center">
                    {/* Icon circle */}
                    <div
                      className={cn(
                        "w-20 h-20 rounded-full border-4 flex flex-col items-center justify-center mb-4 z-10 transition-all duration-300",
                        index < 3
                          ? "bg-navy border-gold shadow-lg shadow-navy/20"
                          : "bg-card border-gold/50",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-7 h-7 mb-0.5",
                          index < 3 ? "text-gold" : "text-gold/70",
                        )}
                      />
                      <span
                        className={cn(
                          "text-xs font-bold",
                          index < 3 ? "text-white/60" : "text-muted-foreground",
                        )}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-foreground text-sm text-center mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-xs text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-0">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            const isLast = index === processSteps.length - 1;
            return (
              <div key={step.step} className="flex gap-4">
                {/* Left - icon & line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  {!isLast && <div className="w-0.5 flex-1 bg-gold/30 my-2" />}
                </div>

                {/* Right - content */}
                <div className={cn("pb-8 flex-1", isLast && "pb-0")}>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-gold">
                        Langkah {step.step}
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
