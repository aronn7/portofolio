"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    target,
    rel,
    icon,
    iconPosition = "right",
    disabled = false,
    type = "button",
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-brand-500/50";

    const sizeStyles = {
        sm: "text-xs px-3.5 py-2 gap-1.5",
        md: "text-sm px-5 py-2.5 gap-2",
        lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
        primary:
            "bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-glow-sm hover:shadow-glow-md hover:translate-y-[-1px]",
        secondary:
            "bg-surface-100/80 hover:bg-surface-200/90 text-slate-200 border border-surface-200/80 hover:border-slate-600 hover:text-white backdrop-blur-sm",
        outline:
            "bg-transparent hover:bg-brand-500/10 text-brand-400 hover:text-brand-300 border border-brand-500/40 hover:border-brand-500/80",
        ghost:
            "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
        glow:
            "relative bg-slate-900 text-brand-300 border border-brand-500/50 hover:border-brand-400 hover:text-white shadow-glow-sm hover:shadow-glow-md",
    };

    const combinedClasses = cn(
        baseStyles,
        sizeStyles[size] || sizeStyles.md,
        variantStyles[variant] || variantStyles.primary,
        className
    );

    const content = (
        <>
            {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
        </>
    );

    if (href) {
        const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank";
        if (isExternal) {
            return (
                <a
                    href={href}
                    target={target || "_blank"}
                    rel={rel || "noopener noreferrer"}
                    className={combinedClasses}
                    {...props}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
            {...props}
        >
            {content}
        </button>
    );
}

