"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { Code, Terminal, Layers, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const displayedSkills =
    activeTab === "all"
      ? allSkills
      : skillCategories.find((cat) => cat.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Keahlian & Teknologi"
          title="Tech Stack & Alat Andalan"
          subtitle="Teknologi dan tools modern yang saya gunakan untuk mewujudkan produk digital berstandar industri."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "all"
                ? "bg-brand-600 text-white shadow-glow-sm border border-brand-500/50"
                : "bg-surface-50/80 text-slate-400 hover:text-white hover:bg-surface-100 border border-surface-200/50"
            }`}
          >
            Semua Keahlian ({allSkills.length})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-brand-600 text-white shadow-glow-sm border border-brand-500/50"
                  : "bg-surface-50/80 text-slate-400 hover:text-white hover:bg-surface-100 border border-surface-200/50"
              }`}
            >
              {category.title} ({category.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedSkills.map((skill, index) => (
            <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-900/30 via-surface-50/60 to-surface-100/40 border border-brand-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Selalu Terbuka untuk Mempelajari Stack Baru</h5>
              <p className="text-xs text-slate-400">Siap beradaptasi dengan teknologi dan kebutuhan spesifik proyek Anda.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors whitespace-nowrap"
          >
            Diskusikan Kebutuhan Teknis &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}