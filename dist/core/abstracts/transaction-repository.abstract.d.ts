import { IGenericRepository } from './generic-repository.abstract';
import { CreateTransactionDto } from '../dtos';
export declare abstract class ITransactionRepository<T> extends IGenericRepository<T> {
    abstract validateBalance(transaction: CreateTransactionDto): any;
    abstract validateTransaction(id: string): any;
    abstract process(id: string): any;
}
