"use client";

import { cn } from "@/utils/cn";

export default function SectionTitle({
    badge,
    title,
    subtitle,
    align = "center",
    className = "",
}) {
    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    return (
        <div className={cn("flex flex-col mb-12 sm:mb-16 max-w-2xl", alignClasses[align] || alignClasses.center, className)}>
            {badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3 backdrop-blur-sm shadow-glow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                    {badge}
                </div>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {title}
            </h2>

            <div className={cn(
                "h-1 w-20 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full mt-4 mb-4",
                align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
            )}></div>

            {subtitle && (
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

