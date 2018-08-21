import * as React from "react";
import { GetAccounts_accounts } from "../../typings/graphql";

interface AccountCardProps {
  account: GetAccounts_accounts;
  onRemove: (id: string) => void;
}

export default class AccountCard extends React.Component<AccountCardProps> {
  public render() {
    return (
      <div>
        <div>Account name: {this.props.account.name}</div>
        <button onClick={() => this.props.onRemove(this.props.account.id)}>
          Remove
        </button>
      </div>
    );
  }
}
