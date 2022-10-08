import 'dotenv/config';

export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString:
    (process.env.MONGO_CONNECTION_STRING as string) ||
    'mongodb://localhost:27017/',

  mysqlConnection: {
    type: 'mysql',
    host: (process.env.MYSQL_HOST as string) || 'localhost',
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
