"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUseCases = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../core/abstracts");
const transaction_factory_service_1 = require("./transaction-factory.service");
let TransactionUseCases = class TransactionUseCases {
    constructor(dataServices, transactionFactoryService) {
        this.dataServices = dataServices;
        this.transactionFactoryService = transactionFactoryService;
    }
    getAllTransactions() {
        return this.dataServices.transactions.getAll();
    }
    getTransactionById(id) {
        return this.dataServices.transactions.get(id);
    }
    async createTransaction(createTransactionDto) {
        const transaction = this.transactionFactoryService.createNewTransaction(createTransactionDto);
        await this.dataServices.transactions.validateBalance(transaction);
        return this.dataServices.transactions.create(transaction);
    }
    async processTransaction(id) {
        await this.dataServices.transactions.validateTransaction(id);
        return this.dataServices.transactions.process(id);
    }
};
TransactionUseCases = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        transaction_factory_service_1.TransactionFactoryService])
], TransactionUseCases);
exports.TransactionUseCases = TransactionUseCases;
//# sourceMappingURL=transaction.use-case.js.map