export const siteConfig = {
  name: "Notaris & PPAT Dr. Sari Dewi, S.H., M.Kn.",
  shortName: "Notaris Sari Dewi",
  description:
    "Kantor Notaris & PPAT terpercaya yang berkomitmen memberikan pelayanan hukum terbaik untuk individu, perusahaan, dan investor.",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "info@notarissaridewi.co.id",
  address:
    "Jl. Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta Selatan 12190",
  mapUrl: "https://maps.google.com/?q=-6.2088,106.8456",
  hours: {
    weekday: "Senin – Jumat: 08.00 – 17.00 WIB",
    saturday: "Sabtu: 08.00 – 13.00 WIB",
    sunday: "Minggu & Hari Libur: Tutup",
  },
  social: {
    instagram: "https://instagram.com/notarissaridewi",
    facebook: "https://facebook.com/notarissaridewi",
    linkedin: "https://linkedin.com/company/notarissaridewi",
    youtube: "https://youtube.com/@notarissaridewi",
  },
};

export const stats = [
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
  { value: 2000, suffix: "+", label: "Klien Terlayani" },
  { value: 5000, suffix: "+", label: "Akta Diselesaikan" },
  { value: 99, suffix: "%", label: "Kepuasan Klien" },
];

export const notarisProfile = {
  name: "Dr. Sari Dewi, S.H., M.Kn.",
  title: "Notaris & PPAT",
  sk: "AHU-01234.AH.02.01 Tahun 2009",
  wilayah: "Kota Jakarta Selatan",
  photo: "/notaris-profile.jpg",
  experience: "15+ Tahun",
  education: [
    "S1 Hukum – Universitas Indonesia",
    "S2 Kenotariatan – Universitas Indonesia",
    "S3 Ilmu Hukum – Universitas Gadjah Mada",
  ],
  expertise: [
    "Hukum Perusahaan",
    "Hukum Pertanahan",
    "Hukum Kontrak",
    "Hukum Keluarga",
    "Merger & Akuisisi",
  ],
  organizations: ["INI (Ikatan Notaris Indonesia)", "IPPAT (Ikatan Pejabat Pembuat Akta Tanah)"],
  bio: "Dr. Sari Dewi adalah seorang Notaris & PPAT berpengalaman dengan lebih dari 15 tahun dalam bidang hukum. Beliau dikenal sebagai praktisi hukum yang profesional, cermat, dan berintegritas tinggi dalam setiap penanganan kasus.",
};

