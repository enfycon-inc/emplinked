import { NextResponse } from "next/server";
import { sendEmailViaGraph } from "@/lib/graphClient";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, phone, message, turnstileToken } = body;

    // 1. Verify Turnstile Token
    if (!turnstileToken) {
      return NextResponse.json({ error: "Captcha token is missing" }, { status: 400 });
    }

    const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const turnstileResponse = await fetch(verifyEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });
    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    // 2. Parse Recipients
    let recipients: string[] = [];
    try {
      recipients = JSON.parse(process.env.ADMIN_EMAIL_RECIPIENTS || '[]');
    } catch (e) {
      console.warn("Could not parse ADMIN_EMAIL_RECIPIENTS array, falling back to info@enfycon.com");
      recipients = ["info@enfycon.com"];
    }

    const toRecipients = recipients.map(emailStr => ({
      emailAddress: { address: emailStr }
    }));

    // 3. Send Email via Microsoft Graph API
    const sender = process.env.AZURE_USER_ID || "";
    
    const mailMessage = {
      message: {
        subject: `New Enterprise Inquiry from ${fullName}`,
        body: {
          contentType: "HTML",
          content: `
            <h2>New Inquiry Submitted</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <br />
            <h3>Message</h3>
            <p>${message}</p>
          `,
        },
        toRecipients,
      },
      saveToSentItems: "false",
    };

    await sendEmailViaGraph(sender, mailMessage);

    return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
