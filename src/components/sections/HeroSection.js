"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles, MapPin, CheckCircle2, Code2, Terminal } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
        >
            {/* Ambient background light gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] sm:h-[450px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text & Hero Intro */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Status Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-slate-700/60 shadow-glass mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-medium text-slate-300">
                                {personalInfo.status}
                            </span>
                        </div>

                        {/* Main Greeting & Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4">
                            Halo, Saya{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-accent-cyan">
                                {personalInfo.name}
                            </span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6">
                            {personalInfo.title}
                        </h2>

                        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                            {personalInfo.tagline} Mengubah ide dan visi menjadi aplikasi web yang cepat, responsif, dan memberikan pengalaman berkesan bagi pengguna.
                        </p>

                        {/* Call To Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                            <Button
                                href="/#projects"
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto"
                                icon={<ArrowRight className="w-4 h-4" />}
                            >
                                Jelajahi Proyek
                            </Button>
                            <Button
                                href="/resume.pdf"
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                                icon={<Download className="w-4 h-4" />}
                            >
                                Unduh CV / Resume
                            </Button>
                        </div>

                        {/* Highlights Mini-Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full">
                            {personalInfo.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-slate-400 mt-0.5 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Hero Profile Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* Outer Decorative Glow Rings */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-cyan rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

                            {/* Main Card Container */}
                            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                                {/* Profile Image with Ring */}
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-2xl overflow-hidden border-2 border-brand-500/30 p-1 mb-6 bg-gradient-to-br from-brand-500/20 to-transparent">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                                        <Image
                                            src={personalInfo.avatar}
                                            alt={personalInfo.name}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 192px, 192px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Card Info Box */}
                                <div className="text-center space-y-2 mb-6">
                                    <h3 className="text-xl font-bold text-white">
                                        {personalInfo.name}
                                    </h3>
                                    <p className="text-xs text-brand-400 font-mono">
                                        Frontend & Web Specialist
                                    </p>
                                    <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                        <span>{personalInfo.location}</span>
                                    </div>
                                </div>

                                {/* Floating Tech Badges */}
                                <div className="p-3.5 rounded-xl bg-surface-50/80 border border-surface-200/50 space-y-2 text-xs">
                                    <div className="flex items-center justify-between text-slate-300">
                                        <span className="flex items-center gap-1.5 text-slate-400">
                                            <Code2 className="w-3.5 h-3.5 text-brand-400" /> Stack Utama:
                                        </span>
                                        <span className="font-semibold text-slate-200">
                                            React • Next.js • Tailwind
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-slate-300">
                                        <span className="flex items-center gap-1.5 text-slate-400">
                                            <Terminal className="w-3.5 h-3.5 text-accent-cyan" /> Pengalaman:
                                        </span>
                                        <span className="font-semibold text-slate-200">
                                            Aplikasi Web Modern
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}