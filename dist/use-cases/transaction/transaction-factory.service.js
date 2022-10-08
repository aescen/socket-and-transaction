"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFactoryService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../core/entities");
let TransactionFactoryService = class TransactionFactoryService {
    createNewTransaction(createTransactionDto) {
        const newTransaction = new entities_1.Transaction();
        newTransaction.from = createTransactionDto.from;
        newTransaction.to = createTransactionDto.to;
        newTransaction.amount = createTransactionDto.amount;
        newTransaction.status = createTransactionDto.status;
        return newTransaction;
    }
};
TransactionFactoryService = __decorate([
    common_1.Injectable()
], TransactionFactoryService);
exports.TransactionFactoryService = TransactionFactoryService;
//# sourceMappingURL=transaction-factory.service.js.map