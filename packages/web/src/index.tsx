import * as ReactDom from "react-dom";
import * as React from "react";
import { ApolloProvider } from "react-apollo";

import "./index.css";

import { client } from "./apollo";
import AppLayout from "./components/layout/AppLayout";

const renderApp = (store: any) => {
  ReactDom.render(
    <ApolloProvider client={client}>
      <AppLayout />
    </ApolloProvider>,
    document.getElementById("root")
  );
};

renderApp({});
