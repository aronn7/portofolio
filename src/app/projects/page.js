"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="mb-8">
                <Button
                    href="/#projects"
                    variant="ghost"
                    size="sm"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="left"
                >
                    Kembali ke Beranda
                </Button>
            </div>

            <SectionTitle
                badge="Portofolio Lengkap"
                title="Eksplorasi Semua Proyek"
                subtitle="Rincian seluruh proyek yang pernah saya rancang dan kembangkan, mulai dari aplikasi skala penuh hingga alat produktivitas."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}

