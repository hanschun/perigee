
import React from "react";
import Header from "./Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { useAuth0 } from "./Auth/react-auth0-spa";
import {PostsList} from './posts-list'

const createApolloClient = authToken => {
  // authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlB4Vi11M1JiQnhkcVc5WVlsa0V0SyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6IjEwNTE5MTc4ODQ2NzgwNDAxNTEwNSJ9LCJpc3MiOiJodHRwczovL2Rldi1iNTZ2bmN0ZS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDUxOTE3ODg0Njc4MDQwMTUxMDUiLCJhdWQiOlsiaHR0cHM6Ly9vcmJpdC1wZWFybC52ZXJjZWwuYXBwL3BlcmlnZWUiLCJodHRwczovL2Rldi1iNTZ2bmN0ZS51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTk5NzExMDg3LCJleHAiOjE1OTk3MTgyODcsImF6cCI6Im9rZDJrZ1EwdWg5RkU3YlVWZzZyZmJzS3VZV3FIa0EwIiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.r8cjOpc1ZLMICpgnXNxa_3sZqe6Kl_T60yel6tHU6Q2aEjTpWVTJKy9GbpAypSbHVIYiJvZIbW06KgUWz4YtwJ4DCWVsgj79VvU2YAQTkOvq64B8TQvFLXu2klDG4s5gEQr5Ii8ScqjTGqCYgZQRck7lC9A1FeiBLmbSI_6vtPKRPkSgv7Ik4XO2IyZeTqcUmmjL0OnQetqVUNxppBGRg-vtf3Y5g8xuQHxbECRNJOkpmSy7a_XaEMqphODX8ltVrEktyHbiQWd3bS3rYhCZ-qhHqOd-XRKTaMTuUZUJIIyr_Gj2ZgrnTVjXvCqxD5L8EWxGaC-48iMwxKuTuXg7IA'
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

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  if (loading || !idToken) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      <div>
        <Header logoutHandler={logout} />
        <div className="row container-fluid p-left-right-0 m-left-right-0">
          <div>Welcome to Perigee</div>
          <PostsList />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;