export type ServiceItem = {
  id: string;
  category: "notaris" | "ppat";
  icon: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    id: "pendirian-pt",
    category: "notaris",
    icon: "Building2",
    title: "Pendirian PT",
    description:
      "Proses pendirian Perseroan Terbatas (PT) lengkap mulai dari penyusunan akta hingga pengesahan Kemenkumham.",
  },
  {
    id: "pendirian-cv",
    category: "notaris",
    icon: "Briefcase",
    title: "Pendirian CV",
    description:
      "Pendirian Commanditaire Vennootschap (CV) dengan proses cepat dan dokumen lengkap sesuai regulasi.",
  },
  {
    id: "akta-perubahan",
    category: "notaris",
    icon: "FileEdit",
    title: "Akta Perubahan Perusahaan",
    description:
      "Perubahan anggaran dasar, susunan pengurus, modal, dan perubahan lainnya pada perusahaan.",
  },
  {
    id: "akta-perjanjian",
    category: "notaris",
    icon: "Handshake",
    title: "Akta Perjanjian",
    description:
      "Pembuatan akta perjanjian yang sah secara hukum untuk berbagai keperluan bisnis dan pribadi.",
  },
  {
    id: "akta-hibah",
    category: "notaris",
    icon: "Gift",
    title: "Akta Hibah",
    description:
      "Pemindahan hak milik harta benda melalui akta hibah yang berkekuatan hukum tetap.",
  },
  {
    id: "akta-wasiat",
    category: "notaris",
    icon: "ScrollText",
    title: "Akta Wasiat",
    description:
      "Penyusunan surat wasiat autentik untuk melindungi hak waris sesuai keinginan pemberi wasiat.",
  },
  {
    id: "legalisasi",
    category: "notaris",
    icon: "Stamp",
    title: "Legalisasi Dokumen",
    description:
      "Legalisasi berbagai dokumen penting agar diakui secara hukum untuk keperluan dalam dan luar negeri.",
  },
  {
    id: "waarmerking",
    category: "notaris",
    icon: "BookCheck",
    title: "Waarmerking",
    description:
      "Pendaftaran dokumen di buku daftar khusus kantor notaris sebagai bukti keaslian dokumen.",
  },
  {
    id: "ajb",
    category: "ppat",
    icon: "FileSignature",
    title: "Akta Jual Beli (AJB)",
    description:
      "Pembuatan Akta Jual Beli tanah dan bangunan yang sah sesuai ketentuan hukum pertanahan.",
  },
  {
    id: "balik-nama",
    category: "ppat",
    icon: "ArrowLeftRight",
    title: "Balik Nama Sertifikat",
    description:
      "Proses pemindahan hak atas nama sertifikat tanah setelah transaksi jual beli atau hibah.",
  },
  {
    id: "hak-tanggungan",
    category: "ppat",
    icon: "Shield",
    title: "Hak Tanggungan",
    description:
      "Pembuatan APHT dan SKMHT untuk jaminan kredit menggunakan hak atas tanah sebagai agunan.",
  },
  {
    id: "roya",
    category: "ppat",
    icon: "Unlock",
    title: "Roya",
    description:
      "Penghapusan hak tanggungan dari sertifikat tanah setelah pelunasan kredit bank.",
  },
  {
    id: "pemecahan",
    category: "ppat",
    icon: "Split",
    title: "Pemecahan Sertifikat",
    description:
      "Pemecahan satu sertifikat induk menjadi beberapa sertifikat sesuai kebutuhan.",
  },
  {
    id: "shm",
    category: "ppat",
    icon: "Home",
    title: "SHM (Sertifikat Hak Milik)",
    description:
      "Pengurusan Sertifikat Hak Milik atas tanah untuk kepastian hukum kepemilikan.",
  },
  {
    id: "hgb",
    category: "ppat",
    icon: "LandPlot",
    title: "HGB (Hak Guna Bangunan)",
    description:
      "Pengurusan Hak Guna Bangunan dan perpanjangannya untuk kebutuhan properti bisnis.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Konsultasi",
    description: "Diskusi awal mengenai kebutuhan hukum Anda secara gratis.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Pengumpulan Dokumen",
    description: "Kami akan memberi daftar dokumen yang perlu Anda siapkan.",
    icon: "FolderOpen",
  },
  {
    step: 3,
    title: "Verifikasi",
    description: "Tim kami memverifikasi kelengkapan dan keabsahan dokumen.",
    icon: "Search",
  },
  {
    step: 4,
    title: "Pembuatan Akta",
    description: "Notaris menyusun akta sesuai ketentuan hukum yang berlaku.",
    icon: "FileText",
  },
  {
    step: 5,
    title: "Penandatanganan",
    description: "Para pihak hadir untuk menandatangani akta di hadapan notaris.",
    icon: "PenLine",
  },
  {
    step: 6,
    title: "Dokumen Selesai",
    description: "Dokumen asli diserahkan kepada klien disertai salinan resmi.",
    icon: "CheckCircle2",
  },
];

