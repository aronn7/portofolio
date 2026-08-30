import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://aronn.dev"),
    title: "Ahmad Rommy Q | Fullstack Web & Frontend Specialist",
    description:
        "Portofolio profesional Ahmad Rommy Q (aronn.dev) - Fullstack Web & Frontend Specialist. Membangun aplikasi web modern, cepat, elegan, dan berskala tinggi.",
    keywords: [
        "Frontend Developer",
        "Fullstack Developer",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Web Portfolio",
        "Ahmad Rommy Q",
        "aronn.dev",
        "JavaScript",
        "TypeScript",
    ],
    authors: [{ name: "Ahmad Rommy Q" }],
    creator: "Ahmad Rommy Q",
    icons: {
        icon: "/images/icon.jpg",
        shortcut: "/images/icon.jpg",
        apple: "/images/icon.jpg",
    },
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://aronn.dev",
        title: "Ahmad Rommy Q | Web Developer & Frontend Specialist",
        description:
            "Portofolio profesional modern dan interaktif dengan showcase proyek Next.js, React, dan Tailwind CSS.",
        siteName: "Ahmad Rommy Q Portfolio (aronn.dev)",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahmad Rommy Q | Web Developer & Frontend Specialist",
        description:
            "Portofolio profesional modern dan interaktif dengan showcase proyek Next.js, React, dan Tailwind CSS.",
        creator: "@aronndev",
    },
};

export const viewport = {
    themeColor: "#030712",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="scroll-smooth dark">
            <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-brand-500/30 selection:text-white flex flex-col justify-between">
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}