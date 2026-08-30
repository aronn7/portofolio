"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative flex flex-col bg-surface-50/70 hover:bg-surface-50 border border-surface-200/60 hover:border-brand-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-glow-md hover:-translate-y-1.5 backdrop-blur-sm">
            {/* Glow highlight on top border */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Thumbnail with Overlay */}
            <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-surface-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-50 via-surface-50/20 to-transparent opacity-80" />

                {/* Category & Year Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="brand" size="xs">
                        {project.category}
                    </Badge>
                    {project.featured && (
                        <Badge variant="purple" size="xs" icon={<Sparkles className="w-2.5 h-2.5" />}>
                            Unggulan
                        </Badge>
                    )}
                </div>

                <div className="absolute top-3 right-3">
                    <Badge variant="glass" size="xs">
                        {project.year}
                    </Badge>
                </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-1 mb-2">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {project.summary || project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-surface-100/90 text-slate-300 border border-slate-700/60"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface-100/60 text-slate-400">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-200/50 mt-auto">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors group/link"
                    >
                        <span>Detail Proyek</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-2">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Lihat Source Code"
                                className="p-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-400 hover:text-white transition-colors"
                                aria-label="Repository GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Demo Langsung"
                                className="p-2 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 hover:text-brand-300 transition-colors"
                                aria-label="Website Demo Langsung"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}