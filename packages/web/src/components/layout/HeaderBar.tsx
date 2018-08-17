import { Alignment, Button, Classes, Navbar } from "@blueprintjs/core";
import * as React from "react";

export default class HeaderBar extends React.Component<any, any> {
  public render() {
    return (
      <Navbar fixedToTop={true} className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>BudgetR</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="chart" text="Accounts" />
        </Navbar.Group>
      </Navbar>
    );
  }
}
