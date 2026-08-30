import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className="bg-slate-950 text-slate-100 font-sans antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}