import { ResolverMap } from "../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    accounts: (): GQL.IAccount[] => [
      { id: "fake", name: "fake", __typename: "Account" },
      { id: "fake", name: "fake", __typename: "Account" },
      { id: "fake", name: "fake", __typename: "Account" }
    ]
  }
};
