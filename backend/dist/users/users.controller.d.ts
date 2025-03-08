import { WishesService } from 'src/wishes/wishes.service';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    private readonly wishesService;
    constructor(usersService: UsersService, wishesService: WishesService);
    getMe(req: any): Promise<{
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
    update(req: any, body: any): Promise<{
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
    getMeWishes(req: any): Promise<import("../wishes/entities/wishes.entity").Wish[]>;
    getUser(username: any): Promise<import("./entities/users.entity").User>;
    getUsersWishes(username: any): Promise<import("../wishes/entities/wishes.entity").Wish[]>;
    findUsers(query: string): Promise<import("./entities/users.entity").User[]>;
}
