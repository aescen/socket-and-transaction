import { Injectable } from '@nestjs/common';
import { Transaction } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateTransactionDto } from '../../core/dtos';
import { TransactionFactoryService } from './transaction-factory.service';

@Injectable()
export class TransactionUseCases {
  constructor(
    private dataServices: IDataServices,
    private transactionFactoryService: TransactionFactoryService,
  ) {}

  getAllTransactions(): Promise<Transaction[]> {
    return this.dataServices.transactions.getAll();
  }

  getTransactionById(id: any): Promise<Transaction> {
    return this.dataServices.transactions.get(id);
  }

  async createTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction =
      this.transactionFactoryService.createNewTransaction(createTransactionDto);
    await this.dataServices.transactions.validateBalance(transaction);
    return this.dataServices.transactions.create(transaction);
  }

  async processTransaction(id: string): Promise<Transaction> {
    await this.dataServices.transactions.validateTransaction(id);
    return this.dataServices.transactions.process(id);
  }
}
