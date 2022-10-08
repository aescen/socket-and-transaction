import { Chat, User, Transaction } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { ITransactionRepository } from './transaction-repository.abstract';

export abstract class IDataServices {
  abstract chats: IGenericRepository<Chat>;

  abstract users: IGenericRepository<User>;

  abstract transactions: ITransactionRepository<Transaction>;
}
