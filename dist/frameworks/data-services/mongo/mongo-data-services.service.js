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
exports.MongoDataServices = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const mongo_generic_repository_1 = require("./mongo-generic-repository");
const mongo_transaction_repository_1 = require("./mongo-transaction-repository");
const model_1 = require("./model");
let MongoDataServices = class MongoDataServices {
    constructor(ChatRepository, UserRepository, TransactionRepository, connection) {
        this.ChatRepository = ChatRepository;
        this.UserRepository = UserRepository;
        this.TransactionRepository = TransactionRepository;
        this.connection = connection;
    }
    onApplicationBootstrap() {
        this.chats = new mongo_generic_repository_1.MongoGenericRepository(this.ChatRepository);
        this.users = new mongo_generic_repository_1.MongoGenericRepository(this.UserRepository);
        this.transactions = new mongo_transaction_repository_1.MongoTransactionRepository(this.TransactionRepository, this.UserRepository, ['from', 'to'], this.connection);
    }
};
MongoDataServices = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(model_1.Chat.name)),
    __param(1, mongoose_1.InjectModel(model_1.User.name)),
    __param(2, mongoose_1.InjectModel(model_1.Transaction.name)),
    __param(3, mongoose_1.InjectConnection()),
    __metadata("design:paramtypes", [mongoose.Model, mongoose.Model, mongoose.Model, mongoose.Connection])
], MongoDataServices);
exports.MongoDataServices = MongoDataServices;
//# sourceMappingURL=mongo-data-services.service.js.map