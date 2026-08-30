import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portofolio-aronn7.vercel.app";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Ahmad Rommy Q - Portfolio",
        template: "%s - Portfolio",
    },
    description:
        "SMKN 20 Jakarta ... Mempelajari dasar-dasar pemrograman web, pengembangan aplikasi frontend & backend, serta manajemen basis data relasional.",
    keywords: [
        "Ahmad Rommy Q",
        "Ahmad Rommy Qurniawan",
        "Ahmad Rommy",
        "Rommy",
        "aronnr7",
        "aronn7",
        "SMKN 20 Jakarta",
        "Portfolio Ahmad Rommy Q",
        "Web Developer",
        "Frontend Developer",
        "Fullstack Developer",
        "Rekayasa Perangkat Lunak",
        "Next.js",
        "React",
        "Tailwind CSS",
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
            { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon.ico" },
        ],
        shortcut: "/images/icon.png",
        apple: "/images/icon.png",
    },
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: siteUrl,
        siteName: "Ahmad Rommy Q",
        title: "Ahmad Rommy Q - Portfolio",
        description:
            "SMKN 20 Jakarta ... Mempelajari dasar-dasar pemrograman web, pengembangan aplikasi frontend & backend, serta manajemen basis data relasional.",
        images: [
            {
                url: "/images/profile1.jpg",
                width: 1200,
                height: 630,
                alt: "Ahmad Rommy Q - Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahmad Rommy Q - Portfolio",
        description:
            "SMKN 20 Jakarta ... Mempelajari dasar-dasar pemrograman web, pengembangan aplikasi frontend & backend, serta manajemen basis data relasional.",
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
            "description": "SMKN 20 Jakarta ... Mempelajari dasar-dasar pemrograman web, pengembangan aplikasi frontend & backend, serta manajemen basis data relasional.",
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
            "name": "Ahmad Rommy Q - Portfolio",
            "description": "SMKN 20 Jakarta ... Mempelajari dasar-dasar pemrograman web, pengembangan aplikasi frontend & backend, serta manajemen basis data relasional.",
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