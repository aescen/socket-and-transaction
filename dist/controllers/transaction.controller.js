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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../core/dtos");
const transaction_use_case_1 = require("../use-cases/transaction/transaction.use-case");
let TransactionController = class TransactionController {
    constructor(transactionUseCases) {
        this.transactionUseCases = transactionUseCases;
    }
    getAll() {
        return this.transactionUseCases.getAllTransactions();
    }
    getById(id) {
        return this.transactionUseCases.getTransactionById(id);
    }
    async createTransaction(transactionDto) {
        try {
            const result = await this.transactionUseCases.createTransaction(transactionDto);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException({
                message: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async processTransaction(transactionId) {
        try {
            const result = await this.transactionUseCases.processTransaction(transactionId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException({
                message: err.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    common_1.Put('process/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "processTransaction", null);
TransactionController = __decorate([
    common_1.Controller('api/transaction'),
    __metadata("design:paramtypes", [transaction_use_case_1.TransactionUseCases])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map