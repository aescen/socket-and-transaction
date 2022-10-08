import { CreateTransactionDto } from '../core/dtos';
import { TransactionUseCases } from '../use-cases/transaction/transaction.use-case';
export declare class TransactionController {
    private transactionUseCases;
    constructor(transactionUseCases: TransactionUseCases);
    getAll(): Promise<import("../core").Transaction[]>;
    getById(id: any): Promise<import("../core").Transaction>;
    createTransaction(transactionDto: CreateTransactionDto): Promise<any>;
    processTransaction(transactionId: string): Promise<any>;
}
