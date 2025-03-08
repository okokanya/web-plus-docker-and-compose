import { CreateWishlistDto } from './dto/create-wishlist-dto';
import { UpdateWishlistDto } from './dto/update-wishlist-dto';
import { WishlistsService } from './wishlists.service';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    getAll(): Promise<import("./entities/wishlists.entity").Wishlist[]>;
    create(dto: CreateWishlistDto, req: any): Promise<{
        image: string;
        name: string;
        owner: import("../users/entities/users.entity").User;
        items: any[];
    } & import("./entities/wishlists.entity").Wishlist>;
    getOne(id: number): Promise<import("./entities/wishlists.entity").Wishlist>;
    update(dto: UpdateWishlistDto, id: number, req: any): Promise<import("./entities/wishlists.entity").Wishlist>;
    delete(id: number, req: any): Promise<import("./entities/wishlists.entity").Wishlist>;
}
