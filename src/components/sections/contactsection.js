export default function ContactSection() {
    return (
        <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Mari Bekerja Sama</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto mb-4"></div>
                <p className="text-slate-400">
                    Saya terbuka untuk proyek *freelance*, diskusi pekerjaan *full-time*, atau sekadar menyapa.
                </p>
            </div>

            <form className="max-w-xl mx-auto space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Nama</label>
                    <input
                        type="text"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                        placeholder="Nama Anda"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                        placeholder="email@domain.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Pesan</label>
                    <textarea
                        rows="4"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                        placeholder="Tuliskan pesan atau detail proyek..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                    Kirim Pesan
                </button>
            </form>
        </section>
    );
}