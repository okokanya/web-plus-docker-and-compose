import { User } from '../users/entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    register(dto: CreateUserDto): Promise<CreateUserDto>;
    login(username: string, password: string): Promise<User>;
    auth(userID: number): {
        access_token: string;
    };
}
