import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { GetAccounts } from "./gql_types/GetAccounts";

const ACCOUNTS_QUERY = gql`
  query GetAccounts {
    accounts {
      id
      name
    }
  }
`;

export default class AccountsQuery extends Query<GetAccounts> {
  public static defaultProps = {
    query: ACCOUNTS_QUERY,
  };
}
