"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../services/data-services/data-services.module");
const transaction_factory_service_1 = require("./transaction-factory.service");
const transaction_use_case_1 = require("./transaction.use-case");
let TransactionUseCasesModule = class TransactionUseCasesModule {
};
TransactionUseCasesModule = __decorate([
    common_1.Module({
        imports: [data_services_module_1.DataServicesModule],
        providers: [transaction_factory_service_1.TransactionFactoryService, transaction_use_case_1.TransactionUseCases],
        exports: [transaction_factory_service_1.TransactionFactoryService, transaction_use_case_1.TransactionUseCases],
    })
], TransactionUseCasesModule);
exports.TransactionUseCasesModule = TransactionUseCasesModule;
//# sourceMappingURL=transaction-use-cases.module.js.map