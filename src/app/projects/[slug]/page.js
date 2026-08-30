import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }) {
    // Mencari proyek berdasarkan slug di URL
    const project = projectsData.find((p) => p.slug === params.slug);

    // Jika proyek tidak ditemukan, tampilkan 404
    if (!project) {
        notFound();
    }

    return (
        <main className="bg-slate-950 min-h-screen text-slate-100 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-slate-400 mb-6">{project.description}</p>

                <div className="flex gap-4 mb-8">
                    <a href={project.demoLink} target="_blank" className="text-indigo-400 hover:underline">
                        Live Demo &rarr;
                    </a>
                    <a href={project.githubLink} target="_blank" className="text-slate-400 hover:underline">
                        Source Code (GitHub) &rarr;
                    </a>
                </div>
            </div>
        </main>
    );
}