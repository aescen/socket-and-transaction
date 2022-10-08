import { OnApplicationBootstrap } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { MongoTransactionRepository } from './mongo-transaction-repository';
import { Chat, ChatDocument, User, UserDocument, Transaction, TransactionDocument } from './model';
export declare class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    private ChatRepository;
    private UserRepository;
    private TransactionRepository;
    private connection;
    chats: MongoGenericRepository<Chat>;
    users: MongoGenericRepository<User>;
    transactions: MongoTransactionRepository<Transaction>;
    constructor(ChatRepository: mongoose.Model<ChatDocument>, UserRepository: mongoose.Model<UserDocument>, TransactionRepository: mongoose.Model<TransactionDocument>, connection: mongoose.Connection);
    onApplicationBootstrap(): void;
}
