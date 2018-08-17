import { Button, ButtonGroup, Dialog } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";
import PageTemplate from "../layout/PageTemplate";

interface IAccountsPageState {
  adding: boolean;
}

export default class AccountsPage extends React.Component<
  any,
  IAccountsPageState
> {
  constructor(props) {
    super(props);
    this.state = { adding: false };
  }

  public render() {
    return (
      <PageTemplate title="Accounts">
        <ButtonGroup>
          <Button rightIcon={IconNames.PLUS} onClick={this.addAccount}>
            Add account
          </Button>
        </ButtonGroup>
        <Dialog
          isOpen={this.state.adding}
          canEscapeKeyClose={true}
          isCloseButtonShown={true}
          onClose={this.closePopup}
          icon={IconNames.PIVOT_TABLE}
        >
          Adding new account..
        </Dialog>
      </PageTemplate>
    );
  }

  private addAccount = () => {
    this.setState({ adding: true });
  }

  private closePopup = () => {
    this.setState({ adding: false });
  }
}
