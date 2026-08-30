import Link from "next/link";
import { Sparkles, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-cyan">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-slate-400 text-sm leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-medium text-sm shadow-glow-sm hover:shadow-glow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

