import * as ReactDom from "react-dom";
import * as React from "react";
import App from "./components/App";
import { createStore } from "./store/createStore";
import { Provider } from "mobx-react";

const store = createStore();

const renderApp = (store: any) => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderApp(store);
