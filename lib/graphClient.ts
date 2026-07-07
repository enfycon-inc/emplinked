export async function sendEmailViaGraph(sender: string, mailMessage: any) {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Azure AD credentials are not set in environment variables");
  }

  // 1. Get Access Token
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const formData = new URLSearchParams();
  formData.append("client_id", clientId);
  formData.append("scope", "https://graph.microsoft.com/.default");
  formData.append("client_secret", clientSecret);
  formData.append("grant_type", "client_credentials");

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(`Could not acquire access token from Azure AD`);
  }

  const accessToken = tokenData.access_token;

  // 2. Send Email via Graph API
  const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${sender}/sendMail`;
  const sendMailResponse = await fetch(sendMailUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailMessage),
  });

  if (!sendMailResponse.ok) {
    const errorData = await sendMailResponse.text();
    throw new Error(`Failed to send email via Microsoft Graph: ${errorData}`);
  }

  return true;
}
