import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    hashPassword(password: string): Promise<string>;
    create(dto: CreateUserDto): Promise<CreateUserDto & User>;
    findOne(key: string, param: any): Promise<User>;
    updateOne(user: User, dto: UpdateUserDto): Promise<{
        id: number;
        created_at: Date;
        updated_at: Date;
        username: string;
        about: string;
        avatar: string;
        email: string;
        wishes: import("../wishes/entities/wishes.entity").Wish[];
        offers: import("../offers/entities/offers.entity").Offer[];
        wishlists: import("../wishlists/entities/wishlists.entity").Wishlist[];
    }>;
    findMany(query: string): Promise<User[]>;
    findUsersWithWishes(id: number): Promise<User[]>;
}
