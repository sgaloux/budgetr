import { getCustomRepository } from "typeorm";
import { AccountRepository } from "../../repositories/accountRepository";
import { ResolverMap } from "../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    accounts: async () => {
      const accRepository = getCustomRepository(AccountRepository);
      return accRepository.find({ where: {} });
    },
  },
  Mutation: {
    addAccount: async (_, { name }: GQL.IAddAccountOnMutationArguments) => {
      const accRepository = getCustomRepository(AccountRepository);
      const accountCreated = accRepository.create({ name });
      await accRepository.save(accountCreated);
      return accountCreated;
    },
    removeAccount: async (_, { id }: GQL.IRemoveAccountOnMutationArguments) => {
      const accRepository = getCustomRepository(AccountRepository);

      const acc = await accRepository.findOne(id);
      if (acc != null) {
        await accRepository.remove(acc);
        return id;
      }
      return null;
    },
  },
};
