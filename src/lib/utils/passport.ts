import { config, passport } from '@imtbl/sdk';

// create the Passport instance and export it so it can be used in the examples
export const passportInstance = new passport.Passport({
  baseConfig: {
    environment: config.Environment.SANDBOX,
    publishableKey: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY ?? '', // replace with your publishable API key from Hub
  },
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? 'CLIENT_ID', // replace with your client ID from Hub
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL ?? 'http://localhost:3000/redirect', // replace with one of your redirect URIs from Hub  http://localhost:3000/redirect
  logoutRedirectUri: process.env.NEXT_PUBLIC_LOGOUT_URL ?? 'http://localhost:3000', // replace with one of your logout URIs from Hub http://localhost:3000/logout
  audience: 'platform_api',
  scope: 'openid offline_access email transact',
  popupOverlayOptions: {
    disableGenericPopupOverlay: false, // Set to true to disable the generic pop-up overlay
    disableBlockedPopupOverlay: false, // Set to true to disable the blocked pop-up overlay
  },
});
