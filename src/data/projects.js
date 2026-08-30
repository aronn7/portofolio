export const projectsData = [
  {
    id: "1",
    slug: "modern-ecommerce-platform",
    title: "LuxeVogue - E-Commerce Fashion Platform",
    category: "Fullstack",
    featured: true,
    summary: "Platform e-commerce fashion modern dengan katalog produk dinamis, cart interaktif, sistem checkout, dan filter kategori canggih.",
    description: "LuxeVogue adalah aplikasi web belanja fashion yang dibangun menggunakan Next.js 14 App Router dan Tailwind CSS. Mengedepankan pengalaman visual eksklusif, micro-interactions yang mulus, sistem keranjang belanja berbasis local state, pencarian produk instan, serta integrasi simulasi payment gateway.",
    image: "/images/projects/projects-1.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    demoLink: "https://example.com/demo-ecommerce",
    githubLink: "https://github.com/aronnr7/luxevogue-ecommerce",
    year: "2024",
    highlights: [
      "Performa 98+ pada Google Lighthouse dengan SSR & Image Optimization",
      "Pencarian & filter instan multi-kriteria (ukuran, warna, rentang harga)",
      "Sistem cart & checkout responsif dengan validasi formulir lengkap",
      "Desain adaptif seamless di semua resolusi perangkat mobile dan desktop"
    ],
  },
  {
    id: "2",
    slug: "task-flow-management",
    title: "TaskFlow - Tim & Project Management Dashboard",
    category: "Web App",
    featured: true,
    summary: "Aplikasi manajemen proyek kolaboratif dengan tampilan Kanban board, tracking deadline, dan analitik produktivitas tim.",
    description: "TaskFlow dirancang untuk mempermudah alur kerja tim kreatif dan developer. Dilengkapi dengan antarmuka Kanban yang intuitif, visualisasi progres proyek interaktif menggunakan chart, pengingat tenggat waktu, dan sistem filter prioritas tugas.",
    image: "/images/projects/projects-2.png",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Lucide Icons"],
    demoLink: "https://example.com/demo-taskflow",
    githubLink: "https://github.com/aronnr7/taskflow-dashboard",
    year: "2024",
    highlights: [
      "Interaksi Kanban board yang responsif dan lancar",
      "Dashboard analitik metrik performa dan penyelesaian sprint mingguan",
      "Fitur mode gelap (Dark Mode) yang nyaman untuk mata",
      "Penyimpanan lokal cerdas dengan persistensi data yang andal"
    ],
  },
  {
    id: "3",
    slug: "ai-content-generator",
    title: "AI Studio - Content Generation & Prompt Platform",
    category: "AI & Tools",
    featured: true,
    summary: "Platform pembuat konten dan copywriter otomatis bertenaga AI dengan preview instan dan integrasi API cerdas.",
    description: "Aplikasi berbasis web yang memanfaatkan model AI generatif untuk membantu marketer dan kreator membuat artikel, caption media sosial, dan ide konten dalam hitungan detik. Menggunakan streaming response untuk pengalaman pengguna yang cepat dan responsif.",
    image: "/images/projects/projects-1.png",
    techStack: ["Next.js", "Tailwind CSS", "OpenAI API", "Node.js"],
    demoLink: "https://example.com/demo-ai-studio",
    githubLink: "https://github.com/aronnr7/ai-content-studio",
    year: "2024",
    highlights: [
      "Text streaming response bertenaga Server-Sent Events (SSE)",
      "Template prompt siap pakai untuk berbagai industri bisnis",
      "Fitur export to Markdown & PDF dalam satu klik",
      "Desain glassmorphic yang futuristik dan elegan"
    ],
  },
  {
    id: "4",
    slug: "crypto-analytics-tracker",
    title: "CryptoPulse - Real-time Market Analytics",
    category: "Fintech",
    featured: false,
    summary: "Tracker pasar aset kripto real-time dengan chart interaktif, visualisasi tren harga, dan alert notifikasi.",
    description: "CryptoPulse memberikan data pasar mata uang kripto terkini secara real-time melalui WebSocket dan REST API. Menampilkan indikator teknikal penting, konverter mata uang global, dan kalkulator portofolio investasi.",
    image: "/images/projects/projects-2.png",
    techStack: ["React.js", "Tailwind CSS", "REST API"],
    demoLink: "https://example.com/demo-cryptopulse",
    githubLink: "https://github.com/aronnr7/cryptopulse-tracker",
    year: "2023",
    highlights: [
      "Pembaruan data harga real-time tanpa refresh halaman",
      "Visualisasi chart interaktif dengan time-range kustom (24h, 7d, 1y)",
      "Optimasi caching API untuk menghemat konsumsi bandwidth",
      "Tampilan mobile-first yang nyaman digunakan saat bepergian"
    ],
  },
];

export default projectsData;
