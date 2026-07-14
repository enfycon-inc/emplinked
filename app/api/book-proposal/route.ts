import { NextResponse } from "next/server";
import { sendEmailViaGraph } from "@/lib/graphClient";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, duration, silverQty, goldQty, calcResult } = body;

    // Parse Recipients
    let recipients: string[] = [];
    try {
      recipients = JSON.parse(process.env.ADMIN_EMAIL_RECIPIENTS || '[]');
    } catch (e) {
      console.warn("Could not parse ADMIN_EMAIL_RECIPIENTS array, falling back to info@enfycon.com");
      recipients = ["info@enfycon.com"];
    }

    const toRecipients = recipients.map((emailStr: string) => ({
      emailAddress: { address: emailStr }
    }));

    // Add the customer as a CC so they get a copy
    const ccRecipients = [
      { emailAddress: { address: email } }
    ];

    // Send Email via Microsoft Graph API
    const sender = process.env.AZURE_USER_ID || "";
    
    const mailMessage = {
      message: {
        subject: `New Proposal Request from ${name}`,
        body: {
          contentType: "HTML",
          content: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
              <h2 style="color: #001c40; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Emplinked Proposal Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mobile:</strong> ${mobile}</p>
              
              <h3 style="color: #2563eb; margin-top: 30px;">Subscription Details</h3>
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">Duration</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${duration} Months</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">Silver Plan Employees</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${silverQty}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">Gold Plan Employees</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${goldQty}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">Base Subtotal</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">₹${calcResult?.subtotal?.toLocaleString()}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #2563eb;">Duration Discount</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold; color: #2563eb;">- ₹${calcResult?.discountAmount?.toLocaleString()}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">Taxable Amount</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">₹${calcResult?.afterDiscount?.toLocaleString()}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; color: #64748b;">GST (18%)</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">₹${calcResult?.gstAmount?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #001c40; font-size: 18px; font-weight: 800;">Grand Total Estimate</td>
                  <td style="padding: 12px 0; text-align: right; color: #2563eb; font-size: 18px; font-weight: 800;">₹${calcResult?.totalAmount?.toLocaleString()}</td>
                </tr>
              </table>
              <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
                An Enfycon representative will reach out shortly to finalize this proposal.
              </p>
            </div>
          `,
        },
        toRecipients,
        ccRecipients,
      },
      saveToSentItems: "false",
    };

    await sendEmailViaGraph(sender, mailMessage);

    return NextResponse.json({ success: true, message: "Proposal sent successfully" });
  } catch (error: any) {
    console.error("Error sending proposal email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
