import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateChatDto } from '../core/dtos';
import { ChatUseCases } from '../use-cases/chat/chat.use-case';

@Controller('api/chat')
export class ChatController {
  constructor(private chatUseCases: ChatUseCases) {}

  @Get()
  async getAll() {
    return this.chatUseCases.getAllChats();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.chatUseCases.getChatById(id);
  }

  @Post()
  createChat(@Body() chatDto: CreateChatDto) {
    return this.chatUseCases.createChat(chatDto);
  }
}
