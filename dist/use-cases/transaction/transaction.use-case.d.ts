import { Transaction } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateTransactionDto } from '../../core/dtos';
import { TransactionFactoryService } from './transaction-factory.service';
export declare class TransactionUseCases {
    private dataServices;
    private transactionFactoryService;
    constructor(dataServices: IDataServices, transactionFactoryService: TransactionFactoryService);
    getAllTransactions(): Promise<Transaction[]>;
    getTransactionById(id: any): Promise<Transaction>;
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    processTransaction(id: string): Promise<Transaction>;
}
