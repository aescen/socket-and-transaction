import 'dotenv/config';
export declare const DATA_BASE_CONFIGURATION: {
    mongoConnectionString: string;
    mysqlConnection: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: any[];
        synchronize: boolean;
        autoLoadEntities: boolean;
        retryAttempts: number;
    };
};
