import { Repository } from 'typeorm';
import { IGenericRepository } from '../../../core';
export declare class MySqlGenericRepository<T> implements IGenericRepository<T> {
    private _repository;
    constructor(repository: Repository<T>);
    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    create(item: T): Promise<T>;
    update(id: any, item: T): Promise<any>;
}
