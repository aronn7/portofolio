const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portofolio-aronn7.vercel.app";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}