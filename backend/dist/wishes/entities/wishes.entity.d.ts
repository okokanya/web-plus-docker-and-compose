import { User } from 'src/users/entities/users.entity';
import { Offer } from 'src/offers/entities/offers.entity';
export declare class Wish {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    description: string;
    offers: Offer[];
    copied: number;
}
