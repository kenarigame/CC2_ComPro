import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";
import { stats } from "@/data";

function AnimatedCounter({
  value,
  suffix,
  duration = 2000,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const timer = setInterval(() => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress >= 1) {
              setCount(value);
              clearInterval(timer);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="tentang" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Tentang Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Kantor Hukum yang{" "}
            <span className="gold-text-gradient">Berdedikasi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Melayani kebutuhan hukum masyarakat dan dunia usaha dengan
            profesionalisme tinggi sejak 2009
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Sejarah & Latar Belakang
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Didirikan pada tahun 2009 oleh Dr. Sari Dewi, S.H., M.Kn.,
                  kantor ini telah berkembang menjadi salah satu kantor notaris
                  terpercaya di Jakarta Selatan. Dengan pengalaman lebih dari 15
                  tahun, kami telah melayani ribuan klien dari berbagai kalangan.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Kami berkomitmen untuk memberikan pelayanan hukum yang tidak
                  hanya sesuai dengan peraturan yang berlaku, tetapi juga
                  memperhatikan kepentingan terbaik klien dengan pendekatan yang
                  personal, profesional, dan bertanggung jawab.
                </p>
              </div>

              {/* Key points */}
              <div className="space-y-3 pt-2">
                {[
                  "Anggota resmi Ikatan Notaris Indonesia (INI)",
                  "Terdaftar sebagai PPAT di wilayah Jakarta Selatan",
                  "Mengutamakan kerahasiaan dan kepercayaan klien",
                  "Layanan konsultasi online dan offline tersedia",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Vision/Mission */}
          <div className="space-y-4">
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-lg">Visi</h4>
              </div>
              <p className="text-white/70 leading-relaxed">
                Menjadi kantor notaris dan PPAT yang paling terpercaya,
                profesional, dan inovatif di Indonesia, yang memberikan solusi
                hukum terbaik bagi masyarakat dan dunia usaha.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-lg text-foreground">Misi</h4>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Memberikan pelayanan hukum yang berkualitas tinggi",
                  "Menjaga integritas dan profesionalisme profesi notaris",
                  "Mengutamakan kepuasan dan kepercayaan klien",
                  "Terus berinovasi dalam pelayanan hukum digital",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-2xl bg-navy p-6 text-center group"
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-black text-gold mb-2">
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
