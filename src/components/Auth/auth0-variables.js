export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  callbackUrl: process.env.REACT_APP_REDIRECT_URI,
  afterLogout: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI
};