import { IGenericRepository } from './generic-repository.abstract';
import { CreateTransactionDto } from '../dtos';

export abstract class ITransactionRepository<T> extends IGenericRepository<T> {
  abstract validateBalance(transaction: CreateTransactionDto);
  abstract validateTransaction(id: string);
  abstract process(id: string);
}
