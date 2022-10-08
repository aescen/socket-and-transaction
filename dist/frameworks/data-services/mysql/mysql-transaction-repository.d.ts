import { Repository } from 'typeorm';
import { ITransactionRepository } from '../../../core';
export declare class MySqlTransactionRepository<T> implements ITransactionRepository<T> {
    private _repository;
    private _userRepository;
    constructor(repository: Repository<T>, userRepository: Repository<T>);
    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    create(item: T): Promise<T>;
    update(id: any, item: T): Promise<any>;
    validateBalance(transaction: any): Promise<void>;
    validateTransaction(id: any): Promise<boolean>;
    process(id: any): Promise<void>;
}
