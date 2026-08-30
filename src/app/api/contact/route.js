import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Semua field harus diisi.' },
                { status: 400 }
            );
        }

        // Tempatkan logika pengiriman email di sini (misal: Resend API)

        return NextResponse.json(
            { message: 'Pesan berhasil dikirim!' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Gagal mengirim pesan.' },
            { status: 500 }
        );
    }
}