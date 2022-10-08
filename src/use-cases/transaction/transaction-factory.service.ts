import { Injectable } from '@nestjs/common';
import { Transaction } from '../../core/entities';
import { CreateTransactionDto } from '../../core/dtos';

@Injectable()
export class TransactionFactoryService {
  createNewTransaction(createTransactionDto: CreateTransactionDto) {
    const newTransaction = new Transaction();
    newTransaction.from = createTransactionDto.from;
    newTransaction.to = createTransactionDto.to;
    newTransaction.amount = createTransactionDto.amount;
    newTransaction.status = createTransactionDto.status;

    return newTransaction;
  }
}
