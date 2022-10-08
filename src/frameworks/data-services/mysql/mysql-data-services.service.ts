import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../../../core';
import { MySqlGenericRepository } from './mysql-generic-repository';
import { MySqlTransactionRepository } from './mysql-transaction-repository';
import { Chat, User, Transaction } from './model';

@Injectable()
export class MySqlDataServices
  implements IDataServices, OnApplicationBootstrap
{
  chats: MySqlGenericRepository<Chat>;
  users: MySqlGenericRepository<User>;
  transactions: MySqlTransactionRepository<Transaction>;

  constructor(
    @InjectRepository(Chat)
    private ChatRepository: Repository<Chat>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Transaction)
    private TransactionRepository: Repository<Transaction>,
  ) {}

  onApplicationBootstrap() {
    this.chats = new MySqlGenericRepository<Chat>(this.ChatRepository);
    this.users = new MySqlGenericRepository<User>(this.UserRepository);
    this.transactions = new MySqlTransactionRepository<any>(
      this.TransactionRepository,
      this.UserRepository,
    );
  }
}
