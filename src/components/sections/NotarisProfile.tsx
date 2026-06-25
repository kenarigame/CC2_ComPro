import { GraduationCap, Award, MapPin, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notarisProfile } from "@/data";

function NotarisProfile() {
  return (
    <section id="profil" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Profil Notaris
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Kenali <span className="gold-text-gradient">Notaris Kami</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Didukung oleh notaris berpengalaman dengan kualifikasi dan rekam
            jejak yang terbukti
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left - Photo & Basic Info */}
            <div className="md:col-span-2">
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
                {/* Profile Photo placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-navy to-[oklch(0.25_0.04_264)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold text-4xl font-black">SD</span>
                    </div>
                    <div className="text-white/50 text-sm px-4">
                      Foto Notaris
                    </div>
                  </div>
                  {/* Gold accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                </div>

                <div className="p-6">
                  <h3 className="font-black text-foreground text-lg leading-tight mb-1">
                    {notarisProfile.name}
                  </h3>
                  <p className="text-gold text-sm font-semibold mb-4">
                    {notarisProfile.title}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <div className="text-muted-foreground text-xs">
                          SK Pengangkatan
                        </div>
                        <div className="text-foreground font-medium text-xs leading-tight">
                          {notarisProfile.sk}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <div className="text-muted-foreground text-xs">
                          Wilayah
                        </div>
                        <div className="text-foreground font-medium text-xs">
                          {notarisProfile.wilayah}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <div className="text-muted-foreground text-xs">
                          Pengalaman
                        </div>
                        <div className="text-foreground font-medium text-xs">
                          {notarisProfile.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="md:col-span-3 space-y-6">
              {/* Bio */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h4 className="font-bold text-foreground mb-3">
                  Tentang Notaris
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {notarisProfile.bio}
                </p>
              </div>

              {/* Education */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-gold" />
                  </div>
                  <h4 className="font-bold text-foreground">Pendidikan</h4>
                </div>
                <ul className="space-y-2.5">
                  {notarisProfile.education.map((edu, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {edu}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                    <Award className="w-4 h-4 text-gold" />
                  </div>
                  <h4 className="font-bold text-foreground">Bidang Keahlian</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {notarisProfile.expertise.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-navy/10 text-navy border-navy/20 dark:bg-gold/10 dark:text-gold dark:border-gold/20 font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Organizations */}
              <div className="bg-navy rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4">
                  Keanggotaan Organisasi
                </h4>
                <div className="space-y-2.5">
                  {notarisProfile.organizations.map((org) => (
                    <div key={org} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0">
                        <span className="text-[oklch(0.15_0.025_264)] text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-white/80 text-sm">{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotarisProfile;