export const features = [
  {
    icon: "Award",
    title: "Profesional",
    description:
      "Didukung tim yang berpendidikan tinggi dan bersertifikat resmi dari instansi yang berwenang.",
  },
  {
    icon: "Clock",
    title: "Berpengalaman",
    description:
      "Lebih dari 15 tahun menangani ribuan kasus hukum dari berbagai klien dan perusahaan.",
  },
  {
    icon: "Eye",
    title: "Transparan",
    description:
      "Biaya dan proses yang jelas, tidak ada biaya tersembunyi. Kami menjunjung tinggi kejujuran.",
  },
  {
    icon: "Zap",
    title: "Cepat & Efisien",
    description:
      "Proses yang terstruktur dan sistematis memastikan penyelesaian akta tepat waktu.",
  },
  {
    icon: "Lock",
    title: "Aman & Terjamin",
    description:
      "Setiap dokumen dijaga kerahasiaannya dan disimpan dengan standar keamanan tertinggi.",
  },
  {
    icon: "Star",
    title: "Terpercaya",
    description:
      "Dipercaya lebih dari 2.000 klien dan perusahaan terkemuka di seluruh Indonesia.",
  },
];

export const articles = [
  {
    id: 1,
    title: "Cara Mendirikan PT di Indonesia Tahun 2025",
    summary:
      "Panduan lengkap mendirikan Perseroan Terbatas mulai dari persyaratan modal, dokumen, hingga proses di Kemenkumham.",
    category: "Hukum Perusahaan",
    date: "15 Januari 2025",
    readTime: "8 menit",
    image: "/article-pt.jpg",
    slug: "cara-mendirikan-pt-2025",
  },
  {
    id: 2,
    title: "Perbedaan PT dan CV: Pilih Mana untuk Bisnis Anda?",
    summary:
      "Memahami perbedaan mendasar antara PT dan CV dari sisi hukum, tanggung jawab, modal, dan kemudahan pengelolaan.",
    category: "Hukum Perusahaan",
    date: "8 Januari 2025",
    readTime: "6 menit",
    image: "/article-cv.jpg",
    slug: "perbedaan-pt-dan-cv",
  },
  {
    id: 3,
    title: "Proses Jual Beli Tanah yang Aman dan Legal",
    summary:
      "Langkah-langkah yang harus dilakukan saat membeli tanah agar terhindar dari sengketa dan penipuan.",
    category: "Hukum Pertanahan",
    date: "2 Januari 2025",
    readTime: "7 menit",
    image: "/article-tanah.jpg",
    slug: "proses-jual-beli-tanah",
  },
  {
    id: 4,
    title: "Pentingnya Akta Notaris untuk Perlindungan Hukum",
    summary:
      "Mengapa akta notaris memiliki kekuatan hukum yang lebih kuat dibandingkan dokumen biasa dan bagaimana melindungi kepentingan Anda.",
    category: "Notaris",
    date: "27 Desember 2024",
    readTime: "5 menit",
    image: "/article-akta.jpg",
    slug: "pentingnya-akta-notaris",
  },
  {
    id: 5,
    title: "Mengenal Hak Tanggungan dalam Kredit Properti",
    summary:
      "Apa itu hak tanggungan, bagaimana cara kerjanya, dan apa yang perlu diketahui sebelum mengajukan kredit properti.",
    category: "Hukum Pertanahan",
    date: "20 Desember 2024",
    readTime: "6 menit",
    image: "/article-ht.jpg",
    slug: "hak-tanggungan-kredit-properti",
  },
  {
    id: 6,
    title: "Wasiat dan Hibah: Perbedaan dan Cara Pembuatannya",
    summary:
      "Memahami perbedaan antara wasiat dan hibah dalam hukum Indonesia serta prosedur pembuatan aktanya.",
    category: "Hukum Keluarga",
    date: "15 Desember 2024",
    readTime: "7 menit",
    image: "/article-wasiat.jpg",
    slug: "wasiat-dan-hibah",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT Maju Jaya Tbk",
    role: "Direktur Utama",
    rating: 5,
    photo: "/testimonial-1.jpg",
    content:
      "Pelayanan yang sangat profesional dan cepat. Pendirian PT kami selesai dalam waktu 10 hari kerja. Tim Notaris Sari Dewi sangat membantu dan komunikatif selama proses berlangsung.",
  },
  {
    id: 2,
    name: "Rina Kusuma",
    company: "Pribadi",
    role: "Pengusaha",
    rating: 5,
    photo: "/testimonial-2.jpg",
    content:
      "Proses jual beli tanah saya berjalan lancar dan aman. Saya sangat terbantu dengan penjelasan detail dari tim notaris. Tidak ada biaya tersembunyi dan semua transparan.",
  },
  {
    id: 3,
    name: "Hendri Wijaya",
    company: "CV Sukses Bersama",
    role: "Pemilik",
    rating: 5,
    photo: "/testimonial-3.jpg",
    content:
      "Sudah 3 kali menggunakan jasa kantor ini dan selalu puas. Prosesnya cepat, dokumen rapi, dan staff-nya ramah. Sangat direkomendasikan untuk urusan legal bisnis.",
  },
  {
    id: 4,
    name: "Dewi Anggraeni",
    company: "PT Sentosa Group",
    role: "Legal Manager",
    rating: 5,
    photo: "/testimonial-4.jpg",
    content:
      "Kami mempercayakan semua kebutuhan akta notaris perusahaan kepada kantor ini. Responsif, profesional, dan memahami kebutuhan bisnis korporasi dengan baik.",
  },
  {
    id: 5,
    name: "Agus Triyanto",
    company: "Pribadi",
    role: "Pensiunan PNS",
    rating: 5,
    photo: "/testimonial-5.jpg",
    content:
      "Proses pembuatan akta wasiat berjalan dengan baik. Notaris menjelaskan dengan sabar dan teliti. Semua pertanyaan saya dijawab dengan jelas. Terima kasih.",
  },
];

