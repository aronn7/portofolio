# 🚀 Modern & Aesthetic Web Portfolio

Sebuah website portofolio profesional berdesain modern, elegan (*luxury dark theme & glassmorphism*), ultra-responsif (Mobile, Tablet, Desktop), dan siap di-deploy ke platform mana pun tanpa kendala.

![Portfolio Preview](/public/images/projects/)

---

## ✨ Fitur Utama

- 🎨 **Aesthetic & Luxury Dark Theme**: Menggunakan perpaduan warna *Slate*, *Indigo Neon Glow*, dan *Cyan Accent* dengan efek *glassmorphism* dan ambient background.
- 📱 **100% Responsif (Mobile & Desktop)**: Tampilan fluid, drawer navigation interaktif di smartphone, dan tap-target optimal untuk perangkat sentuh.
- ⚡ **Performa & SEO Tinggi**: Dibangun dengan Next.js 14 App Router, dynamic metadata SEO, OpenGraph tags, dan optimasi gambar.
- 💼 **Showcase Proyek Lengkap**: Filter kategori proyek (*Fullstack, Web App, AI, Fintech*), kartu interaktif, dan halaman detail mendalam (`/projects/[slug]`).
- 🛠️ **Keahlian & Tech Stack**: Dikelompokkan rapi (Frontend, Backend, Tools) dengan level keahlian dan ikon modern.
- ⏳ **Career & Education Timeline**: Visualisasi riwayat karier dan pendidikan dengan desain timeline yang elegan.
- 📩 **Formulir Kontak & WhatsApp Direct**: Dilengkapi validasi formulir interaktif, integrasi endpoint API, direct WhatsApp chat, dan tombol salin email instan.
- 🛡️ **Zero-Error Deployment**: Struktur folder dan penamaan file standar POSIX/Linux, kompatibel penuh dengan Vercel, Netlify, VPS, maupun GitHub Pages.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library UI**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Tailwind Keyframes
- **Utility**: `clsx`, `tailwind-merge`

---

## 🚀 Panduan Menjalankan Project

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18.x atau lebih baru).

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Deployment

Website ini dirancang agar dapat di-deploy ke mana saja dengan sangat mudah:

### A. Deploy ke Vercel (Paling Direkomendasikan)
1. Push repository ini ke GitHub / GitLab.
2. Buka [Vercel](https://vercel.com/) dan buat project baru dari repository ini.
3. Vercel akan mendeteksi konfigurasi Next.js secara otomatis. Klik **Deploy**.

### B. Deploy ke Netlify
1. Hubungkan repository ke [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 📝 Kustomisasi Data Pribadi

Anda dapat dengan mudah mengubah informasi pribadi, keahlian, dan proyek melalui folder `src/data/`:
- **Profil & Kontak**: Ubah di `src/data/personalInfo.js`
- **Proyek**: Tambah / edit di `src/data/projects.js`
- **Keahlian**: Ubah di `src/data/skills.js`
- **Pengalaman**: Ubah di `src/data/experiences.js`
- **Foto Profil & Gambar**: Ganti file di dalam folder `public/images/`

---

## 📄 Lisensi
Hak Cipta © 2026 Ahmad Rommy Q (aronn.dev). Dibuat dengan dedikasi dan cinta untuk web modern.

