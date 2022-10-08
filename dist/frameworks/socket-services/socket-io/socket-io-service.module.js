"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOGatewaysModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../../../core");
const socket_io_gateway_1 = require("./socket-io.gateway");
const mongo_data_services_module_1 = require("../../data-services/mongo/mongo-data-services.module");
let SocketIOGatewaysModule = class SocketIOGatewaysModule {
};
SocketIOGatewaysModule = __decorate([
    common_1.Module({
        imports: [mongo_data_services_module_1.MongoDataServicesModule],
        providers: [
            {
                provide: core_1.ISocketGateways,
                useClass: socket_io_gateway_1.SocketIOGateway,
            },
        ],
        exports: [core_1.ISocketGateways],
    })
], SocketIOGatewaysModule);
exports.SocketIOGatewaysModule = SocketIOGatewaysModule;
//# sourceMappingURL=socket-io-service.module.js.map