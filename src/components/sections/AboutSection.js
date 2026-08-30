"use client";

import Image from "next/image";
import { Layout, Server, Smartphone, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import SectionTitle from "@/components/ui/SectionTitle";

const serviceIcons = {
    Layout: Layout,
    Server: Server,
    Smartphone: Smartphone,
    Zap: Zap,
};

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    badge="Tentang Saya"
                    title="Mengenal Lebih Dekat"
                    subtitle="Dedikasi untuk merancang pengalaman web terbaik dengan menggabungkan keindahan visual dan arsitektur kode mutakhir."
                />

                {/* Top Feature Highlights: 2-Column Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
                    {/* Left Column: Image with Glass Frame */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* Decorative Frame */}
                            <div className="relative rounded-3xl overflow-hidden border border-surface-200/80 bg-surface-50/70 p-3 shadow-glass">
                                <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-800">
                                    <Image
                                        src={personalInfo.aboutAvatar || "/images/profile2.jpg"}
                                        alt={personalInfo.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 384px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                    {/* Floating badge inside image */}
                                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                                        <p className="text-xs text-brand-300 font-semibold mb-0.5">{personalInfo.name}</p>
                                        <p className="text-[11px] text-slate-400">Frontend & Fullstack Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio Narrative & Principles */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Filosofi Pengembangan</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                            Menjembatani Desain Menawan dengan Eksekusi Teknis yang Presisi.
                        </h3>

                        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                            <p>
                                {personalInfo.bio}
                            </p>
                            <p>
                                {personalInfo.philosophy}
                            </p>
                        </div>

                        {/* Value checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Pixel-Perfect Responsive UI</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Clean & Maintainable Code</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Fast Loading & SEO Optimized</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Modern React / Next.js Ecosystem</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I Do: Services Grid */}
                <div className="mt-12">
                    <div className="text-center mb-8">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            Layanan & Bidang Keahlian
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                            Solusi yang siap saya berikan untuk mengembangkan produk digital Anda ke tingkat berikutnya.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {personalInfo.services.map((service, index) => {
                            const IconComp = (service && service.icon && serviceIcons[service.icon]) || Layout;
                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl bg-surface-50/70 hover:bg-surface-100/90 border border-surface-200/60 hover:border-brand-500/40 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1 backdrop-blur-sm"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                        <IconComp className="w-6 h-6" />
                                    </div>
                                    <h5 className="text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                                        {service.title}
                                    </h5>
                                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}