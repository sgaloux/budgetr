import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { GetAccounts, GetAccounts_accounts } from "../../../typings/graphql";
import { isNotNull } from "../../../utils/isNotNull";

const ACCOUNTS_QUERY = gql`
  query GetAccounts {
    accounts {
      id
      name
    }
  }
`;

export interface WithAccountsQuery {
  accounts: GetAccounts_accounts[];
  loading: boolean;
  refetch: () => any;
}

interface AccountsQueryProps {
  children: (data: WithAccountsQuery) => JSX.Element | null;
}

export default class AccountsQuery extends React.PureComponent<
  AccountsQueryProps
> {
  public render() {
    const { children } = this.props;
    return (
      <Query<GetAccounts> query={ACCOUNTS_QUERY}>
        {({ data, loading, refetch }) => {
          let accounts: GetAccounts_accounts[] = [];
          if (data && data.accounts) {
            accounts = data.accounts.filter(isNotNull);
          }
          return children({
            accounts,
            loading,
            refetch,
          });
        }}
      </Query>
    );
  }
}
