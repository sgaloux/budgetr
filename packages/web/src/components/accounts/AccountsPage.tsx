import { Button, ButtonGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";
import PageTemplate from "../layout/PageTemplate";
import AddAccountDialog from "./AddAccountDialog";

interface IAccountsPageState {
  addingAccount: boolean;
}

export default class AccountsPage extends React.Component<
  any,
  IAccountsPageState
> {
  constructor(props) {
    super(props);
    this.state = { addingAccount: false };
  }

  public render() {
    return (
      <PageTemplate title="Accounts">
        <ButtonGroup>
          <Button rightIcon={IconNames.PLUS} onClick={this.addAccount}>
            Add account
          </Button>
        </ButtonGroup>
        <AddAccountDialog
          isOpen={this.state.addingAccount}
          onClose={this.handleClose}
        />
      </PageTemplate>
    );
  }

  private addAccount = () => {
    this.setState({ addingAccount: true });
  }

  private handleClose = () => {
    this.setState({ addingAccount: false });
  }
}
