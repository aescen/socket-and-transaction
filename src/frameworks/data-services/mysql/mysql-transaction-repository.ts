import { Repository, getConnection } from 'typeorm';
import { ITransactionRepository } from '../../../core';
import { User, Transaction } from './model';

export class MySqlTransactionRepository<T>
  implements ITransactionRepository<T>
{
  private _repository: Repository<T>;
  private _userRepository: Repository<T>;

  constructor(repository: Repository<T>, userRepository: Repository<T>) {
    this._repository = repository;
    this._userRepository = userRepository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: any): Promise<T> {
    return this._repository.findOne({ where: { id } });
  }

  create(item: T): Promise<T> {
    (<any>item).status = 'PENDING';
    return this._repository.save(<any>item);
  }

  update(id: any, item: T) {
    (<any>item).id = id;
    return this._repository.save(<any>item);
  }

  async validateBalance(transaction: any) {
    const buyerUser = await this._userRepository.findOne({
      where: { id: transaction.from },
    });

    const buyerBalance = Number((<any>buyerUser).balance);

    if (buyerBalance < transaction.amount) {
      throw new Error('BUYER_BALANCE_NOT_ENOUGH');
    }
  }

  async validateTransaction(id: any) {
    const transaction = (await this._repository.findOne({
      where: { id },
    })) as any;

    if (transaction.status === 'COMPLETED') {
      throw new Error('TRANSACTION_ALREADY_COMPLETED');
    }

    return true;
  }

  async process(id: any) {
    const transaction = (await this._repository.findOne({
      where: { id },
    })) as any;

    const fromUserDto = new User();
    fromUserDto.id = transaction.from.id;
    fromUserDto.balance = Number(transaction.to.balance) - transaction.amount;
    // {
    //   id: transaction.from.id,
    //   name: transaction.from.name,
    //   balance: Number(transaction.from.balance) - transaction.amount,
    // };
    const toUserDto = new User();
    toUserDto.id = transaction.from.id;
    toUserDto.balance = Number(transaction.to.balance) + transaction.amount;
    // {
    //   id: transaction.from.id,
    //   name: transaction.from.name,
    //   balance: Number(transaction.to.balance) + transaction.amount,
    // };
    const updatedTransaction = new Transaction();
    updatedTransaction.id = id;
    updatedTransaction.status = 'COMPLETED';
    // {
    //   id,
    //   from: transaction.from.id,
    //   to: transaction.to.id,
    //   amount: transaction.amount,
    //   status: 'COMPLETED',
    // } as Transaction;

    // ACID user.balance
    await getConnection().transaction(async (transactionalEntityManager) => {
      try {
        await transactionalEntityManager.save(fromUserDto);
        await transactionalEntityManager.save(toUserDto);
        await transactionalEntityManager.save(updatedTransaction);
      } catch (error) {
        console.log(error);
        throw new Error('ERROR_PROCESSING_TRANSACTION');
      }
    });
  }
}
