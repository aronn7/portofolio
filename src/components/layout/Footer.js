"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram, Twitter, ArrowUp, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
                    {/* Brand Col */}
                    <div className="md:col-span-2 space-y-4">
                        <Link
                            href="/#hero"
                            className="inline-flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white"
                        >
                            <span className="relative flex items-center justify-center w-8 h-8 rounded-xl overflow-hidden border border-brand-500/40 shadow-glow-sm bg-slate-800">
                                <Image
                                    src="/images/icon.jpg"
                                    alt="ARONN.DEV"
                                    width={32}
                                    height={32}
                                    className="object-cover w-full h-full"
                                />
                            </span>
                            <span>
                                ARONN<span className="text-brand-400">.DEV</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                            Membangun website dan aplikasi modern dengan fokus pada estetika visual, performa tinggi, dan pengalaman pengguna yang luar biasa.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>{personalInfo.status}</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigasi Cepat
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link href="/#hero" className="hover:text-brand-400 transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-brand-400 transition-colors">
                                    Tentang Saya
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills" className="hover:text-brand-400 transition-colors">
                                    Keahlian & Stack
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:text-brand-400 transition-colors">
                                    Proyek Pilihan
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-brand-400 transition-colors">
                                    Hubungi Saya
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Terhubung
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100/80 hover:bg-surface-200 border border-slate-700/60 hover:border-brand-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100/80 hover:bg-surface-200 border border-slate-700/60 hover:border-brand-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={personalInfo.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100/80 hover:bg-surface-200 border border-slate-700/60 hover:border-brand-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href={personalInfo.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100/80 hover:bg-surface-200 border border-slate-700/60 hover:border-brand-500/50 text-slate-300 hover:text-white transition-all hover:scale-105"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                            Kirim email ke: <br />
                            <span className="text-brand-300 font-mono text-[11px]">{personalInfo.email}</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
                    <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                            Dibuat dengan Next.js & Tailwind CSS
                        </span>
                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-300 hover:text-white transition-colors"
                            aria-label="Kembali ke atas"
                            title="Kembali ke atas"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}