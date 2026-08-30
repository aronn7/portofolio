import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: project.title,
    description: project.summary || project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Ahmad Rommy Q`,
      description: project.summary || project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ahmad Rommy Q`,
      description: project.summary || project.description,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Back Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Button
          href="/#projects"
          variant="ghost"
          size="sm"
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Kembali ke Portofolio
        </Button>

        <div className="flex gap-2">
          <Badge variant="brand">{project.category}</Badge>
          <Badge variant="glass">{project.year}</Badge>
        </div>
      </div>

      {/* Project Header */}
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {project.title}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Action Links Bar */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.demoLink && (
            <Button
              href={project.demoLink}
              variant="primary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Lihat Live Demo
            </Button>
          )}
          {project.githubLink && (
            <Button
              href={project.githubLink}
              variant="secondary"
              size="md"
              icon={<Github className="w-4 h-4" />}
            >
              Source Code (GitHub)
            </Button>
          )}
        </div>
      </div>

      {/* Hero Showcase Image */}
      <div className="relative h-64 sm:h-96 lg:h-[450px] w-full rounded-3xl overflow-hidden border border-surface-200/80 bg-surface-100 shadow-2xl mb-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Project In-Depth Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Description & Highlights */}
        <div className="lg:col-span-8 space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-50/70 border border-surface-200/60 backdrop-blur-sm space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-400" />
              Tentang Proyek
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-50/70 border border-surface-200/60 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Fitur & Keunggulan Utama
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Tech Stack & Meta Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-surface-50/70 border border-surface-200/60 backdrop-blur-sm space-y-6">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-400" />
                Teknologi Digunakan
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-surface-100 border border-slate-700/80 text-brand-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-surface-200/60 space-y-3 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Kategori:</span>
                <span className="font-semibold text-slate-200">{project.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tahun Pembuatan:</span>
                <span className="font-semibold text-slate-200">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}