export const projectsData = [
  {
    id: "1",
    slug: "aronn-tic-tac-toe",
    title: "AronnTicTacToe - Game Strategi X dan O",
    category: "Web Game",
    featured: true,
    summary: "Game Tic-Tac-Toe untuk dua pemain di perangkat yang sama atau melawan komputer dengan tiga tingkat kesulitan.",
    description: "AronnTicTacToe adalah game strategi X dan O berbasis React dan TypeScript. Pemain dapat bertanding dengan teman di perangkat yang sama atau melawan komputer, mulai dari langkah acak pada mode Mudah hingga algoritma Minimax pada mode Sulit. Papan skor mencatat kemenangan X, O, dan hasil seri, dengan tampilan gelap yang responsif serta dukungan keyboard.",
    image: "/images/projects/projects-1.png",
    techStack: ["React", "TypeScript", "Vite", "Zustand", "CSS", "Vitest"],
    demoLink: "https://aronntictactoe.vercel.app",
    githubLink: "https://github.com/aronn7/TicTacToe",
    year: "2026",
    highlights: [
      "Mode dua pemain lokal dan pemain melawan komputer",
      "AI Mudah, Sedang, dan Sulit dengan algoritma Minimax",
      "Deteksi kemenangan dan seri, sorotan kotak pemenang, serta papan skor yang dapat direset",
      "Tampilan responsif dengan dukungan keyboard dan label aksesibilitas"
    ],
  },
  {
    id: "2",
    slug: "aronn-sudoku",
    title: "AronnSudoku - Puzzle Angka Interaktif",
    category: "Web Game",
    featured: true,
    summary: "Game Sudoku 9x9 dengan lima tingkat kesulitan, timer, batas kesalahan, serta bantuan untuk melatih logika.",
    description: "AronnSudoku adalah permainan puzzle angka berbasis React, Vite, dan Tailwind CSS. Puzzle dibuat secara acak sesuai tingkat kesulitan, dari Easy hingga Grandmaster. Pemain dapat memantau waktu, membatalkan langkah, menghapus angka, dan menggunakan hingga tiga bantuan dengan jeda satu menit. Sorotan baris, kolom, kotak, serta angka yang sama membantu membaca papan permainan.",
    image: "/images/projects/projects-2.png",
    techStack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    demoLink: "https://aronnsudoku.vercel.app",
    githubLink: "https://github.com/aronn7/Sudoku",
    year: "2026",
    highlights: [
      "Lima tingkat kesulitan: Easy, Normal, Hard, Expert, dan Grandmaster",
      "Generator puzzle acak dan solver dengan algoritma backtracking",
      "Timer permainan, validasi angka, dan batas tiga kesalahan",
      "Undo, hapus angka, dan tiga bantuan dengan jeda satu menit"
    ],
  },
  {
    id: "3",
    slug: "aronnblocks",
    title: "AronnBlocks - Game Block Puzzle",
    category: "Fullstack",
    featured: true,
    summary: "Game block puzzle bertema neon dengan mode Classic dan Adventure, sistem combo, achievement, serta integrasi leaderboard Supabase.",
    description: "AronnBlocks adalah game puzzle berbasis Next.js dan TypeScript dengan maskot robot Aronn. Mode Classic menantang pemain menyusun blok pada papan 8x8 untuk menghapus baris dan kolom serta membangun combo. Mode Adventure menghadirkan enam level dengan misi dan rintangan khusus. Pemain dapat bermain sebagai tamu dengan progres lokal, atau menggunakan integrasi akun dan leaderboard melalui Supabase.",
    image: "/images/projects/projects-3.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Supabase", "Vitest"],
    demoLink: "https://aronnblocks.vercel.app",
    githubLink: "https://github.com/aronn7/aronnblocks",
    year: "2026",
    highlights: [
      "Mode Classic dengan papan 8x8, drag-and-drop untuk mouse dan layar sentuh, serta penyimpanan otomatis",
      "Enam level Adventure, termasuk level boss, dengan misi dan rintangan Stone, Lock, Ice, serta Crystal",
      "Sistem skor, combo, achievement, level pemain, dan XP",
      "Mode tamu dengan progres lokal serta integrasi autentikasi dan leaderboard Supabase"
    ],
  },
];

export default projectsData;
