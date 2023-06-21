/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
const msalConfig = {
  auth: {
    clientId: 'Enter_your_client_id',
    authority:
      'https://login.microsoftonline.com/Enter_your_tenantID',
    redirectUri: 'http://localhost:3000/'
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add here the endpoints and scopes for the web API you would like to use.
const apiConfig = {
  uri: 'http://localhost:5000/api', // e.g. http://localhost:5000/api
  scopes: ['api://enter_your_clientID/Files.Read'] // e.g. ["scp1", "scp2"]
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
  scopes: ['api://enter_your_clientID/Files.Read']
};

/**
 * Scopes you add here will be used to request a token from Azure AD to be used for accessing a protected resource.
 * To learn more about how to work with scopes and resources, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const tokenRequest = {
  scopes: [...apiConfig.scopes]
};

// exporting config object for jest
if (typeof exports !== 'undefined') {
  module.exports = {
    msalConfig: msalConfig
  };
}
