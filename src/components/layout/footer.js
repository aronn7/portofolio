export default function Footer() {
    return (
        <footer className="border-t border-slate-800 py-8 bg-slate-950 text-slate-500 text-sm">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p>© 2026 Alex Developer. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Dribbble</a>
                </div>
            </div>
        </footer>
    );
}