import { ConfidentialClientApplication } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";

const msalConfig = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID || "",
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
    clientSecret: process.env.AZURE_CLIENT_SECRET || "",
  },
};

const tokenRequest = {
  scopes: ["https://graph.microsoft.com/.default"],
};

const msalClient = new ConfidentialClientApplication(msalConfig);

export async function getGraphClient() {
  const authResponse = await msalClient.acquireTokenByClientCredential(tokenRequest);
  
  if (!authResponse?.accessToken) {
    throw new Error("Could not acquire access token from Azure AD");
  }

  const client = Client.init({
    authProvider: (done) => {
      done(null, authResponse.accessToken);
    },
  });

  return client;
}
