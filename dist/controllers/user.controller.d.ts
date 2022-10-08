import { CreateUserDto, UpdateUserDto } from '../core/dtos';
import { UserUseCases } from '../use-cases/user/user.use-case';
export declare class UserController {
    private userUseCases;
    constructor(userUseCases: UserUseCases);
    getAll(): Promise<import("../core").User[]>;
    getById(id: any): Promise<import("../core").User>;
    createUser(userDto: CreateUserDto): Promise<import("../core").User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<import("../core").User>;
}
