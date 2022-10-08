import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  id?: any;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
