"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_BASE_CONFIGURATION = void 0;
require("dotenv/config");
exports.DATA_BASE_CONFIGURATION = {
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING ||
        'mongodb://localhost:27017/',
    mysqlConnection: {
        type: 'mysql',
        host: process.env.MYSQL_HOST || 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
        retryAttempts: 3,
    },
};
//# sourceMappingURL=index.js.map