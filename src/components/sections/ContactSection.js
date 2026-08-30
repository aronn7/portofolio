"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, Phone, MapPin, Copy, Check, Sparkles, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Hubungi Saya"
          title="Mari Berkolaborasi"
          subtitle="Punya ide proyek, tawaran kerja, atau ingin berdiskusi? Jangan ragu untuk mengirimkan pesan!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-50/80 border border-surface-200/60 backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Kontak Cepat & Diskusi
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Saya selalu siap mendiskusikan peluang baru, proyek inovatif, maupun konsultasi kebutuhan web app Anda.
              </p>

              <div className="space-y-4">
                {/* Email Box with Copy */}
                <div className="p-4 rounded-2xl bg-surface-100/70 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Email Langsung</p>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate font-mono">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-surface-200/60 hover:bg-brand-600 text-slate-300 hover:text-white transition-all shrink-0"
                    title="Salin Email"
                    aria-label="Salin email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400/80">WhatsApp Chat</p>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-200">
                        Chat Langsung via WhatsApp
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Buka &rarr;
                  </span>
                </a>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-surface-100/70 border border-slate-700/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Lokasi & Zona Waktu</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location} (WIB / GMT+7)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-50/80 border border-surface-200/60 backdrop-blur-md shadow-glass">
              <h3 className="text-xl font-bold text-white mb-2">
                Kirim Pesan Formulir
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi form di bawah ini dan saya akan merespons dalam waktu 24 jam.
              </p>

              {status.success && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm mb-6 flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Pesan Berhasil Terkirim!</p>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Terima kasih telah menghubungi saya. Saya akan segera membalas email Anda.
                    </p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p>{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Budi Santoso"
                      className="w-full bg-surface-100/90 border border-surface-200/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder:text-slate-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. budi@domain.com"
                      className="w-full bg-surface-100/90 border border-surface-200/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder:text-slate-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subjek / Perihal
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Tawaran Proyek Web App"
                    className="w-full bg-surface-100/90 border border-surface-200/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan detail proyek, ide, atau pesan yang ingin disampaikan..."
                    className="w-full bg-surface-100/90 border border-surface-200/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder:text-slate-500 transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status.submitting}
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                >
                  {status.submitting ? "Mengirim Pesan..." : "Kirim Pesan Sekarang"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}