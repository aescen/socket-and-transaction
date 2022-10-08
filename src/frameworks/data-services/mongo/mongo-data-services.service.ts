import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { MongoTransactionRepository } from './mongo-transaction-repository';
import {
  Chat,
  ChatDocument,
  User,
  UserDocument,
  Transaction,
  TransactionDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  chats: MongoGenericRepository<Chat>;
  users: MongoGenericRepository<User>;
  transactions: MongoTransactionRepository<Transaction>;

  constructor(
    @InjectModel(Chat.name)
    private ChatRepository: mongoose.Model<ChatDocument>,
    @InjectModel(User.name)
    private UserRepository: mongoose.Model<UserDocument>,
    @InjectModel(Transaction.name)
    private TransactionRepository: mongoose.Model<TransactionDocument>,
    @InjectConnection() private connection: mongoose.Connection,
  ) {}

  onApplicationBootstrap() {
    this.chats = new MongoGenericRepository<Chat>(this.ChatRepository);
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.transactions = new MongoTransactionRepository<any>(
      this.TransactionRepository,
      this.UserRepository,
      ['from', 'to'],
      this.connection,
    );
  }
}
