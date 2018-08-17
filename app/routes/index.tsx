import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
