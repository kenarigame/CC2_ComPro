import { ArrowRight, MessageCircle, Star, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30 mb-6">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-gold text-xs font-medium">
                Terpercaya Sejak 2009 · 2000+ Klien Puas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Solusi Hukum{" "}
              <span className="gold-text-gradient">Profesional</span>{" "}
              <br className="hidden lg:block" />
              dan Terpercaya
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Kantor Notaris & PPAT yang berkomitmen memberikan pelayanan hukum
              terbaik untuk individu, perusahaan, dan investor di seluruh
              Indonesia.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {[
                { icon: Shield, text: "Resmi & Berizin" },
                { icon: Users, text: "15+ Tahun Pengalaman" },
                { icon: Star, text: "99% Kepuasan Klien" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                >
                  <Icon className="w-3.5 h-3.5 text-gold" />
                  <span className="text-white/80 text-xs font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gold text-[oklch(0.15_0.025_264)] hover:bg-gold/90 font-bold px-8 text-base h-12 shadow-lg shadow-gold/20"
                onClick={() => scrollTo("kontak")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 text-base h-12 bg-transparent"
                onClick={() => scrollTo("layanan")}
              >
                Lihat Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gold/20 border border-gold/30 flex items-center justify-center mb-6 mx-auto">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 text-gold"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>

                <h3 className="text-white font-bold text-xl text-center mb-2">
                  Kantor Notaris & PPAT
                </h3>
                <p className="text-white/60 text-sm text-center mb-6">
                  Dr. Sari Dewi, S.H., M.Kn.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "15+", label: "Tahun" },
                    { value: "2000+", label: "Klien" },
                    { value: "5000+", label: "Akta" },
                    { value: "99%", label: "Puas" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="bg-white/5 rounded-xl p-3 text-center border border-white/5"
                    >
                      <div className="text-gold font-black text-xl">{value}</div>
                      <div className="text-white/50 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gold text-[oklch(0.15_0.025_264)] rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-xs font-bold">Terpercaya</div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-white/60 text-xs">Konsultasi Online</div>
                <div className="text-green-400 font-bold text-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Tersedia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
