import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Badge } from "@/components/ui/badge";
import { services, type ServiceItem } from "@/data";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  ArrowRight,
  BookCheck,
  Briefcase,
  Building2,
  FileEdit,
  FileSignature,
  Gift,
  Handshake,
  Home,
  LandPlot,
  ScrollText,
  Shield,
  Split,
  Stamp,
  Unlock,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  FileEdit,
  Handshake,
  Gift,
  ScrollText,
  Stamp,
  BookCheck,
  FileSignature,
  ArrowLeftRight,
  Shield,
  Unlock,
  Split,
  Home,
  LandPlot,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon] || Building2;
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
          <Icon className="w-6 h-6 text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <Badge
            variant="outline"
            className={cn(
              "text-xs mb-2",
              service.category === "notaris"
                ? "border-navy/20 text-navy dark:border-gold/30 dark:text-gold"
                : "border-gold/40 text-[oklch(0.58_0.13_84)] bg-gold/5",
            )}
          >
            {service.category === "notaris" ? "Notaris" : "PPAT"}
          </Badge>
          <h3 className="font-bold text-foreground leading-tight">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
        {service.description}
      </p>
      <button className="flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-3 transition-all group/btn">
        Lihat Detail
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "notaris" | "ppat">("all");

  const filtered =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <div>
      <Navbar />
      <section id="layanan" className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Layanan Kami
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Layanan <span className="gold-text-gradient">Hukum Lengkap</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kami menyediakan berbagai layanan notaris dan PPAT untuk memenuhi
              semua kebutuhan hukum Anda
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex gap-1 p-1 bg-secondary rounded-xl">
              {[
                { key: "all", label: "Semua Layanan" },
                { key: "notaris", label: "Layanan Notaris" },
                { key: "ppat", label: "Layanan PPAT" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className={cn(
                    "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    activeTab === key
                      ? "bg-navy text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
