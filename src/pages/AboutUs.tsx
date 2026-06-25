import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { stats } from "../data";
import Navbar from "@/components/sections/Navbar";
import NotarisProfile from "@/components/sections/NotarisProfile";

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
      { threshold: 0.5 },
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

function AboutUs() {
  return (
    <div>
      <Navbar />
      <NotarisProfile />
      <section id="tentang" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-20 border border-border">
            {stats.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="bg-white px-8 py-8 flex flex-col items-center text-center group hover:bg-surface transition-colors"
              >
                <div className="text-4xl font-black gold-heading mb-1">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold" />
                <span className="section-label">Tentang Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-6 leading-tight">
                Kantor Hukum yang
                <br />
                <span className="gold-heading">Berdedikasi</span> Sejak 2009
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Didirikan pada tahun 2009 oleh Dr. Sari Dewi, S.H., M.Kn.,
                  kantor ini telah berkembang menjadi salah satu kantor notaris
                  terpercaya di Jakarta Selatan. Dengan pengalaman lebih dari 15
                  tahun, kami telah melayani ribuan klien dari berbagai
                  kalangan.
                </p>
                <p>
                  Kami berkomitmen memberikan pelayanan hukum yang tidak hanya
                  sesuai peraturan yang berlaku, tetapi juga memperhatikan
                  kepentingan terbaik klien dengan pendekatan personal,
                  profesional, dan bertanggung jawab.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Anggota resmi Ikatan Notaris Indonesia (INI)",
                  "Terdaftar sebagai PPAT di wilayah Jakarta Selatan",
                  "Mengutamakan kerahasiaan dan kepercayaan klien",
                  "Layanan konsultasi online dan offline tersedia",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Vision / Mission */}
            <div className="space-y-5">
              {/* Visi */}
              <div className="border border-border rounded-2xl p-7 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gold-light flex items-center justify-center">
                    <span className="text-lg">🎯</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Visi</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Menjadi kantor notaris dan PPAT yang paling terpercaya,
                  profesional, dan inovatif di Indonesia, memberikan solusi
                  hukum terbaik bagi masyarakat dan dunia usaha.
                </p>
              </div>

              {/* Misi */}
              <div className="border border-border rounded-2xl p-7 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gold-light flex items-center justify-center">
                    <span className="text-lg">💡</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Misi</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Memberikan pelayanan hukum yang berkualitas tinggi",
                    "Menjaga integritas dan profesionalisme profesi notaris",
                    "Mengutamakan kepuasan dan kepercayaan klien",
                    "Terus berinovasi dalam pelayanan hukum digital",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-gold-light border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[oklch(0.60_0.13_78)] text-[10px] font-bold">
                          {i + 1}
                        </span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nilai */}
              <div className="bg-surface rounded-2xl p-7 border border-border">
                <h4 className="font-bold text-foreground mb-4">
                  Nilai Perusahaan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Integritas",
                    "Profesionalisme",
                    "Transparansi",
                    "Inovasi",
                    "Kepercayaan",
                  ].map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-border text-foreground"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
