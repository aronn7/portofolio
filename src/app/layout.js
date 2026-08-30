import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portofolio-aronn7.vercel.app";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Ahmad Rommy Q | Fullstack Web & Frontend Specialist",
        template: "%s | Ahmad Rommy Q",
    },
    description:
        "Portofolio resmi Ahmad Rommy Q (Rommy / aronnr7) - Web Developer & Frontend Specialist dari SMKN 20 Jakarta. Mengembangkan aplikasi web modern, responsif, cepat, dan interaktif dengan Next.js, React, dan Tailwind CSS.",
    keywords: [
        "Ahmad Rommy Q",
        "Ahmad Rommy Qurniawan",
        "Ahmad Rommy",
        "Rommy",
        "aronnr7",
        "aronn7",
        "Portofolio Ahmad Rommy",
        "Portfolio Ahmad Rommy Q",
        "Web Developer Indonesia",
        "Frontend Developer Indonesia",
        "Fullstack Developer Indonesia",
        "SMKN 20 Jakarta",
        "Next.js Developer",
        "React Developer",
        "Tailwind CSS",
        "Web Developer Jakarta",
    ],
    authors: [{ name: "Ahmad Rommy Q", url: siteUrl }],
    creator: "Ahmad Rommy Q",
    publisher: "Ahmad Rommy Q",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/images/icon.jpg" },
        ],
        shortcut: "/images/icon.jpg",
        apple: "/images/icon.jpg",
    },
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: siteUrl,
        siteName: "Ahmad Rommy Q Portfolio",
        title: "Ahmad Rommy Q | Fullstack Web & Frontend Specialist",
        description:
            "Portofolio profesional Ahmad Rommy Q - Showcase proyek modern, interaktif, dan performa tinggi menggunakan Next.js, React, dan Tailwind CSS.",
        images: [
            {
                url: "/images/profile1.jpg",
                width: 1200,
                height: 630,
                alt: "Ahmad Rommy Q - Web Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahmad Rommy Q | Fullstack Web & Frontend Specialist",
        description:
            "Portofolio profesional Ahmad Rommy Q - Showcase proyek modern dan interaktif dengan Next.js & React.",
        images: ["/images/profile1.jpg"],
        creator: "@aronnr7",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
};

export const viewport = {
    themeColor: "#030712",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            "name": "Ahmad Rommy Q",
            "alternateName": [
                "Ahmad Rommy Qurniawan",
                "Rommy",
                "aronnr7",
                "aronn7"
            ],
            "url": siteUrl,
            "image": `${siteUrl}/images/profile1.jpg`,
            "jobTitle": "Fullstack Web & Frontend Specialist",
            "description": "Siswa Rekayasa Perangkat Lunak (RPL) SMKN 20 Jakarta dan Web Developer.",
            "worksFor": {
                "@type": "Organization",
                "name": "SMKN 20 Jakarta"
            },
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "SMKN 20 Jakarta"
            },
            "sameAs": [
                "https://github.com/aronnr7",
                "https://www.instagram.com/cloudd.aq"
            ],
            "knowsAbout": [
                "Web Development",
                "Frontend Development",
                "Fullstack Development",
                "Next.js",
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": "Ahmad Rommy Q Portfolio",
            "description": "Portofolio resmi Ahmad Rommy Q - Web Developer & Frontend Specialist.",
            "publisher": {
                "@id": `${siteUrl}/#person`
            },
            "inLanguage": "id-ID"
        }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="scroll-smooth dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-brand-500/30 selection:text-white flex flex-col justify-between">
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}