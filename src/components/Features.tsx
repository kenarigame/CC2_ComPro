import { Award, Clock, Eye, Zap, Lock, Star } from "lucide-react";
import { features } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Clock,
  Eye,
  Zap,
  Lock,
  Star,
};

export function FeaturesSection() {
  return (
    <section id="keunggulan" className="section-padding bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30 mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              Keunggulan Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Mengapa Memilih{" "}
            <span className="gold-text-gradient">Kantor Kami?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Kami memberikan yang terbaik dalam setiap aspek layanan hukum yang
            kami tawarkan
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <div
                key={feature.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-white/30 text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm mb-4">
            Bergabunglah dengan lebih dari 2.000 klien yang telah mempercayai kami
          </p>
          <div className="flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="text-white/70 text-sm ml-2">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
