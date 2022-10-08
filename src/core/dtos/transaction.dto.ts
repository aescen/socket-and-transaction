import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTransactionDto {
  id?: any;

  @IsNotEmpty()
  from: any;

  @IsNotEmpty()
  to: any;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  status: string;
}

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
