import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Subtle background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right panel accent */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-surface" />
        {/* Gold vertical line */}
        <div className="absolute top-0 right-[45%] w-px h-full bg-border" />
        {/* Gold accent strip */}
        <div className="absolute top-0 right-[45%] w-[3px] h-32 bg-gold" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left — Text content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="section-label">
                Kantor Notaris & PPAT Terpercaya
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[3.75rem] font-black text-foreground leading-[1.08] tracking-tight mb-6">
              Solusi Hukum{" "}
              <span className="relative">
                <span className="gold-heading">Profesional</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  style={{ bottom: "-4px" }}
                />
              </span>
              <br />
              dan Terpercaya
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10">
              Kantor Notaris & PPAT yang berkomitmen memberikan pelayanan hukum
              terbaik untuk individu, perusahaan, dan investor di seluruh
              Indonesia.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "Resmi terdaftar & berizin INI",
                "15+ tahun pengalaman",
                "99% tingkat kepuasan klien",
                "Konsultasi online tersedia",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("kontak")}
                className="bg-navy text-white hover:bg-navy/90 font-semibold h-12 px-7 text-base"
              >
                <MessageCircle className="w-4.5 h-4.5 mr-2" />
                Konsultasi Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("layanan")}
                className="border-border text-foreground hover:bg-secondary h-12 px-7 text-base font-semibold"
              >
                Lihat Layanan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right — Stats card grid */}
          <div className="hidden lg:flex flex-col justify-center">
            {/* Profile card */}
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm mb-4">
              <div className="flex items-start gap-5 mb-6">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-2xl">SD</span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Notaris & PPAT
                  </div>
                  <h3 className="font-bold text-foreground text-lg leading-tight">
                    Dr. Sari Dewi, S.H., M.Kn.
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-emerald-600 font-medium">
                      Tersedia Konsultasi
                    </span>
                  </div>
                </div>
              </div>
              <Separator className="mb-6" />
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15+", label: "Tahun Pengalaman" },
                  { value: "2000+", label: "Klien Dilayani" },
                  { value: "5000+", label: "Akta Dibuat" },
                  { value: "99%", label: "Kepuasan Klien" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-surface rounded-xl p-4">
                    <div className="text-2xl font-black gold-heading mb-0.5">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "⚖️", text: "Anggota INI" },
                { icon: "🏛️", text: "PPAT Resmi BPN" },
                { icon: "🔒", text: "Dokumen Aman" },
                { icon: "⚡", text: "Proses Cepat" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 bg-white border border-border rounded-xl px-4 py-3"
                >
                  <span className="text-base">{icon}</span>
                  <span className="text-sm font-semibold text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
