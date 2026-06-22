import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig, services } from "@/data";

const notarisServices = services.filter((s) => s.category === "notaris").slice(0, 5);
const ppatServices = services.filter((s) => s.category === "ppat").slice(0, 5);

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.11_0.025_264)] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-bold">
                <span className="text-[oklch(0.15_0.025_264)] font-black text-xl">N</span>
              </div>
              <div>
                <div className="font-bold text-sm">Notaris & PPAT</div>
                <div className="text-gold text-xs">Dr. Sari Dewi, S.H., M.Kn.</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Kantor Notaris & PPAT terpercaya yang berkomitmen memberikan
              pelayanan hukum terbaik untuk individu dan perusahaan.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { letter: "IG", href: siteConfig.social.instagram, label: "Instagram" },
                { letter: "FB", href: siteConfig.social.facebook, label: "Facebook" },
                { letter: "LI", href: siteConfig.social.linkedin, label: "LinkedIn" },
                { letter: "YT", href: siteConfig.social.youtube, label: "YouTube" },
              ].map(({ letter, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 hover:text-gold border border-white/10 hover:border-gold/30 flex items-center justify-center transition-all text-white/50"
                >
                  <span className="text-xs font-bold">{letter}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Beranda", id: "beranda" },
                { label: "Tentang Kami", id: "tentang" },
                { label: "Profil Notaris", id: "profil" },
                { label: "Artikel Hukum", id: "artikel" },
                { label: "Galeri", id: "galeri" },
                { label: "Testimoni", id: "testimoni" },
                { label: "Hubungi Kami", id: "kontak" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Layanan
            </h4>
            <div className="space-y-5">
              <div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-2">
                  Notaris
                </div>
                <ul className="space-y-2">
                  {notarisServices.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo("layanan")}
                        className="text-white/50 hover:text-gold text-sm transition-colors"
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-2">
                  PPAT
                </div>
                <ul className="space-y-2">
                  {ppatServices.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo("layanan")}
                        className="text-white/50 hover:text-gold text-sm transition-colors"
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Kontak
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 p-4 rounded-xl bg-gold/10 border border-gold/20">
              <p className="text-white/70 text-xs mb-3">
                Konsultasi gratis untuk klien baru
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-[oklch(0.15_0.025_264)] text-sm font-bold hover:bg-gold/90 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Kantor Notaris & PPAT Dr. Sari Dewi, S.H., M.Kn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs">Kebijakan Privasi</span>
            <span className="text-white/20 text-xs">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
