import { CreateOfferDto } from './dto/create-offer-dto';
import { OffersService } from './offers.service';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    create(dto: CreateOfferDto, req: any): Promise<{
        offer: import("./entities/offers.entity").Offer[];
        updatedWish: import("../wishes/entities/wishes.entity").Wish[];
    }>;
    getAll(): Promise<import("./entities/offers.entity").Offer[]>;
    getOne(id: number): Promise<import("./entities/offers.entity").Offer[]>;
}
