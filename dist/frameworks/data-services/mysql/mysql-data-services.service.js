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
exports.MySqlDataServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mysql_generic_repository_1 = require("./mysql-generic-repository");
const mysql_transaction_repository_1 = require("./mysql-transaction-repository");
const model_1 = require("./model");
let MySqlDataServices = class MySqlDataServices {
    constructor(ChatRepository, UserRepository, TransactionRepository) {
        this.ChatRepository = ChatRepository;
        this.UserRepository = UserRepository;
        this.TransactionRepository = TransactionRepository;
    }
    onApplicationBootstrap() {
        this.chats = new mysql_generic_repository_1.MySqlGenericRepository(this.ChatRepository);
        this.users = new mysql_generic_repository_1.MySqlGenericRepository(this.UserRepository);
        this.transactions = new mysql_transaction_repository_1.MySqlTransactionRepository(this.TransactionRepository, this.UserRepository);
    }
};
MySqlDataServices = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(model_1.Chat)),
    __param(1, typeorm_1.InjectRepository(model_1.User)),
    __param(2, typeorm_1.InjectRepository(model_1.Transaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MySqlDataServices);
exports.MySqlDataServices = MySqlDataServices;
//# sourceMappingURL=mysql-data-services.service.js.map