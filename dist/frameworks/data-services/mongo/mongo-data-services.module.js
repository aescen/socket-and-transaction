"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDataServicesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("../../../core");
const configuration_1 = require("../../../configuration");
const model_1 = require("./model");
const mongo_data_services_service_1 = require("./mongo-data-services.service");
let MongoDataServicesModule = class MongoDataServicesModule {
};
MongoDataServicesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: model_1.Chat.name, schema: model_1.ChatSchema },
                { name: model_1.User.name, schema: model_1.UserSchema },
                { name: model_1.Transaction.name, schema: model_1.TransactionSchema },
            ]),
            mongoose_1.MongooseModule.forRoot(configuration_1.DATA_BASE_CONFIGURATION.mongoConnectionString),
        ],
        providers: [
            {
                provide: core_1.IDataServices,
                useClass: mongo_data_services_service_1.MongoDataServices,
            },
        ],
        exports: [core_1.IDataServices],
    })
], MongoDataServicesModule);
exports.MongoDataServicesModule = MongoDataServicesModule;
//# sourceMappingURL=mongo-data-services.module.js.map