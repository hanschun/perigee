import React, { useState, useEffect, useContext } from "react";
import Callback from './Callback';
import Login from './Login';
import App from '../App';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthProvider = ({children}) => {
  const [idToken, setIdToken] = useState("");
  const {
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://orbit-pearl.vercel.app/perigee',
          scope: 'openid profile',
        });
        setIdToken(token)
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (error) {
    console.log('AUTH0 ERR: ', error);
  }
  if (isLoading) {
    return <Callback />;
  }
  if (!isAuthenticated) {
    return (
      <Login />
    );
  }

  return (
    <App idToken={idToken} />
  );
};
