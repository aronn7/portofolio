"use client";

import { cn } from "@/utils/cn";

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
  icon,
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors";
  
  const sizeStyles = {
    xs: "text-[10px] px-2 py-0.5 gap-1",
    sm: "text-xs px-2.5 py-1 gap-1.5",
    md: "text-sm px-3 py-1.5 gap-2",
  };

  const variantStyles = {
    default: "bg-surface-100 text-slate-300 border border-slate-700/60",
    brand: "bg-brand-500/10 text-brand-300 border border-brand-500/30",
    success: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    accent: "bg-accent-cyan/10 text-cyan-300 border border-cyan-500/30",
    purple: "bg-purple-500/10 text-purple-300 border border-purple-500/30",
    glass: "bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
