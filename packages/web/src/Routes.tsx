import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AccountsPage from "./components/accounts/AccountsPage";
import HomePage from "./components/home/HomePage";

export enum EPages {
  Home = "/home",
  Accounts = "/accounts",
}

export const Routes = () => (
  <Switch>
    <Route exact={true} path={EPages.Home} component={HomePage} />
    <Route exact={true} path={EPages.Accounts} component={AccountsPage} />
    <Redirect to={EPages.Home} />
  </Switch>
);
