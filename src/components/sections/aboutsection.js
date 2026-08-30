import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Gambar / Foto Profil */}
                <div className="relative h-80 w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-slate-800">
                    <Image
                        src="/images/profile.jpg"
                        alt="Foto Alex Developer"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Deskripsi Teks */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Tentang Saya</h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded mb-6"></div>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
                        <p>
                            Saya seorang <strong>Frontend Developer</strong> yang berfokus membangun aplikasi web modern, efisien, dan ramah pengguna.
                        </p>
                        <p>
                            Dengan pemahaman mendalam tentang prinsip desain UI/UX dan struktur kode yang bersih, saya selalu berusaha menjembatani ide bisnis menjadi solusi digital yang nyata.
                        </p>
                        <p>
                            Saat ini saya fokus mengembangkan proyek menggunakan **Next.js**, **React**, dan **Tailwind CSS**.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}