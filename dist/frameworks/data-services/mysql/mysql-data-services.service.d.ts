import { OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IDataServices } from '../../../core';
import { MySqlGenericRepository } from './mysql-generic-repository';
import { MySqlTransactionRepository } from './mysql-transaction-repository';
import { Chat, User, Transaction } from './model';
export declare class MySqlDataServices implements IDataServices, OnApplicationBootstrap {
    private ChatRepository;
    private UserRepository;
    private TransactionRepository;
    chats: MySqlGenericRepository<Chat>;
    users: MySqlGenericRepository<User>;
    transactions: MySqlTransactionRepository<Transaction>;
    constructor(ChatRepository: Repository<Chat>, UserRepository: Repository<User>, TransactionRepository: Repository<Transaction>);
    onApplicationBootstrap(): void;
}
