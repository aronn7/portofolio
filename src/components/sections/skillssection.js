const skills = [
    { name: 'JavaScript (ES6+)', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Figma', category: 'UI/UX' },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 max-w-5xl mx-auto px-6 bg-slate-900/50 rounded-3xl my-10 border border-slate-800">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Keahlian & Alat</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto mb-4"></div>
                <p className="text-slate-400 text-sm">Teknologi yang biasa saya gunakan dalam alur kerja harian.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all">
                        <span className="text-xs text-indigo-400 block mb-1 font-mono">{skill.category}</span>
                        <h3 className="text-slate-200 font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}