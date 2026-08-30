import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // You can integrate Resend, SendGrid, or Nodemailer here when ready.
    console.log("Pesan Kontak Diterima:", {
      name,
      email,
      subject: subject || "Tanpa Subjek",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Pesan Anda berhasil diterima! Terima kasih telah menghubungi saya.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Gagal memproses pesan. Silakan coba kembali nanti." },
      { status: 500 }
    );
  }
}