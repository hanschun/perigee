import ReactDOM from 'react-dom'
import React from 'react'
import { Route, Router } from 'react-router-dom'
import './styles/App.css'
import { Auth0Provider } from '@auth0/auth0-react'
import history from './utils/history'
import { AUTH_CONFIG } from './components/Auth/auth0-variables'
import {Auth} from './components/Auth'

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const mainRoutes = (
  <Router history={history}>
    <Route
      path='/'
      render={props => (
        <Auth0Provider
          domain={AUTH_CONFIG.domain}
          clientId={AUTH_CONFIG.clientId}
          redirect_uri={AUTH_CONFIG.callbackUrl}
          audience={AUTH_CONFIG.audience}
          scope={AUTH_CONFIG.scope}
          cacheLocation={'localstorage'}
          onRedirectCallback={onRedirectCallback}
        >
          {props.children}
          <Auth />
        </Auth0Provider>
      )}
    />
  </Router>
)

ReactDOM.render(mainRoutes, document.getElementById('root'))