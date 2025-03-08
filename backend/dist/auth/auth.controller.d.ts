import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signin(req: any): {
        access_token: string;
    };
    signup(createUserDto: CreateUserDto): Promise<CreateUserDto>;
}
