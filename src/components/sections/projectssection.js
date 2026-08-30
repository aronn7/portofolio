import { projectsData } from '@/data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Proyek Pilihan</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}