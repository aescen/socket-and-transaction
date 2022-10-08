import { Module } from '@nestjs/common';
import {
  AppController,
  ChatController,
  UserController,
  TransactionController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { SocketServicesModule } from './services/socket-services/socket-services.module';
import { ChatUseCasesModule } from './use-cases/chat/chat-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { TransactionUseCasesModule } from './use-cases/transaction/transaction-use-cases.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    //   exclude: ['/api/(.*)'],
    // }),
    DataServicesModule,
    SocketServicesModule,
    ChatUseCasesModule,
    UserUseCasesModule,
    TransactionUseCasesModule,
  ],
  controllers: [
    AppController,
    ChatController,
    UserController,
    TransactionController,
  ],
  providers: [],
})
export class AppModule {}
