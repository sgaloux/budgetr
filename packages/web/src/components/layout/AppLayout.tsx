import * as React from "react";
import { Routes } from "../../Routes";

export interface AppLayoutProps {}

export default class AppLayout extends React.Component<AppLayoutProps, any> {
  public render() {
    return (
      <div>
        AppLayout
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}
