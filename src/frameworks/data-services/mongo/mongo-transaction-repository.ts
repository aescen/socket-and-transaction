import * as mongoose from 'mongoose';
import { ITransactionRepository } from '../../../core';
import {
  UpdateUserDto,
  CreateTransactionDto,
  UpdateTransactionDto,
} from '../../../core/dtos';

export class MongoTransactionRepository<T>
  implements ITransactionRepository<T>
{
  private _repository: mongoose.Model<T>;
  private _userRepository: mongoose.Model<T>;
  private _populateOnFind: string[];
  private _connection: mongoose.Connection;

  constructor(
    repository: mongoose.Model<T>,
    userRepository: mongoose.Model<T>,
    populateOnFind: string[] = [],
    connection: mongoose.Connection,
  ) {
    this._repository = repository;
    this._userRepository = userRepository;
    this._populateOnFind = populateOnFind;
    this._connection = connection;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<T> {
    return this._repository.findById(id).populate(this._populateOnFind).exec();
  }

  create(item: any): Promise<any> {
    item.status = 'PENDING';
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  async validateBalance(transaction: CreateTransactionDto) {
    const buyerUser = await this._userRepository
      .findById(transaction.from)
      .exec();
    const buyerBalance = Number((<any>buyerUser).balance);

    if (buyerBalance < transaction.amount) {
      throw new Error('BUYER_BALANCE_NOT_ENOUGH');
    }
  }

  async validateTransaction(id: string) {
    const transaction = (await this._repository.findById(id).exec()) as any;

    if (transaction.status === 'COMPLETED') {
      throw new Error('TRANSACTION_ALREADY_COMPLETED');
    }

    return true;
  }

  async process(id: string) {
    const transaction = (await this._repository
      .findById(id)
      .populate(this._populateOnFind)
      .exec()) as any;
    const fromUserId = transaction.from._id;
    const toUserId = transaction.to._id;
    const fromUserDto: UpdateUserDto = {
      balance: Number(transaction.from.balance) - transaction.amount,
    };
    const toUserDto: UpdateUserDto = {
      balance: Number(transaction.to.balance) + transaction.amount,
    };
    const updatedTransaction: UpdateTransactionDto = {
      status: 'COMPLETED',
    };

    // ACID user.balance
    const dbSession = await this._connection.startSession();
    dbSession.startTransaction();
    try {
      await this._userRepository
        .findByIdAndUpdate(fromUserId, fromUserDto)
        .session(dbSession);
      await this._userRepository
        .findByIdAndUpdate(toUserId, toUserDto)
        .session(dbSession);
      await this._repository
        .findByIdAndUpdate(id, updatedTransaction)
        .session(dbSession);
    } catch (error) {
      await dbSession.abortTransaction();
      dbSession.endSession();

      throw new Error('ERROR_PROCESSING_TRANSACTION');
    }

    await dbSession.commitTransaction();
    dbSession.endSession();
  }
}
