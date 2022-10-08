"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const data_services_module_1 = require("./services/data-services/data-services.module");
const socket_services_module_1 = require("./services/socket-services/socket-services.module");
const chat_use_cases_module_1 = require("./use-cases/chat/chat-use-cases.module");
const user_use_cases_module_1 = require("./use-cases/user/user-use-cases.module");
const transaction_use_cases_module_1 = require("./use-cases/transaction/transaction-use-cases.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            data_services_module_1.DataServicesModule,
            socket_services_module_1.SocketServicesModule,
            chat_use_cases_module_1.ChatUseCasesModule,
            user_use_cases_module_1.UserUseCasesModule,
            transaction_use_cases_module_1.TransactionUseCasesModule,
        ],
        controllers: [
            controllers_1.AppController,
            controllers_1.ChatController,
            controllers_1.UserController,
            controllers_1.TransactionController,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map