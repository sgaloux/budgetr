import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDom from "react-dom";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { client } from "./apollo";
import AppLayout from "./components/layout/AppLayout";

const renderApp = (store: any) => {
  ReactDom.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById("root"),
  );
};

renderApp({});
