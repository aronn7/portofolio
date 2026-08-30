"use client";

import { Briefcase, GraduationCap, Calendar, Sparkles } from "lucide-react";
import { experiencesData } from "@/data/experiences";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Perjalanan Karier"
          title="Pengalaman"
          subtitle="Jejak langkah profesional dan latar belakang akademis dalam dunia rekayasa perangkat lunak."
        />

        {/* Timeline Container */}
        <div className="relative border-l border-surface-200/80 ml-4 sm:ml-32 space-y-10">
          {experiencesData.map((item, index) => {
            const isWork = item.type === "work";

            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Dot with Icon */}
                <div className="absolute -left-4 sm:-left-5 top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 border-brand-500 text-brand-400 shadow-glow-sm group-hover:scale-110 transition-transform">
                  {isWork ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </div>

                {/* Period Badge for Desktop positioned to the left */}
                <div className="hidden sm:block absolute -left-36 top-3 text-xs font-semibold text-slate-400 text-right w-28">
                  {item.period}
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-surface-50/70 hover:bg-surface-50 border border-surface-200/60 hover:border-brand-500/40 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-glow-sm">
                  {/* Mobile Period Badge */}
                  <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-brand-400 mb-3">
                    {item.company}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-surface-100/80 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
