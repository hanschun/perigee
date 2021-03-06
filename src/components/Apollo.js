
import React from 'react'
import {ApolloProvider} from '@apollo/client'
import App from './App'

export const Apollo = ({client}) => {
  return (
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>
  )
}

export default Apollo