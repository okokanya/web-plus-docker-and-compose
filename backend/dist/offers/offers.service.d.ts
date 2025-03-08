import { User } from 'src/users/entities/users.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer-dto';
import { Offer } from './entities/offers.entity';
export declare class OffersService {
    private offerRepository;
    private readonly wishesService;
    constructor(offerRepository: Repository<Offer>, wishesService: WishesService);
    create(dto: CreateOfferDto, user: User): Promise<{
        offer: Offer[];
        updatedWish: import("../wishes/entities/wishes.entity").Wish[];
    }>;
    findOne(id: number): Promise<Offer[]>;
    findMany(): Promise<Offer[]>;
}
