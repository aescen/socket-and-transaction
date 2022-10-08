"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlTransactionRepository = void 0;
const typeorm_1 = require("typeorm");
const model_1 = require("./model");
class MySqlTransactionRepository {
    constructor(repository, userRepository) {
        this._repository = repository;
        this._userRepository = userRepository;
    }
    getAll() {
        return this._repository.find();
    }
    get(id) {
        return this._repository.findOne({ where: { id } });
    }
    create(item) {
        item.status = 'PENDING';
        return this._repository.save(item);
    }
    update(id, item) {
        item.id = id;
        return this._repository.save(item);
    }
    async validateBalance(transaction) {
        const buyerUser = await this._userRepository.findOne({
            where: { id: transaction.from },
        });
        const buyerBalance = Number(buyerUser.balance);
        if (buyerBalance < transaction.amount) {
            throw new Error('BUYER_BALANCE_NOT_ENOUGH');
        }
    }
    async validateTransaction(id) {
        const transaction = (await this._repository.findOne({
            where: { id },
        }));
        if (transaction.status === 'COMPLETED') {
            throw new Error('TRANSACTION_ALREADY_COMPLETED');
        }
        return true;
    }
    async process(id) {
        const transaction = (await this._repository.findOne({
            where: { id },
        }));
        const fromUserDto = new model_1.User();
        fromUserDto.id = transaction.from.id;
        fromUserDto.balance = Number(transaction.to.balance) - transaction.amount;
        const toUserDto = new model_1.User();
        toUserDto.id = transaction.from.id;
        toUserDto.balance = Number(transaction.to.balance) + transaction.amount;
        const updatedTransaction = new model_1.Transaction();
        updatedTransaction.id = id;
        updatedTransaction.status = 'COMPLETED';
        await typeorm_1.getConnection().transaction(async (transactionalEntityManager) => {
            try {
                await transactionalEntityManager.save(fromUserDto);
                await transactionalEntityManager.save(toUserDto);
                await transactionalEntityManager.save(updatedTransaction);
            }
            catch (error) {
                console.log(error);
                throw new Error('ERROR_PROCESSING_TRANSACTION');
            }
        });
    }
}
exports.MySqlTransactionRepository = MySqlTransactionRepository;
//# sourceMappingURL=mysql-transaction-repository.js.map