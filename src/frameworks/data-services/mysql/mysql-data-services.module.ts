import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from '../../../core';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import { Chat, Transaction, User } from './model';
import { MySqlDataServices } from './mysql-data-services.service';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    TypeOrmModule.forRoot(DATA_BASE_CONFIGURATION.mysqlConnection),
    TypeOrmModule.forFeature([Chat, Transaction, User]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MySqlDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MySqlDataServicesModule {}
