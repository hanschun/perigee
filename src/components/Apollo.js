
import React, {useState, useEffect} from "react";
import Header from "./Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { useAuth0 } from '@auth0/auth0-react';
import {PostsList} from './posts-list'
import Login from './Auth/Login';
import App from './App'

export const Apollo = ({client}) => {
  return (
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>
  );
};

export default Apollo;