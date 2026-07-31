import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, opinion } = body;

    // Telegram Bot ma'lumotlari (Bularni o'zingizniki bilan almashtiring)
    const TELEGRAM_BOT_TOKEN = "8647530440:AAHz2O4-LaiSegmMg1433Y7ozoDqV3kNiwQ"; // BotFather bergan token
    const TELEGRAM_CHAT_ID = "5178736895"; // userinfobot bergan ID

    // Telegramga yuboriladigan chiroyli matn formati
    const text = `
🔔 **Yangi xabar portfolioingizdan!**

👤 **Ismi:** ${name}
📞 **Telefon:** ${phone}
📧 **Email:** ${email}
💬 **Fikr/Xabar:** ${opinion}
    `;

    // Telegram API ga so'rov yuborish
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "Markdown", // Matn chiroyli chiqishi uchun
        }),
      }
    );

    if (telegramRes.ok) {
      return NextResponse.json({ success: true, message: "Xabar yuborildi!" });
    } else {
      return NextResponse.json({ success: false, message: "Telegram xatosi" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server xatosi" }, { status: 500 });
  }
}