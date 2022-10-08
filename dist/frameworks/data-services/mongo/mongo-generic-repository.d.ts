import { Model } from 'mongoose';
import { IGenericRepository } from '../../../core';
export declare class MongoGenericRepository<T> implements IGenericRepository<T> {
    private _repository;
    private _populateOnFind;
    constructor(repository: Model<T>, populateOnFind?: string[]);
    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    create(item: T): Promise<T>;
    update(id: string, item: T): import("mongoose").Query<import("mongoose").HydratedDocument<T, {}, {}>, import("mongoose").HydratedDocument<T, {}, {}>, {}, T>;
}
