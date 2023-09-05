export const AZURE_DOMAIN = "https://web3auth.b2clogin.com/web3auth.onmicrosoft.com/B2C_1_signupsignin-w3a/oauth2/v2.0/";
const clientId = "570d0b88-539e-4eb2-8b3f-8c920784fe1f&redirect_uri=http://localhost:3001/callback&state=STATE";

export const AZURE_URL = `${AZURE_DOMAIN}authorize?scope=openid&response_type=code&client_id=${clientId}`;
