import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold text-white tracking-wider">
                    ALEX<span className="text-indigo-500">.DEV</span>
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                    <Link href="#about" className="hover:text-indigo-400 transition-colors">Tentang</Link>
                    <Link href="#projects" className="hover:text-indigo-400 transition-colors">Proyek</Link>
                    <Link href="#skills" className="hover:text-indigo-400 transition-colors">Keahlian</Link>
                    <Link href="#contact" className="hover:text-indigo-400 transition-colors">Kontak</Link>
                </nav>

                <a
                    href="#contact"
                    className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                    Hubungi Saya
                </a>
            </div>
        </header>
    );
}