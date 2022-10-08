import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../frameworks/data-services/mongo/mongo-data-services.module';
import { MySqlDataServicesModule } from '../../frameworks/data-services/mysql/mysql-data-services.module';

@Module({
  imports: [MySqlDataServicesModule],
  exports: [MySqlDataServicesModule],
})
export class DataServicesModule {}
