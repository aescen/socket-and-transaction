import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ChatFactoryService } from './chat-factory.service';
import { ChatUseCases } from './chat.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ChatFactoryService, ChatUseCases],
  exports: [ChatFactoryService, ChatUseCases],
})
export class ChatUseCasesModule {}
