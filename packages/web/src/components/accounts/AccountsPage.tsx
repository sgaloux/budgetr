import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export interface AccountsProps {}

const accountsQuery = gql`
  query {
    accounts {
      id
      name
    }
  }
`;

export default class Accounts extends React.Component<AccountsProps, any> {
  public render() {
    return (
      <div>
        <h1>Accounts</h1>
        <Query query={accountsQuery}>
          {({ loading, error, data }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <div>error: {error}</div>;
            else
              return (
                <ul>
                  {data.accounts.map(e => (
                    <li key={e.id}>{e.name}</li>
                  ))}
                </ul>
              );
          }}
        </Query>
      </div>
    );
  }
}
