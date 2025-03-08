import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { WishesService } from './wishes.service';
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    create(dto: CreateWishDto, req: any): Promise<{
        owner: import("../users/entities/users.entity").User;
        name: string;
        link: string;
        image: string;
        price: number;
    } & import("./entities/wishes.entity").Wish>;
    getLast(): Promise<import("./entities/wishes.entity").Wish[]>;
    getTop(): Promise<import("./entities/wishes.entity").Wish[]>;
    get(id: number): Promise<import("./entities/wishes.entity").Wish>;
    update(id: number, dto: UpdateWishDto, req: any): Promise<import("./entities/wishes.entity").Wish[]>;
    delete(id: number, req: any): Promise<import("./entities/wishes.entity").Wish>;
    copy(id: number, req: any): Promise<import("./entities/wishes.entity").Wish>;
}
