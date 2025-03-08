import { User } from 'src/users/entities/users.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist-dto';
import { UpdateWishlistDto } from './dto/update-wishlist-dto';
import { Wishlist } from './entities/wishlists.entity';
export declare class WishlistsService {
    private readonly wishlistsRepository;
    private readonly wishesService;
    constructor(wishlistsRepository: Repository<Wishlist>, wishesService: WishesService);
    create(dto: CreateWishlistDto, owner: User): Promise<{
        image: string;
        name: string;
        owner: User;
        items: any[];
    } & Wishlist>;
    findAll(): Promise<Wishlist[]>;
    findOne(id: number): Promise<Wishlist>;
    updateOne(id: number, dto: UpdateWishlistDto, user: User): Promise<Wishlist>;
    remove(id: number, user: User): Promise<Wishlist>;
}
