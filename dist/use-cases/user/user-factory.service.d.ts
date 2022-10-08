import { User } from '../../core/entities';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
export declare class UserFactoryService {
    createNewUser(createUserDto: CreateUserDto): User;
    updateUser(updateUserDto: UpdateUserDto): User;
}
