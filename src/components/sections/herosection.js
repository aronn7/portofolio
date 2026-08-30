import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6 py-12">
            <span className="text-indigo-400 font-medium tracking-wide mb-2">Halo, nama saya</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Alex Developer.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6">
                Saya membangun aplikasi web yang cepat dan responsif.
            </h2>
            <p className="text-slate-400 max-w-xl mb-8 leading-relaxed">
                Seorang Frontend Developer yang berfokus pada pengalaman pengguna yang baik,
                performa tinggi, dan penulisan kode yang bersih.
            </p>

            <div className="flex gap-4">
                <Link
                    href="#projects"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all"
                >
                    Lihat Karya Saya
                </Link>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="border border-slate-700 hover:border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-lg transition-all"
                >
                    Unduh CV
                </a>
            </div>
        </section>
    );
}