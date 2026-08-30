"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "Beranda", href: "/#hero" },
    { name: "Tentang", href: "/#about" },
    { name: "Keahlian", href: "/#skills" },
    { name: "Proyek", href: "/#projects" },
    { name: "Pengalaman", href: "/#experience" },
    { name: "Kontak", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Track scroll position to adjust navbar style and active link
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Check section in viewport
            const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scroll when mobile drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-glass py-3.5"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        href="/#hero"
                        className="group flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white focus:outline-none"
                        onClick={closeMenu}
                    >
                        <span className="relative flex items-center justify-center w-8 h-8 rounded-xl overflow-hidden border border-brand-500/40 shadow-glow-sm group-hover:scale-105 transition-transform bg-slate-800">
                            <Image
                                src="/images/icon.jpg"
                                alt="ARONN.DEV"
                                width={32}
                                height={32}
                                className="object-cover w-full h-full"
                            />
                        </span>
                        <span className="font-sans">
                            ARONN<span className="text-brand-400">.DEV</span>
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block"></span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-surface-50/60 border border-surface-200/40 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace("/#", "");
                            const isActive = activeSection === sectionId;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                        ? "bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30 shadow-glow-sm"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Button & Profile Icon */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            href="/#contact"
                            variant="primary"
                            size="sm"
                            icon={<Send className="w-3.5 h-3.5" />}
                        >
                            Hubungi Saya
                        </Button>
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-brand-500/40 shadow-glow-sm hover:scale-105 transition-transform" title="Ahmad Rommy Q">
                            <Image
                                src="/images/icon.jpg"
                                alt="Ahmad Rommy Q"
                                width={36}
                                height={36}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-500/40">
                            <Image
                                src="/images/icon.jpg"
                                alt="Ahmad Rommy Q"
                                width={32}
                                height={32}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-xl bg-surface-50/90 border border-surface-200/80 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Backdrop & Drawer */}
            <div
                className={`fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeMenu}
            >
                <div
                    className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-900/95 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                            <Link
                                href="/#hero"
                                className="flex items-center gap-2.5 text-lg font-bold text-white"
                                onClick={closeMenu}
                            >
                                <span className="relative flex items-center justify-center w-7 h-7 rounded-lg overflow-hidden border border-brand-500/40 shadow-glow-sm">
                                    <Image
                                        src="/images/icon.jpg"
                                        alt="ARONN.DEV"
                                        width={28}
                                        height={28}
                                        className="object-cover w-full h-full"
                                    />
                                </span>
                                <span>ARONN<span className="text-brand-400">.DEV</span></span>
                            </Link>
                            <button
                                onClick={closeMenu}
                                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                                aria-label="Tutup menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <nav className="flex flex-col gap-2 mt-6">
                            {navLinks.map((link) => {
                                const sectionId = link.href.replace("/#", "");
                                const isActive = activeSection === sectionId;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                            ? "bg-brand-500/15 text-brand-300 border border-brand-500/30"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Drawer Footer CTA */}
                    <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
                        <Button
                            href="/#contact"
                            variant="primary"
                            size="md"
                            className="w-full"
                            onClick={closeMenu}
                        >
                            Hubungi Saya
                        </Button>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-center text-slate-400 hover:text-slate-200 py-2"
                        >
                            Unduh Curriculum Vitae (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}