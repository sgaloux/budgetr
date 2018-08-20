import { Spinner } from "@blueprintjs/core";
import * as React from "react";
import AccountsQuery from "./queries/AccountsQuery";

export interface AccountListProps {}

export default class AccountList extends React.Component<
  AccountListProps,
  any
> {
  public render() {
    return (
      <AccountsQuery>
        {({ loading, data, error }) => {
          if (loading) {
            return <Spinner />;
          }
          return (
            <ul>
              {data!.accounts.map((acc) => (
                <li>{acc!.name}</li>
              ))}
            </ul>
          );
        }}
      </AccountsQuery>
    );
  }
}
