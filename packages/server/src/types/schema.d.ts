// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    accounts: Array<IAccount>;
  }

  interface IAccount {
    __typename: 'Account';
    id: string;
    name: string;
    iban: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    addAccount: IAccount;
    removeAccount: string | null;
  }

  interface IAddAccountOnMutationArguments {
    name: string;
  }

  interface IRemoveAccountOnMutationArguments {
    id: string;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }
}

// tslint:enable
