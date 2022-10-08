"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoTransactionRepository = void 0;
class MongoTransactionRepository {
    constructor(repository, userRepository, populateOnFind = [], connection) {
        this._repository = repository;
        this._userRepository = userRepository;
        this._populateOnFind = populateOnFind;
        this._connection = connection;
    }
    getAll() {
        return this._repository.find().populate(this._populateOnFind).exec();
    }
    get(id) {
        return this._repository.findById(id).populate(this._populateOnFind).exec();
    }
    create(item) {
        item.status = 'PENDING';
        return this._repository.create(item);
    }
    update(id, item) {
        return this._repository.findByIdAndUpdate(id, item);
    }
    async validateBalance(transaction) {
        const buyerUser = await this._userRepository
            .findById(transaction.from)
            .exec();
        const buyerBalance = Number(buyerUser.balance);
        if (buyerBalance < transaction.amount) {
            throw new Error('BUYER_BALANCE_NOT_ENOUGH');
        }
    }
    async validateTransaction(id) {
        const transaction = (await this._repository.findById(id).exec());
        if (transaction.status === 'COMPLETED') {
            throw new Error('TRANSACTION_ALREADY_COMPLETED');
        }
        return true;
    }
    async process(id) {
        const transaction = (await this._repository
            .findById(id)
            .populate(this._populateOnFind)
            .exec());
        const fromUserId = transaction.from._id;
        const toUserId = transaction.to._id;
        const fromUserDto = {
            balance: Number(transaction.from.balance) - transaction.amount,
        };
        const toUserDto = {
            balance: Number(transaction.to.balance) + transaction.amount,
        };
        const updatedTransaction = {
            status: 'COMPLETED',
        };
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
        }
        catch (error) {
            await dbSession.abortTransaction();
            dbSession.endSession();
            throw new Error('ERROR_PROCESSING_TRANSACTION');
        }
        await dbSession.commitTransaction();
        dbSession.endSession();
    }
}
exports.MongoTransactionRepository = MongoTransactionRepository;
//# sourceMappingURL=mongo-transaction-repository.js.map