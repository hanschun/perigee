
import React, {useState, useEffect} from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Auth/Login';
import Apollo from './Apollo'

const createApolloClient = authToken => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://tidy-hog-92.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      }
    }),
    cache: new InMemoryCache()
  });
};

export const Auth = () => {
  const { isLoading, isAuthenticated, error, getAccessTokenSilently } = useAuth0();
  const [client, setClient] = useState(null);
  const [token, setToken] = useState('');
  const [ignore, setIgnore] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://orbit-pearl.vercel.app/perigee',
          scope: 'openid email',
        });
        setToken(token)
        const c = createApolloClient(token)
        setClient(c)
        console.log('CLIENT: ', client)
      } catch (e) {
        console.error(e);
      }
    })()
  }, [getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return (
      <Login />
    );
  }
  
  return (
    client ? 
    <Apollo client={client} />
    :
    <div>Connecting...</div>
  );
};

export default Auth;