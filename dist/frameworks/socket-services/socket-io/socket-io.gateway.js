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
exports.SocketIOGateway = void 0;
const abstracts_1 = require("../../../core/abstracts");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_model_1 = require("./../../data-services/mongo/model/chat.model");
const options = {
    cors: {
        origin: '*',
    },
};
let SocketIOGateway = class SocketIOGateway {
    constructor(dataServices) {
        this.dataServices = dataServices;
    }
    handleMessage(chat) {
        this.server.emit('message', chat);
    }
    afterInit(server) {
        console.log('Server init.');
    }
    handleDisconnect(client) {
        console.log(`Disconnected: ${client.id}`);
    }
    handleConnection(client, ...args) {
        console.log(`Connected ${client.id}`);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], SocketIOGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('message'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_model_1.Chat]),
    __metadata("design:returntype", void 0)
], SocketIOGateway.prototype, "handleMessage", null);
SocketIOGateway = __decorate([
    websockets_1.WebSocketGateway(options),
    __metadata("design:paramtypes", [abstracts_1.IDataServices])
], SocketIOGateway);
exports.SocketIOGateway = SocketIOGateway;
//# sourceMappingURL=socket-io.gateway.js.map