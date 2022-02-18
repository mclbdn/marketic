import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const REACT_APP_ID = process.env.REACT_APP_ID;
const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_ID}`,
  headers: {
    "Authorization": `Bearer ${REACT_APP_TOKEN}`
  }
})

// NEW END

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