export const faqs = [
  {
    question: "Berapa biaya pembuatan akta pendirian PT?",
    answer:
      "Biaya pembuatan akta pendirian PT bervariasi tergantung modal dasar perusahaan, mulai dari Rp 3.500.000 hingga Rp 10.000.000. Hubungi kami untuk konsultasi gratis dan penawaran sesuai kebutuhan Anda.",
  },
  {
    question: "Berapa lama proses pembuatan AJB (Akta Jual Beli)?",
    answer:
      "Proses AJB biasanya memakan waktu 3-7 hari kerja setelah semua dokumen lengkap. Waktu bisa lebih cepat atau lebih lama tergantung kelengkapan dokumen dan kondisi sertifikat tanah.",
  },
  {
    question: "Dokumen apa saja yang dibutuhkan untuk pendirian PT?",
    answer:
      "Dokumen yang diperlukan antara lain: KTP semua pendiri dan pengurus, NPWP, foto 3x4, bukti kepemilikan tempat usaha atau surat domisili, dan rencana modal dasar/ditempatkan/disetor.",
  },
  {
    question: "Apakah bisa melakukan konsultasi secara online?",
    answer:
      "Ya, kami menyediakan layanan konsultasi online melalui WhatsApp, Zoom, atau Google Meet. Konsultasi awal gratis dan bisa dijadwalkan sesuai waktu yang Anda inginkan.",
  },
  {
    question: "Apakah kantor ini melayani klien dari luar kota?",
    answer:
      "Ya, kami melayani klien dari seluruh Indonesia. Untuk kasus tertentu, kami bisa mengatur penandatanganan di lokasi klien atau melalui kuasa yang ditunjuk.",
  },
  {
    question: "Bagaimana cara mengurus balik nama sertifikat?",
    answer:
      "Untuk balik nama sertifikat, diperlukan AJB yang dibuat di hadapan PPAT, kemudian didaftarkan ke BPN setempat. Proses ini biasanya memakan waktu 2-4 minggu. Kami akan membantu semua proses dari awal hingga selesai.",
  },
];
