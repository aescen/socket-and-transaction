import { Transaction } from '../../core/entities';
import { CreateTransactionDto } from '../../core/dtos';
export declare class TransactionFactoryService {
    createNewTransaction(createTransactionDto: CreateTransactionDto): Transaction;
}
