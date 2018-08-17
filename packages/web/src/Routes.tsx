import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import AccountsPage from "./components/accounts/AccountsPage";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/accounts" component={AccountsPage} />
    </Switch>
  </BrowserRouter>
);
