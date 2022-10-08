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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let Transaction = class Transaction {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => _1.User, {
        eager: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.User)
], Transaction.prototype, "from", void 0);
__decorate([
    typeorm_1.OneToOne(() => _1.User, {
        eager: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.User)
], Transaction.prototype, "to", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
Transaction = __decorate([
    typeorm_1.Entity()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.model.js.map