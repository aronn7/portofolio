import { projectsData } from "@/data/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portofolio-aronn7.vercel.app";

export default function sitemap() {
    const projectUrls = projectsData.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...projectUrls,
    ];
}