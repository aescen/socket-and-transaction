import { Module } from '@nestjs/common';
import { SocketIOGatewaysModule } from '../../frameworks/socket-services/socket-io/socket-io-service.module';

@Module({
  imports: [SocketIOGatewaysModule],
  exports: [SocketIOGatewaysModule],
})
export class SocketServicesModule {}
