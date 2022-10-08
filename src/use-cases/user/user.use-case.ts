import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return this.dataServices.users.create(user);
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
