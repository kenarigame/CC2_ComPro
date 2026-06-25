// import { useState } from "react";
// import { X, ZoomIn } from "lucide-react";
// import { cn } from "@/lib/utils";

// const galleryItems = [
//   {
//     id: 1,
//     category: "Kantor",
//     title: "Ruang Utama",
//     gradient: "from-slate-700 to-slate-900",
//     cols: 2,
//     rows: 2,
//   },
//   {
//     id: 2,
//     category: "Meeting",
//     title: "Ruang Rapat",
//     gradient: "from-indigo-700 to-blue-900",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 3,
//     category: "Pelayanan",
//     title: "Konsultasi Klien",
//     gradient: "from-emerald-700 to-teal-900",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 4,
//     category: "Penandatanganan",
//     title: "Akta Signing",
//     gradient: "from-amber-700 to-orange-900",
//     cols: 1,
//     rows: 2,
//   },
//   {
//     id: 5,
//     category: "Kantor",
//     title: "Ruang Arsip",
//     gradient: "from-purple-700 to-violet-900",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 6,
//     category: "Pelayanan",
//     title: "Layanan Klien",
//     gradient: "from-rose-700 to-pink-900",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 7,
//     category: "Meeting",
//     title: "Presentasi",
//     gradient: "from-cyan-700 to-blue-900",
//     cols: 2,
//     rows: 1,
//   },
// ];

// const categories = [
//   "Semua",
//   "Kantor",
//   "Meeting",
//   "Pelayanan",
//   "Penandatanganan",
// ];

// function GallerySection() {
//   const [activeCategory, setActiveCategory] = useState("Semua");
//   const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(
//     null,
//   );

//   const filtered =
//     activeCategory === "Semua"
//       ? galleryItems
//       : galleryItems.filter((g) => g.category === activeCategory);

//   return (
//     <section id="galeri" className="section-padding bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
//             <span className="text-primary text-xs font-semibold uppercase tracking-wider">
//               Galeri
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
//             Galeri <span className="gold-text-gradient">Kantor Kami</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//             Sekilas pandang suasana kantor dan aktivitas pelayanan kami
//           </p>
//         </div>

//         {/* Filter */}
//         <div className="flex flex-wrap gap-2 justify-center mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={cn(
//                 "px-4 py-2 rounded-full text-sm font-medium transition-all",
//                 activeCategory === cat
//                   ? "bg-navy text-white shadow-md"
//                   : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80",
//               )}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Gallery grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
//           {filtered.map((item) => (
//             <div
//               key={item.id}
//               className={cn(
//                 "group relative rounded-2xl overflow-hidden cursor-pointer",
//                 item.cols === 2 && "md:col-span-2",
//                 item.rows === 2 && "row-span-2",
//               )}
//               onClick={() => setLightbox(item)}
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
//               />
//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
//                   <ZoomIn className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               {/* Label */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                 <div className="text-white/70 text-xs mb-0.5">
//                   {item.category}
//                 </div>
//                 <div className="text-white font-semibold text-sm">
//                   {item.title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//           onClick={() => setLightbox(null)}
//         >
//           <button
//             className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//             onClick={() => setLightbox(null)}
//           >
//             <X className="w-5 h-5" />
//           </button>
//           <div
//             className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div
//               className={`aspect-video bg-gradient-to-br ${lightbox.gradient} flex items-center justify-center`}
//             >
//               <div className="text-center text-white/50">
//                 <ZoomIn className="w-16 h-16 mx-auto mb-3" />
//                 <div className="text-lg font-semibold text-white">
//                   {lightbox.title}
//                 </div>
//                 <div className="text-sm">{lightbox.category}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default GallerySection;
