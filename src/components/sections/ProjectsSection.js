"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { Sparkles, Layers } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Portofolio Pilihan"
          title="Karya & Proyek Terkini"
          subtitle="Koleksi proyek pilihan yang memperlihatkan dedikasi terhadap arsitektur kode bersih, desain menarik, dan efisiensi pengguna."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-600 text-white shadow-glow-sm border border-brand-500/50"
                  : "bg-surface-50/80 text-slate-400 hover:text-white hover:bg-surface-100 border border-surface-200/50"
              }`}
            >
              {cat === "all" ? "Semua Proyek" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}