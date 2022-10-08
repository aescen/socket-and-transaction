import * as mongoose from 'mongoose';
import { ITransactionRepository } from '../../../core';
import { CreateTransactionDto } from '../../../core/dtos';
export declare class MongoTransactionRepository<T> implements ITransactionRepository<T> {
    private _repository;
    private _userRepository;
    private _populateOnFind;
    private _connection;
    constructor(repository: mongoose.Model<T>, userRepository: mongoose.Model<T>, populateOnFind: string[], connection: mongoose.Connection);
    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    create(item: any): Promise<any>;
    update(id: string, item: T): mongoose.Query<mongoose.HydratedDocument<T, {}, {}>, mongoose.HydratedDocument<T, {}, {}>, {}, T>;
    validateBalance(transaction: CreateTransactionDto): Promise<void>;
    validateTransaction(id: string): Promise<boolean>;
    process(id: string): Promise<void>;
}
