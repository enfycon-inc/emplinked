import { NextResponse } from "next/server";
import { getGraphClient } from "@/lib/graphClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, turnstileToken } = body;

    // 1. Verify Turnstile Token
    if (!turnstileToken) {
      return NextResponse.json({ error: "Security check token is missing" }, { status: 400 });
    }

    const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const turnstileResponse = await fetch(verifyEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });
    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json({ error: "Security verification failed" }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const client = await getGraphClient();
    const sender = process.env.AZURE_USER_ID;

    // 2. Formulate Welcome Email to the Subscriber
    const welcomeMailMessage = {
      message: {
        subject: "Welcome to Emplinked Updates!",
        body: {
          contentType: "HTML",
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>Thank you for subscribing!</h2>
              <p>Hello,</p>
              <p>You have successfully subscribed to receive updates from Emplinked.</p>
              <p>We'll keep you in the loop with the latest automation frameworks, enterprise insights, and process improvements.</p>
              <br />
              <p>Best regards,<br/>The Emplinked Team<br/>EnfyCon</p>
            </div>
          `,
        },
        toRecipients: [{ emailAddress: { address: email } }],
      },
      saveToSentItems: "false",
    };

    // 3. Formulate Admin Notification Email
    let adminRecipients: string[] = [];
    try {
      adminRecipients = JSON.parse(process.env.ADMIN_EMAIL_RECIPIENTS || '[]');
    } catch (e) {
      adminRecipients = ["info@enfycon.com"];
    }

    const adminToRecipients = adminRecipients.map(adminEmail => ({
      emailAddress: { address: adminEmail }
    }));

    const adminMailMessage = {
      message: {
        subject: "New Newsletter Subscriber",
        body: {
          contentType: "HTML",
          content: `
            <h2>New Subscriber Alert</h2>
            <p>A new user has subscribed to the newsletter.</p>
            <p><strong>Email:</strong> ${email}</p>
          `,
        },
        toRecipients: adminToRecipients,
      },
      saveToSentItems: "false",
    };

    // Send both emails concurrently
    await Promise.all([
      client.api(`/users/${sender}/sendMail`).post(welcomeMailMessage),
      client.api(`/users/${sender}/sendMail`).post(adminMailMessage)
    ]);

    return NextResponse.json({ success: true, message: "Subscription successful" });
  } catch (error: any) {
    console.error("Error processing subscription:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
