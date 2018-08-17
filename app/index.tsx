import * as ReactDom from "react-dom";
import * as React from "react";
import { createStore } from "./store/createStore";
import { ApolloProvider } from "react-apollo";

import { client } from "./apollo";
import { Routes } from "./routes";

const renderApp = (store: any) => {
  ReactDom.render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById("root")
  );
};

renderApp({});
