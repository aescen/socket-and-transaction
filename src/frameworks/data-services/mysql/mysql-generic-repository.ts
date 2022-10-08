import { Repository } from 'typeorm';
import { IGenericRepository } from '../../../core';

export class MySqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: any): Promise<T> {
    return this._repository.findOne({ where: { id } });
  }

  create(item: T): Promise<T> {
    return this._repository.save(<any>item);
  }

  update(id: any, item: T) {
    (<any>item).id = id;
    return this._repository.save(<any>item);
  }
}
