import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-indigo-500 transition-all">
            <div className="relative h-48 w-full bg-slate-800">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Badges Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="text-xs bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded-full font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Link */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    Lihat Detail Proyek &rarr;
                </Link>
            </div>
        </div>
    );
}