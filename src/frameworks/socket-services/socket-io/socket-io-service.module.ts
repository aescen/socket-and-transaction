import { Module } from '@nestjs/common';
import { ISocketGateways } from '../../../core';
import { SocketIOGateway } from './socket-io.gateway';
import { MongoDataServicesModule } from '../../data-services/mongo/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  providers: [
    {
      provide: ISocketGateways,
      useClass: SocketIOGateway,
    },
  ],
  exports: [ISocketGateways],
})
export class SocketIOGatewaysModule {}
