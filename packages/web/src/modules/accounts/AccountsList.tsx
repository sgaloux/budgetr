import * as React from "react";
import { GetAccounts_accounts } from "./queries/gql_types/GetAccounts";

export interface AccountListProps {
  accounts: Array<GetAccounts_accounts | null>;
}

export default class AccountList extends React.Component<
  AccountListProps,
  any
> {
  public render() {
    return (
      <ul>
        {this.props.accounts!.map((acc) => (
          <li key={acc!.name}>{acc!.name}</li>
        ))}
      </ul>
    );
  }
}
