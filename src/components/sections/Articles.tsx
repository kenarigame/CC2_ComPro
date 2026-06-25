import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/data";

const categoryColors: Record<string, string> = {
  "Hukum Perusahaan":
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  "Hukum Pertanahan":
    "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  Notaris:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  "Hukum Keluarga":
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
};

// Gradient placeholders for article images
const articleGradients = [
  "from-blue-600 to-indigo-700",
  "from-emerald-600 to-teal-700",
  "from-amber-600 to-orange-700",
  "from-purple-600 to-violet-700",
  "from-cyan-600 to-blue-700",
  "from-rose-600 to-pink-700",
];

function ArticlesSection() {
  const featured = articles[0];
  const rest = articles.slice(1, 4);

  return (
    <section id="artikel" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Artikel Hukum
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              Wawasan &{" "}
              <span className="gold-text-gradient">Edukasi Hukum</span>
            </h2>
            <p className="text-muted-foreground">
              Artikel informatif untuk membantu Anda memahami hukum dengan mudah
            </p>
          </div>
          <Button
            variant="outline"
            className="shrink-0 border-border hover:bg-secondary"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured Article */}
          <div className="lg:col-span-3">
            <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              {/* Image */}
              <div
                className={`relative h-56 bg-gradient-to-br ${articleGradients[0]} flex items-center justify-center`}
              >
                <div className="text-center">
                  <Tag className="w-12 h-12 text-white/40 mx-auto mb-2" />
                  <span className="text-white/40 text-sm">
                    {featured.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Badge
                  className={`absolute bottom-4 left-4 border text-xs ${categoryColors[featured.category] || "bg-secondary"}`}
                >
                  {featured.category}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="font-black text-foreground text-xl mb-3 leading-tight group-hover:text-gold transition-colors">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {featured.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-3 transition-all">
                    Baca <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          <div className="lg:col-span-2 space-y-4">
            {rest.map((article, idx) => (
              <div
                key={article.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex gap-0"
              >
                {/* Small image */}
                <div
                  className={`w-24 sm:w-32 shrink-0 bg-gradient-to-br ${articleGradients[idx + 1]} flex items-center justify-center`}
                >
                  <Tag className="w-6 h-6 text-white/40" />
                </div>

                <div className="p-4 flex-1 min-w-0">
                  <Badge
                    className={`mb-2 text-xs border ${categoryColors[article.category] || "bg-secondary"}`}
                    variant="outline"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="font-bold text-foreground text-sm leading-tight mb-1.5 group-hover:text-gold transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* More articles indicator */}
            <div className="bg-secondary/50 rounded-2xl p-4 border border-border border-dashed text-center">
              <p className="text-muted-foreground text-sm mb-2">
                +{articles.length - 4} artikel lainnya
              </p>
              <button className="text-gold text-sm font-semibold hover:underline flex items-center gap-1 mx-auto">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
