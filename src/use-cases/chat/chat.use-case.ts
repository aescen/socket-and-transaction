import { Injectable } from '@nestjs/common';
import { Chat } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateChatDto, UpdateChatDto } from '../../core/dtos';
import { ChatFactoryService } from './chat-factory.service';

@Injectable()
export class ChatUseCases {
  constructor(
    private dataServices: IDataServices,
    private chatFactoryService: ChatFactoryService,
  ) {}

  getAllChats(): Promise<Chat[]> {
    return this.dataServices.chats.getAll();
  }

  getChatById(id: any): Promise<Chat> {
    return this.dataServices.chats.get(id);
  }

  createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = this.chatFactoryService.createNewChat(createChatDto);
    return this.dataServices.chats.create(chat);
  }
}
