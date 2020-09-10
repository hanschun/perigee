
import React, {useState, useEffect} from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Auth/Login'
import Apollo from './Apollo'
import { AUTH_CONFIG } from './Auth/auth0-variables'

const createApolloClient = authToken => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: AUTH_CONFIG.connectUri,
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
  })
}

export const Auth = () => {
  const { isLoading, isAuthenticated, error, getAccessTokenSilently } = useAuth0()
  const [client, setClient] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: AUTH_CONFIG.audience,
          scope: AUTH_CONFIG.scope,
        })
        const c = createApolloClient(token)
        setClient(c)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [getAccessTokenSilently])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  if (!isAuthenticated) {
    return (
      <Login />
    )
  }
  
  return (
    client ? 
    <Apollo client={client} />
    :
    <div>Connecting...</div>
  )
}

export default Auth