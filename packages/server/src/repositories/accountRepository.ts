import { Repository, EntityRepository } from "typeorm";
import { Account } from "../entity/Account";

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {}
