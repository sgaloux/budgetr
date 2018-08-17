import { Alignment, Classes, Navbar } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";
import { EPages } from "../../Routes";
import { ButtonLink } from "./NavbarButtonLink";

export default class HeaderBar extends React.Component<any, any> {
  public render() {
    return (
      <Navbar fixedToTop={true} className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>BudgetR</Navbar.Heading>
          <Navbar.Divider />
          <ButtonLink to={EPages.Home} text="home" icon={IconNames.HOME} />
          <ButtonLink
            to={EPages.Accounts}
            text="accounts"
            icon={IconNames.CHART}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
