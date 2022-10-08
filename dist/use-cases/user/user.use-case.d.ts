import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
import { UserFactoryService } from './user-factory.service';
export declare class UserUseCases {
    private dataServices;
    private userFactoryService;
    constructor(dataServices: IDataServices, userFactoryService: UserFactoryService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: any): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
}
