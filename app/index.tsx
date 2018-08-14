import * as ReactDom from "react-dom";
import * as React from "react";
import App from "./components/App";
import { createStore } from "./store/createStore";
// import { Provider } from "mobx-react";
import { ApolloProvider } from "react-apollo";

import { client } from "./apollo";
import { Routes } from "./routes";

const store = createStore();

const renderApp = (store: any) => {
  ReactDom.render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById("root")
  );
};

renderApp(store);
