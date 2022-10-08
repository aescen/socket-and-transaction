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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../core/dtos");
const chat_use_case_1 = require("../use-cases/chat/chat.use-case");
let ChatController = class ChatController {
    constructor(chatUseCases) {
        this.chatUseCases = chatUseCases;
    }
    async getAll() {
        return this.chatUseCases.getAllChats();
    }
    async getById(id) {
        return this.chatUseCases.getChatById(id);
    }
    createChat(chatDto) {
        return this.chatUseCases.createChat(chatDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateChatDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createChat", null);
ChatController = __decorate([
    common_1.Controller('api/chat'),
    __metadata("design:paramtypes", [chat_use_case_1.ChatUseCases])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map