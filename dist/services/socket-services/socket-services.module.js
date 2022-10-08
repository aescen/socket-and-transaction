"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServicesModule = void 0;
const common_1 = require("@nestjs/common");
const socket_io_service_module_1 = require("../../frameworks/socket-services/socket-io/socket-io-service.module");
let SocketServicesModule = class SocketServicesModule {
};
SocketServicesModule = __decorate([
    common_1.Module({
        imports: [socket_io_service_module_1.SocketIOGatewaysModule],
        exports: [socket_io_service_module_1.SocketIOGatewaysModule],
    })
], SocketServicesModule);
exports.SocketServicesModule = SocketServicesModule;
//# sourceMappingURL=socket-services.module.js.map