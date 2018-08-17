import * as React from "react";
import { RootStore } from "../store/RootStore";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

interface IAppProps {}

const GET_ACCOUNTS = gql`
  query {
    accounts {
      name
      id
    }
  }
`;

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Query query={GET_ACCOUNTS}>
          {({ loading, error, data, refetch }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <div>error : {error}</div>;
            return (
              <div>
                <ul>
                  {data.accounts.map(a => (
                    <li key={a.id}>{a.name}</li>
                  ))}
                </ul>
                <div>
                  <button onClick={() => refetch()}>Get data</button>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
