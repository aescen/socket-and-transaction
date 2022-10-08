import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateTransactionDto } from '../core/dtos';
import { TransactionUseCases } from '../use-cases/transaction/transaction.use-case';

@Controller('api/transaction')
export class TransactionController {
  constructor(private transactionUseCases: TransactionUseCases) {}

  @Get()
  getAll() {
    return this.transactionUseCases.getAllTransactions();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.transactionUseCases.getTransactionById(id);
  }

  @Post()
  async createTransaction(@Body() transactionDto: CreateTransactionDto) {
    try {
      const result: any = await this.transactionUseCases.createTransaction(
        transactionDto,
      );
      return result;
    } catch (err) {
      throw new HttpException(
        {
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put('process/:id')
  async processTransaction(@Param('id') transactionId: string) {
    try {
      const result: any = await this.transactionUseCases.processTransaction(
        transactionId,
      );
      return result;
    } catch (err) {
      throw new HttpException(
        {
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
