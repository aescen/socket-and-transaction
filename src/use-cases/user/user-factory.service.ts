import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.balance = createUserDto.balance;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.name = updateUserDto.name;
    newUser.balance = updateUserDto.balance;

    return newUser;
  }
}
