import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig, services } from "@/data";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: siteConfig.address,
    link: siteConfig.mapUrl,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: siteConfig.phone,
    link: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phone,
    link: `https://wa.me/${siteConfig.whatsapp}`,
  },
];

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Email tidak valid";
    if (!form.whatsapp.trim()) e.whatsapp = "Nomor WhatsApp wajib diisi";
    if (!form.message.trim()) e.message = "Pesan wajib diisi";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Build WA message
    const msg = `*Konsultasi Notaris*%0A%0ANama: ${form.name}%0AEmail: ${form.email}%0AWhatsApp: ${form.whatsapp}%0ALayanan: ${form.service || "Belum dipilih"}%0APesan: ${form.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  return (
    <section id="kontak" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Hubungi Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Siap Membantu{" "}
            <span className="gold-text-gradient">Kebutuhan Hukum Anda</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Konsultasikan kebutuhan hukum Anda bersama kami. Respon cepat
            dalam 1x24 jam.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-navy rounded-3xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, link }) => (
                  <a
                    key={label}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0 group-hover:bg-gold/25 transition-colors">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">{label}</div>
                      <div className="text-white/90 text-sm group-hover:text-gold transition-colors leading-snug">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-gold" />
                  <h4 className="font-semibold">Jam Operasional</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Senin – Jumat</span>
                    <span className="text-white/90">08.00 – 17.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Sabtu</span>
                    <span className="text-white/90">08.00 – 13.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Minggu & Libur</span>
                    <span className="text-red-400">Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-secondary border border-border h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-gold mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Peta Lokasi</p>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold text-sm font-semibold hover:underline mt-1 block"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Anda akan diarahkan ke WhatsApp. Tim kami akan segera menghubungi Anda.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-border"
                  >
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-1">
                      Kirim Pesan
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Isi formulir di bawah untuk konsultasi gratis
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">
                        Nama Lengkap <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className={cn(errors.name && "border-destructive")}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className={cn(errors.email && "border-destructive")}
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">
                        Nomor WhatsApp <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="08xx-xxxx-xxxx"
                        className={cn(errors.whatsapp && "border-destructive")}
                      />
                      {errors.whatsapp && (
                        <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">
                        Layanan yang Diminati
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 dark:bg-input/30"
                      >
                        <option value="">Pilih Layanan</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">
                      Pesan <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan hukum Anda..."
                      rows={4}
                      className={cn(errors.message && "border-destructive")}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-navy hover:bg-navy/90 text-white font-bold h-11"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Kirim via WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 h-11 border-gold/40 text-gold hover:bg-gold/5"
                      onClick={() => {
                        window.open(
                          `https://wa.me/${siteConfig.whatsapp}?text=Halo, saya ingin konsultasi mengenai layanan notaris.`,
                          "_blank"
                        );
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat Langsung
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mengirim pesan, Anda menyetujui untuk dihubungi oleh
                    tim kami
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
