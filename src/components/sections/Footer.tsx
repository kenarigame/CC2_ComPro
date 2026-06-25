import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "../../data/site";
import { Link } from "react-router";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-page py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gold border border-white/10">
              <Scale className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-white font-semibold">{SITE.brandShort}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Trusted Law Office
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            Kantor Notaris & PPAT yang menyediakan layanan hukum profesional, aman, dan sesuai
            peraturan yang berlaku — untuk individu maupun korporasi.
          </p>
          {/* <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="text-white font-display text-sm font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Beranda", to: "/" },
              { label: "Tentang Kami", to: "/about" },
              { label: "Layanan", to: "/services" },
              { label: "Artikel", to: "/blog" },
              { label: "Kontak", to: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm font-semibold mb-4">Layanan</h4>
          <ul className="space-y-2.5 text-sm">
            {["Pendirian PT", "Akta Jual Beli", "Balik Nama", "Hak Tanggungan", "Legalisasi"].map(
              (l) => (
                <li key={l} className="hover:text-gold transition-colors">
                  {l}
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm font-semibold mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>{SITE.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {year} {SITE.name}. All Rights Reserved.</p>
          <p>Designed with integrity & precision.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;