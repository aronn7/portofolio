"use client";

import {
    Code2,
    Layers,
    FileCode2,
    FileCode,
    Palette,
    Sparkles,
    Globe,
    Workflow,
    Server,
    Cpu,
    Network,
    Database,
    Box,
    GitBranch,
    Terminal,
    Send,
    Cloud,
} from "lucide-react";

const iconMap = {
    Code2,
    Layers,
    FileCode2,
    FileCode,
    Palette,
    Sparkles,
    Globe,
    Workflow,
    Server,
    Cpu,
    Network,
    Database,
    DatabaseZap: Database,
    Box,
    GitBranch,
    Figma: Palette,
    Terminal,
    Send,
    Cloud,
    Container: Box,
};

export default function SkillBadge({ skill }) {
    const IconComponent = (skill && skill.icon && iconMap[skill.icon]) || Code2;

    return (
        <div
            className="group relative flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-50/80 hover:bg-surface-100/90 border border-surface-200/60 hover:border-brand-500/40 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-0.5"
            title={skill?.description ? `${skill.name} - ${skill.description}` : skill?.name}
        >
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${skill?.color || "from-brand-500 to-indigo-600"
                    } p-2 text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform`}
            >
                <IconComponent className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white truncate">
                        {skill?.name}
                    </span>
                    <span className="text-[10px] font-medium text-brand-300/90 bg-brand-500/10 px-1.5 py-0.5 rounded border border-brand-500/20 shrink-0">
                        {skill?.level}
                    </span>
                </div>
                {skill?.description && (
                    <span className="text-[11px] text-slate-400 line-clamp-1 group-hover:text-slate-300 transition-colors mt-0.5">
                        {skill.description}
                    </span>
                )}
            </div>
        </div>
    );
}

